import {
    cardTemplate,
    picturePopup,
    picturePopupImage,
    picturePopupLabel,
    cardsContainer
} from './vars.js';
import { openPopup } from './popup.js';
import { deleteCard } from './api.js';

export function loadCards(cards, userId) {
    cards.forEach((card) => {
        const startCard = createCard(card.name, card.link, card._id);
        const trashButton = startCard.querySelector('.trash-button');
        if (card.owner._id !== userId) {
            trashButton.remove()
        };
        cardsContainer.append(startCard);
    })
};


export function createCard(title, link, id) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const elementPicture = cardElement.querySelector('.card__picture');
    cardElement.querySelector('.card__title').textContent = title;
    elementPicture.src = link
    elementPicture.alt = title;
    const likeButton = cardElement.querySelector('.like-icon');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('like-icon_active');
    });
    const trashButton = cardElement.querySelector('.trash-button');
    trashButton.addEventListener('click', function(evt) {
        deleteCard(id)
            .then(res => {
                if (res.ok) {
                    cardElement.remove();
                } else {
                    console.log(res.status)
                }
            });

    });
    elementPicture.addEventListener('click', function(evt) {
        openPopup(picturePopup);
        picturePopupImage.src = evt.target.src;
        picturePopupImage.alt = evt.target.alt;
        picturePopupLabel.textContent = evt.target.alt;
    });
    return cardElement;
};
