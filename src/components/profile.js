//import vars
import {
    profilePopupNameField,
    profilePopupDescriptionField,
    profileTitle,
    profileSubtitle,
    profileForm,
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
import { renderLoading } from './cards.js';

export function editProfileInfo() {
    const profileName = profilePopupNameField.value;
    const profileDescription = profilePopupDescriptionField.value;
    editProfile(profileName, profileDescription)
        .then(() => {
            updateProfileInfo(profileName, profileDescription);
            closePopup(profilePopup);
        })
        .catch(error => console.log(error))
        .finaly(() => {
            renderLoading(false, profileForm)
        })

};

export function updateProfileInfo(profileName, profileDescription) {
    profileTitle.textContent = profileName;
    profileSubtitle.textContent = profileDescription;
};


export function editAvatar() {
    const avatarLink = avatarUrlField.value;
    editAvatarImage(avatarLink)
        .then(() => {
            getProfileRequest()
                .then(data => updateAvatar(data.avatar, data.name));
        })
        .catch(error => console.log(error))
        .finally(() => {
            avatarForm.reset();
            avatarSaveButton.classList.add('popup__submit_inactive');
            avatarSaveButton.disabled = true;
            closePopup(avatarPopup);
            renderLoading(false, avatarForm);
        });

};

export function updateAvatar(avatarLink, avatarName) {
    avatar.src = avatarLink;
    avatar.alt = `фото ${avatarName}`;
}
