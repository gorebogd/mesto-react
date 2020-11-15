import logo from './images/logo.svg';
import './index.css';

function App() {
    return (
        <>
            <header className="header">
                <img src={logo} alt="Проект Mesto" className="header__logo"/>
            </header>
            <main className="main">
                <section className="profile">
                    <div className="profile__container">
                        <div className="profile__avatar-container">
                            <img className="profile__avatar"
                                 src="./images/cousteau.jpg"
                                 alt="Аватар"
                            />
                        </div>
                        <div className="profile__block">
                            <div className="profile__info">
                                <h1 className="profile__title">...</h1>
                                <button type="button" className="profile__edit-button"></button>
                            </div>
                            <p className="profile__description">...</p>
                        </div>
                        <button type="button" className="profile__add-button"></button>
                    </div>
                </section>
                <section className="cards">
                    <div className="cards__grid">
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
            </footer>

            <div className="popup popup_type_edit-profile">
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
            </div>


            <div className="popup popup_type_image">
                <div className="popup__container_type_image">
                    <button type="button" className="popup__close-button"></button>
                    <figure className="popup__figure">
                        <img src="#" alt="Полноформатное фото места" className="popup__image"/>
                        <figcaption className="popup__description"></figcaption>
                    </figure>
                </div>
            </div>

            <template className="cards-template">
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
            </template>
        </>

    );
}

export default App;
