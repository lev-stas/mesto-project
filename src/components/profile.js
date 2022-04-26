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
import { ifLoading } from './cards.js';

export function editProfileInfo() {
    const profileName = profilePopupNameField.value;
    const profileDescription = profilePopupDescriptionField.value;
    editProfile(profileName, profileDescription)
        .then((res) => {
            if (res.ok) {
                updateProfileInfo(profileName, profileDescription);
            } else { console.log(res.status) }
        })
        .catch(error => console.log(error));
    closePopup(profilePopup);
    ifLoading(false, profileForm)
};

export function updateProfileInfo(profileName, profileDescription) {
    profileTitle.textContent = profileName;
    profileSubtitle.textContent = profileDescription;
};


export function editAvatar() {
    const avatarLink = avatarUrlField.value;
    editAvatarImage(avatarLink)
        .then(res => {
            if (res.ok) {
                getProfileRequest()
                    .then(data => updateAvatar(data.avatar, data.name));
            } else {
                console.log(res.status)
            }
        })
        .catch(error => console.log(error));
    avatarForm.reset();
    avatarSaveButton.classList.add('popup__submit_inactive');
    avatarSaveButton.disabled = true;
    closePopup(avatarPopup);
    ifLoading(false, avatarForm);
};

export function updateAvatar(avatarLink, avatarName) {
    avatar.src = avatarLink;
    avatar.alt = `фото ${avatarName}`;
}
