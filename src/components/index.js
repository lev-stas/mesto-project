//import styles
import '../index.css';

//import vars
import {
    startImagesList,
    cardsContainer,
    popups,
    editProfileButton,
    profilePopup,
    profileForm,
    addCardButton,
    cardPopup,
    cardForm,
    createCardButton,
    cardPopupNameField,
    cardPopupDescriptionField,
    validationSettings,
    avatarPopup,
    avatarOpenButton,
    avatarForm
} from './vars.js';


//import functions
import { createCard } from './cards.js';
import { openPopup, closePopup } from './popup.js';
import { fillProfile, editProfileInfo, editAvatar, getProgileImage } from './profile.js';
import { enableValidation } from './validation.js';
import { getProfileRequest } from './api.js';

//default script
fillProfile(getProfileRequest);
getProgileImage(getProfileRequest);


// getCards();

startImagesList.forEach((startImageItem) => {
    const cardTitle = startImageItem.title;
    const cardLink = startImageItem.link;
    const startCard = createCard(cardTitle, cardLink);
    cardsContainer.append(startCard);
})


//closing popup
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup)
        }
    })
})


//profile processing
editProfileButton.addEventListener('click', function() {
    openPopup(profilePopup);

});

profileForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    editProfileInfo();
});

avatarOpenButton.addEventListener('click', function() {
    openPopup(avatarPopup);
});

avatarForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    editAvatar();
});

//cards processing
addCardButton.addEventListener('click', function() {
    openPopup(cardPopup);
});

cardForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const cardTitle = cardPopupNameField.value;
    const cardLink = cardPopupDescriptionField.value;
    const newCard = createCard(cardTitle, cardLink);
    cardsContainer.prepend(newCard);
    cardForm.reset();
    createCardButton.classList.add('popup__submit_inactive');
    createCardButton.disabled = true;

    closePopup(cardPopup);
});

//validation processing
enableValidation(validationSettings);