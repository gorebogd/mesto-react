import React, { useState, useEffect } from 'react';
// import profilePhoto from '../images/cousteau.jpg';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';



function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);
    // const [userName, setUserName] = useState('...');
    // const [userDescription, setUserDescription] = useState('...');
    // const [userAvatar, setUserAvatar] = useState(profilePhoto);
    const [cards, setCards] = useState([]);


    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);  
        api.toggleLike(card._id, !isLiked)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        });
    } 

    function handleCardDelete(card) {
        api.removeCard(card._id)
        .then(() => {
            const newCards = cards.filter((item) => item._id !== card._id);
            setCards(newCards);
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        api.getCards()
          .then((res) => {
            setCards(res);
          })
          .catch((err) => console.log(err));
      }, []);

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                        <img className="profile__avatar"
                             src={currentUser.avatar}
                             alt="Аватар"
                        />
                    </div>
                    <div className="profile__block">
                        <div className="profile__info">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__description">{currentUser.about}</p>
                    </div>
                    <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
                </div>
            </section>
            <section className="cards">
                <div className="cards__grid">{cards.map((item) => {
                    return (
                        <Card
                            card={item}
                            key={item._id}
                            onCardClick={props.onCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                        />
                    );
                })}
                </div>
            </section>
        </main>
    )

}

export default Main;