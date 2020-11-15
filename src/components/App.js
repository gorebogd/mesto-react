import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

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

    function closeAllPopups () {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
    }

    return (
        <>
            <Header />
            <Main 
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                />
            <Footer/>
            <PopupWithForm
                isOpen={isEditProfilePopupOpen} 
                onClose={closeAllPopups}
                name='edit-profile'
                title='Редактировать профиль'
                children={
                    <>
                        <input
                            name="name"
                            type="text"
                            placeholder="Имя"
                            className="popup__input-text popup__input-text_type_name"
                            minLength="2"
                            maxLength="40"
                            autoComplete="off"
                            required
                        />
                        <span id="name-error" className='popup__error'></span>
                        <input
                            name="job"
                            type="text"
                            placeholder="Профессия"
                            className="popup__input-text popup__input-text_type_job"
                            minLength="2"
                            maxLength="200"
                            autoComplete="off"
                            required
                        />
                        <span id="job-error" className='popup__error'></span>
                    </>

            }/>
            <PopupWithForm
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                name='add-card'
                title='Новое место'
                children={
                    <>
                         <input
                            name="place"
                            type="text"
                            placeholder="Название"
                            className="popup__input-text popup__input-text_type_place"
                            minLength="1"
                            maxLength="30"
                            autoComplete="off"
                            required
                        />
                        <span id="place-error" className='popup__error'></span>
                        <input
                            name="image"
                            type="url"
                            placeholder="Ссылка на картинку"
                            className="popup__input-text popup__input-text_type_url"
                            autoComplete="off"
                            required
                        />
                        <span id="image-error" className='popup__error '></span>
                    </>
                }
            />

            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                name='update-avatar'
                title='Обновить Аватар'
                children={
                    <>
                        <input
                            name="avatar"
                            type="url"
                            placeholder="Введите URL аватара"
                            className="popup__input-text popup__input-text_type_avatar-source"
                            required
                        />
                        <span id="avatar-error" className='popup__error'></span>   
                    </>
                }
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

            {/* <div className="popup popup_type_edit-profile">
                <div className="popup__container">
                    <button type="button" className="popup__close-button"></button>
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <form action="#" className="popup__form" noValidate>
                        <input
                            name="name"
                            type="text"
                            placeholder="Имя"
                            className="popup__input-text popup__input-text_type_name"
                            minLength="2"
                            maxLength="40"
                            autoComplete="off"
                            required
                        />
                        <span id="name-error" className='popup__error'></span>
                        <input
                            name="job"
                            type="text"
                            placeholder="Профессия"
                            className="popup__input-text popup__input-text_type_job"
                            minLength="2"
                            maxLength="200"
                            autoComplete="off"
                            required
                        />
                        <span id="job-error" className='popup__error'></span>
                        <button type="submit" className="popup__submit">Сохранить</button>
                    </form>
                </div>
            </div>

            <div className="popup popup_type_add-card">
                <div className="popup__container">

                    <button type="button" className="popup__close-button"></button>
                    <h2 className="popup__title">Новое место</h2>
                    <form action="#" className="popup__form" noValidate>
                        <input
                            name="place"
                            type="text"
                            placeholder="Название"
                            className="popup__input-text popup__input-text_type_place"
                            minLength="1"
                            maxLength="30"
                            autoComplete="off"
                            required
                        />
                        <span id="place-error" className='popup__error'></span>
                        <input
                            name="image"
                            type="url"
                            placeholder="Ссылка на картинку"
                            className="popup__input-text popup__input-text_type_url"
                            autoComplete="off"
                            required
                        />
                        <span id="image-error" className='popup__error '></span>
                        <button type="submit" className="popup__submit popup__submit_disabled" disabled>Создать</button>
                    </form>
                </div>
            </div>

            <div className="popup popup_type_confirm">
                <div className="popup__container">
                    <h2 className="popup__title popup__title_type_confirm">Вы уверены?</h2>
                    <button type="button" className="popup__close-button"></button>
                    <form className="popup__form" noValidate>
                        <input type="submit" className="popup__submit" value="Да"/>
                    </form>
                </div>
            </div>

            <div className="popup popup_type_update-avatar">
                <div className="popup__container">
                    <h2 className="popup__title">Обновить аватар</h2>
                    <button type="button" className="popup__close-button"></button>
                    <form className="popup__form" noValidate>
                        <input
                            name="avatar"
                            type="url"
                            placeholder="Введите URL аватара"
                            className="popup__input-text popup__input-text_type_avatar-source"
                            required
                        />
                        <span id="avatar-error" className='popup__error'></span>
                        <button type="submit" className="popup__submit">Сохранить</button>
                    </form>
                </div>
            </div> */}


            {/* <div className="popup popup_type_image">
                <div className="popup__container_type_image">
                    <button type="button" className="popup__close-button"></button>
                    <figure className="popup__figure">
                        <img src="#" alt="Полноформатное фото места" className="popup__image"/>
                        <figcaption className="popup__description"></figcaption>
                    </figure>
                </div>
            </div> */}

            {/* <template className="cards-template">
                <div className="cards__card">
                    <button type="button" className="cards__delete-button"></button>
                    <img
                        alt="Фото места"
                        className="cards__image"
                    />
                    <div className="cards__info">
                        <h2 className="cards__title"></h2>
                        <div className="cards__like-container">
                            <button type="button" className="cards__like-button"></button>
                            <p className="cards__like-count">0</p>
                        </div>
                    </div>
                </div>
            </template> */}
        </>

    );
}

export default App;
