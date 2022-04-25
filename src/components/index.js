    //import styles
    import '../index.css';

    //import vars
    import {
        cardsContainer,
        popups,
        editProfileButton,
        profilePopup,
        profileForm,
        addCardButton,
        cardPopup,
        cardForm,
        createCardButton,
        cardPopupNameField,
        cardPopupDescriptionField,
        validationSettings,
        avatarPopup,
        avatarOpenButton,
        avatarForm,
    } from './vars.js';


    //import functions
    import { createCard, loadCards } from './cards.js';
    import { openPopup, closePopup } from './popup.js';
    import { editProfileInfo, editAvatar, updateProfileInfo, updateAvatar } from './profile.js';
    import { enableValidation } from './validation.js';
    import { getProfileRequest, getCards, uploadCard } from './api.js';

    //Init start page
    let userId

    Promise.all([getProfileRequest(), getCards()])
        .then(([usersData, cards]) => {
            updateProfileInfo(usersData.name, usersData.about);
            updateAvatar(usersData.avatar, usersData.name);
            userId = usersData._id;
            loadCards(cards, userId);
            // cards.forEach((card) => {
            //     const startCard = createCard(card.name, card.link, card._id);
            //     const trashButton = startCard.querySelector('.trash-button');
            //     if (card.owner._id !== userId) {
            //         trashButton.remove()
            //     };
            //     cardsContainer.append(startCard);
            // })
        })



    //closing popups
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
        uploadCard(cardLink, cardTitle)
            .then(card => cardsContainer.prepend(createCard(cardTitle, cardLink, card._id)));
        cardForm.reset();
        createCardButton.classList.add('popup__submit_inactive');
        createCardButton.disabled = true;
        closePopup(cardPopup);

    });

    //validation processing
    enableValidation(validationSettings);
