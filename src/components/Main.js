import React, { useState, useEffect } from 'react';
import profilePhoto from '../images/cousteau.jpg';
import api from '../utils/api';
import Card from './Card';


function Main(props) {

    const [userName, setUserName] = useState('...');
    const [userDescription, setUserDescription] = useState('...');
    const [userAvatar, setUserAvatar] = useState(profilePhoto);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
          .then((res) => {
            const [profileInfo, cardData] = res;
            setUserName(profileInfo.name);
            setUserDescription(profileInfo.about);
            setUserAvatar(profileInfo.avatar);
            setCards(cardData);
          })
          .catch((err) => console.log(err));
      }, []);

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                        <img className="profile__avatar"
                             src={userAvatar}
                             alt="Аватар"
                        />
                    </div>
                    <div className="profile__block">
                        <div className="profile__info">
                            <h1 className="profile__title">{userName}</h1>
                            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__description">{userDescription}</p>
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
                        />
                    );
                })}
                </div>
            </section>
        </main>
    )

}

export default Main;