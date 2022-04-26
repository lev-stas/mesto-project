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

//Add cards
export const uploadCard = (cardLink, cardName) => {
    return fetch(`${basicUrl}/cards`, {
        method: 'POST',
        headers: {
            authorization: myToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: cardName,
            link: cardLink
        })
    })
};

//Delete cards
export const deleteCard = (cardId) => {
    return fetch(`${basicUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: {
            authorization: myToken
        }
    })
};

//like cards
export const likeCard = (cardId) => {
    return fetch(`${basicUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: {
            authorization: myToken
        }
    })
};

export const unlikeCard = (cardId) => {
    return fetch(`${basicUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: {
            authorization: myToken
        }
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



export const editProfile = (myName, description) => {
    return fetch(`${basicUrl}/users/me`, {
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

export const editAvatarImage = (avatarLink) => {
    return fetch(`${basicUrl}/users/me/avatar`, {
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
