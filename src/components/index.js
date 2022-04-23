    //import styles
    import '../index.css';

    //import vars
    import {
        cardsContainer,
        popups,
        editProfileButton,
        profilePopup,
        profileForm,
        profileTitle,
        profileSubtitle,
        addCardButton,
        cardPopup,
        cardForm,
        createCardButton,
        cardPopupNameField,
        cardPopupDescriptionField,
        validationSettings,
        avatar,
        avatarPopup,
        avatarOpenButton,
        avatarForm
    } from './vars.js';


    //import functions
    import { createCard } from './cards.js';
    import { openPopup, closePopup } from './popup.js';
    import { editProfileInfo, editAvatar } from './profile.js';
    import { enableValidation } from './validation.js';
    import { getProfileRequest, getCards } from './api.js';

    //Init Profile
    let userId
    getProfileRequest()
        .then(data => {
            avatar.src = data.avatar;
            avatar.alt = `фото ${data.name}`;
            profileTitle.textContent = data.name;
            profileSubtitle.textContent = data.about;
            userId = data._id;
        });

    // Init cards;
    getCards()
        .then((cards) => {
            cards.forEach((card) => {
                const startCard = createCard(card.name, card.link);
                const trashButton = startCard.querySelector('.trash-button');
                if (card.owner._id !== userId) {
                    trashButton.remove()
                };
                cardsContainer.append(startCard);
            })
        });


    //closing popup
    popups.forEach((popup) => {
        popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                closePopup(popup)
            }
            if (evt.target.classList.contains('popup__close-button')) {
                closePopup(popup)
            }
        })
    })


    //profile processing
    editProfileButton.addEventListener('click', function() {
        openPopup(profilePopup);

    });

    profileForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        editProfileInfo();
    });

    avatarOpenButton.addEventListener('click', function() {
        openPopup(avatarPopup);
    });

    avatarForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        editAvatar();
    });

    //cards processing
    addCardButton.addEventListener('click', function() {
        openPopup(cardPopup);
    });

    cardForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        const cardTitle = cardPopupNameField.value;
        const cardLink = cardPopupDescriptionField.value;
        const newCard = createCard(cardTitle, cardLink);
        cardsContainer.prepend(newCard);
        cardForm.reset();
        createCardButton.classList.add('popup__submit_inactive');
        createCardButton.disabled = true;

        closePopup(cardPopup);
    });

    //validation processing
    enableValidation(validationSettings);
