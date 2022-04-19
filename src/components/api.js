//Load cards from Server
import {
    profileTitle,
    profileSubtitle
} from "./vars.js";

import { fillProfile } from "./profile.js";


export function getCards() {
    fetch('https://nomoreparties.co/v1/plus-cohort-9/cards', {
            method: 'GET',
            headers: {
                authorization: 'c74b18e0-4a10-4f3c-8fc2-aaf6d9f451dc'
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return res.status
            }
        })
        .then((data) => {
            console.log(data);
        });

};


//Profile info

export function getProfileRequest() {
    const promise = fetch('https://nomoreparties.co/v1/plus-cohort-9/users/me', {
            method: 'GET',
            headers: {
                authorization: 'c74b18e0-4a10-4f3c-8fc2-aaf6d9f451dc'
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return res.status
            }

        })
        .catch((err) => console.log(err));
    return promise;
};



export function editProfile(myName, description) {
    fetch('https://nomoreparties.co/v1/plus-cohort-9/users/me', {
        method: 'PATCH',
        headers: {
            authorization: 'c74b18e0-4a10-4f3c-8fc2-aaf6d9f451dc',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: myName,
            about: description
        })
    });
};

export function editAvatarImage(avatarLink) {
    fetch('https://nomoreparties.co/v1/plus-cohort-9/users/me/avatar', {
        method: 'PATCH',
        headers: {
            authorization: 'c74b18e0-4a10-4f3c-8fc2-aaf6d9f451dc',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: avatarLink
        })
    })
};
