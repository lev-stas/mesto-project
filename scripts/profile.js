import {
    profilePopupNameField,
    profilePopupDescriptionField,
    profileTitle,
    profileSubtitle,
    profilePopup,
    editProfileButton,
    closeProfilePopup,
    profileForm
} from './vars.js';
import { closePopup, openPopup } from './popup.js';

function editProfileInfo() {
    const profileName = profilePopupNameField.value;
    const profileDescription = profilePopupDescriptionField.value;
    profileTitle.textContent = profileName;
    profileSubtitle.textContent = profileDescription;
    closePopup(profilePopup);
};

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