import {
    cardTemplate,
    picturePopup,
    picturePopupImage,
    picturePopupLabel,
    cardsContainer
} from './vars.js';
import { openPopup } from './popup.js';
import { deleteCard, likeCard, unlikeCard } from './api.js';

export function loadCards(cards, userId) {
    cards.forEach((card) => {
        const likes = card.likes.length
        const startCard = createCard(card.name, card.link, card._id, likes);
        const trashButton = startCard.querySelector('.trash-button');
        if (card.owner._id !== userId) {
            trashButton.remove()
        };
        cardsContainer.append(startCard);
    })
};


export function renderLoading(isLoading, form) {
    const button = form.querySelector('.popup__submit')
    if (form.id === 'add-card-form') {
        if (isLoading) {
            button.textContent = 'Сохранение...'
        } else {
            button.textContent = 'Создать'
        }
    } else {
        if (isLoading) {
            button.textContent = 'Сохранение...'
        } else {
            button.textContent = 'Сохранить'
        }
    }

}



export function createCard(title, link, id, likes, isLiked) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const elementPicture = cardElement.querySelector('.card__picture');
    const likesNumber = cardElement.querySelector('.card__like-counts')
    cardElement.querySelector('.card__title').textContent = title;
    elementPicture.src = link
    elementPicture.alt = title;
    const likeButton = cardElement.querySelector('.like-icon');
    if (isLiked) {
        likeButton.classList.add('like-icon_active')
    }
    likeButton.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('like-icon_active')) {
            unlikeCard(id)
                .then((data) => {
                    evt.target.classList.remove('like-icon_active');
                    likesNumber.textContent = data.likes.length;
                })
                .catch(error => console.log(error))
        } else {
            likeCard(id)
                .then((data) => {
                    evt.target.classList.add('like-icon_active');
                    likesNumber.textContent = data.likes.length;
                })
                .catch(error => console.log(error))
        }
    });
    likesNumber.textContent = likes;
    const trashButton = cardElement.querySelector('.trash-button');
    trashButton.addEventListener('click', function(evt) {
        deleteCard(id)
            .then(() => {
                cardElement.remove()
            })
            .catch(error => console.log(error))
    });
    elementPicture.addEventListener('click', function(evt) {
        openPopup(picturePopup);
        picturePopupImage.src = evt.target.src;
        picturePopupImage.alt = evt.target.alt;
        picturePopupLabel.textContent = evt.target.alt;
    });
    return cardElement;
};
