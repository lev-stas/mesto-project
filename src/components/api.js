//import vars
import {
    basicUrl,
    myToken,
    cardsContainer
} from './vars.js';

//Load cards from Server
export function getCards() {
    return fetch(`${basicUrl}/cards`, {
            method: 'GET',
            headers: {
                authorization: myToken
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return res.status
            }
        })
        .catch((error) => {
            console.log(error)
        })

};

//Profile info

export function getProfileRequest() {
    return fetch(`${basicUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: myToken
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

};



export function editProfile(myName, description) {
    fetch(`${basicUrl}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: myToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: myName,
            about: description
        })
    });
};

export function editAvatarImage(avatarLink) {
    fetch(`${basicUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
            authorization: myToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: avatarLink
        })
    })
};
