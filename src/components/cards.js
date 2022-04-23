import {
    cardTemplate,
    picturePopup,
    picturePopupImage,
    picturePopupLabel,
} from './vars.js';
import { openPopup } from './popup.js';

export function loadCards(request) {
    request()
        .then((data) => {
            console.log(data)
        })
};


export function createCard(title, link) {
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
        cardElement.remove();
    });
    elementPicture.addEventListener('click', function(evt) {
        openPopup(picturePopup);
        picturePopupImage.src = evt.target.src;
        picturePopupImage.alt = evt.target.alt;
        picturePopupLabel.textContent = evt.target.alt;
    });
    return cardElement;
};
