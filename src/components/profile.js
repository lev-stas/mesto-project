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
    updateProfileInfo(profileName, profileDescription);
    closePopup(profilePopup);
};

export function updateProfileInfo(profileName, profileDescription) {
    profileTitle.textContent = profileName;
    profileSubtitle.textContent = profileDescription;
};


export function editAvatar() {
    const avatarLink = avatarUrlField.value;
    editAvatarImage(avatarLink);
    getProfileRequest()
        .then(data => updateAvatar(data.avatar, data.name));
    avatarForm.reset();
    avatarSaveButton.classList.add('popup__submit_inactive'),
        avatarSaveButton.disabled = true;
    closePopup(avatarPopup);
};

export function updateAvatar(avatarLink, avatarName) {
    avatar.src = avatarLink;
    avatar.alt = `фото ${avatarName}`;
}
