import {
    startImagesList,
    cardsContainer,
    page,
    editProfileButton,
    profilePopup,
    closeProfilePopup,
    profileForm,
    addCardButton,
    cardPopup,
    closeCardPopup,
    closePicturePopup,
    cardForm,
    cardPopupNameField,
    cardPopupDescriptionField,
    picturePopup
} from './vars.js';

import { createCard } from './cards.js';
import { openPopup, closePopup } from './popup.js';
import { editProfileInfo } from './profile.js';
import { enableValidation } from './validation.js';

//default script
for (let i = 0; i < startImagesList.length; i = i + 1) {
    const cardTitle = startImagesList[i].title;
    const cardLink = startImagesList[i].link;
    const cardNumber = i + 1;
    const startCard = createCard(cardTitle, cardLink);
    cardsContainer.append(startCard);
};

//common popup processing
page.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(evt.target);
    };
});
page.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    };

});

//profile processing
editProfileButton.addEventListener('click', function() {
    openPopup(profilePopup);

});
closeProfilePopup.addEventListener('click', function() {
    closePopup(profilePopup);
});
profileForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    editProfileInfo();
});

//cards processing
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

//validation processing
enableValidation();
