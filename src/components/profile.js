import {
    profilePopupNameField,
    profilePopupDescriptionField,
    profileTitle,
    profileSubtitle,
    profilePopup,
} from './vars.js';
import { closePopup, openPopup } from './popup.js';

export function editProfileInfo() {
    const profileName = profilePopupNameField.value;
    const profileDescription = profilePopupDescriptionField.value;
    profileTitle.textContent = profileName;
    profileSubtitle.textContent = profileDescription;
    closePopup(profilePopup);
};
