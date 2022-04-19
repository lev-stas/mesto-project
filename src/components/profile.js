//import vars
import {
    profilePopupNameField,
    profilePopupDescriptionField,
    profileTitle,
    profileSubtitle,
    profilePopup,
} from './vars.js';

//import functions
import { getProfileRequest, editProfile } from './api.js';
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
