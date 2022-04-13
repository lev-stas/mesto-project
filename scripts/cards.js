import {
    cardTemplate,
    picturePopupImage,
    picturePopupLabel,
    addCardButton,
    cardPopup,
    closeCardPopup,
    closePicturePopup,
    picturePopup,
    cardForm,
    cardPopupNameField,
    cardPopupDescriptionField,
    cardsContainer,

} from './vars.js';
import { openPopup, closePopup } from './popup.js';

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
        evt.target.closest('.card').remove();
    });
    const openPicture = cardElement.querySelector('.card__picture');
    openPicture.addEventListener('click', function(evt) {
        openPopup(picturePopup);
        picturePopupImage.src = evt.target.src;
        picturePopupLabel.textContent = evt.target.alt;
    });
    return cardElement;
};

addCardButton.addEventListener('click', function() {
    openPopup(cardPopup);
});

closeCardPopup.addEventListener('click', function() {
    closePopup(cardPopup);
});

closePicturePopup.addEventListener('click', function() {
    closePopup(picturePopup);
});
cardForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const cardTitle = cardPopupNameField.value;
    const cardLink = cardPopupDescriptionField.value;
    const cardNumber = cardsContainer.childElementCount + 1;
    const newCard = createCard(cardTitle, cardLink);
    cardsContainer.prepend(newCard);
    cardPopupNameField.value = '';
    cardPopupDescriptionField.value = '';
    closePopup(cardPopup);
});