import React from 'react';

function Card (props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="cards__card">
            <button type="button" className="cards__delete-button"></button>
            <img
                src={props.card.link}
                alt={props.card.name}
                className="cards__image"
                onClick={handleCardClick}
            />
            <div className="cards__info">
                <h2 className="cards__title">{props.card.name}</h2>
                <div className="cards__like-container">
                    <button type="button" className="cards__like-button"></button>
                    <p className="cards__like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;