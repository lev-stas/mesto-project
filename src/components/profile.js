//import vars
import {
    profilePopupNameField,
    profilePopupDescriptionField,
    profileTitle,
    profileSubtitle,
    profilePopup,
    avatarUrlField,
    avatarPopup,
    avatar,
    avatarForm,
    avatarSaveButton
} from './vars.js';

//import functions
import { getProfileRequest, editProfile, editAvatarImage } from './api.js';
import { closePopup } from './popup.js';

export function editProfileInfo() {
    const profileName = profilePopupNameField.value;
    const profileDescription = profilePopupDescriptionField.value;
    editProfile(profileName, profileDescription);
    fillProfile(getProfileRequest);
    closePopup(profilePopup);
};

export function editAvatar() {
    const avatarLink = avatarUrlField.value;
    editAvatarImage(avatarLink);
    getProfileImage(getProfileRequest);
    avatarForm.reset();
    avatarSaveButton.classList.add('popup__submit_inactive'),
        avatarSaveButton.disabled = true;
    closePopup(avatarPopup);
};
