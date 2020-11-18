import React, {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

    const [currentUser, setCurrentUser] = useState({});
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});


    useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch(err => console.log(err));

    }, []);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }

    function handleUpdateUser(userData) {
        api.setUserInfo(userData)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch(err => console.log(err))
    }

    function handleUpdateAvatar(avatarData) {
        api.setUserAvatar(avatarData)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch(err => console.log(err));
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
    }

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

    function handleAddPlaceSubmit(newCard) {
        api.addCard(newCard)
            .then((res) => {
                setCards([
                    res,
                    ...cards,
                ]);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header/>
            <Main
                cards={cards}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
            />
            <Footer/>
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
            />
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
            />
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit}
            />
            <PopupWithForm
                name='confirm'
                title='Вы уверены?'
            />
            <ImagePopup
                isOpen={isImagePopupOpen}
                onClose={closeAllPopups}
                card={selectedCard}
            />
        </CurrentUserContext.Provider>

    );
}

export default App;
