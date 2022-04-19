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

export function fillProfile(request) {
    const profile = request();
    profile
        .then((data) => {
            profileTitle.textContent = data.name;
            profileSubtitle.textContent = data.about;
        })

};

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
    getProgileImage(getProfileRequest);
    avatarForm.reset();
    avatarSaveButton.classList.add('popup__submit_inactive'),
        avatarSaveButton.disabled = true;
    closePopup(avatarPopup);
};

export function getProgileImage(request) {
    const profile = request();
    profile
        .then((data) => {
            avatar.src = data.avatar,
                avatar.alt = `фото ${data.name}`
        })
};
