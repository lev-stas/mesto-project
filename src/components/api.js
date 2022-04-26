//set request config

const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
    headers: {
        authorization: 'c74b18e0-4a10-4f3c-8fc2-aaf6d9f451dc',
        'Content-Type': 'application/json',
    }
}


//Checking response
function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`)
};

//Load cards from Server
export function getCards() {
    return fetch(`${config.baseUrl}/cards`, {
            method: 'GET',
            headers: config.headers
        })
        .then(checkResponse)

};

//Add cards
export const uploadCard = (cardLink, cardName) => {
    return fetch(`${config.baseUrl}/cards`, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify({
                name: cardName,
                link: cardLink
            })
        })
        .then(checkResponse)
};

//Delete cards
export const deleteCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: config.headers
        })
        .then(checkResponse)
};

//like cards
export const likeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: config.headers
        })
        .then(checkResponse)
};

export const unlikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: config.headers
        })
        .then(checkResponse)
};


//Profile info

export function getProfileRequest() {
    return fetch(`${config.baseUrl}/users/me`, {
            method: 'GET',
            headers: config.headers
        })
        .then(checkResponse)

};



export const editProfile = (myName, description) => {
    return fetch(`${config.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                name: myName,
                about: description
            })
        })
        .then(checkResponse);
};

export const editAvatarImage = (avatarLink) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                avatar: avatarLink
            })
        })
        .then(checkResponse)
};
