export const page = document.querySelector('.page');
export const popups = document.querySelectorAll('.popup');
export const validationSettings = {
    form: ".popup__form",
    input: ".popup__field",
    button: ".popup__submit",
    inactiveButton: "popup__submit_inactive",
    invalidInput: "popup__field_invalid",
    errorMessage: "popup__error_active",
};
// profile elements
export const profile = page.querySelector('.profile');
export const editProfileButton = profile.querySelector('.edit-button');
export const addCardButton = profile.querySelector('.add-button');
export const profileTitle = profile.querySelector('.profile__title');
export const profileSubtitle = profile.querySelector('.profile__subtitle');
export const avatar = page.querySelector('.avatar');

//Profile popup elements
export const profilePopup = page.querySelector('#profile-form');
export const closeProfilePopup = profilePopup.querySelector('.popup__close-button');
export const profilePopupDescriptionField = profilePopup.querySelector('.popup__field[name="profile-description"]');
export const profilePopupNameField = profilePopup.querySelector('.popup__field[name="profile-name"]');
export const profileForm = profilePopup.querySelector('.popup__form');

//Avatar popup elements
export const avatarOpenButton = page.querySelector('.avatar__overlay');
export const avatarPopup = page.querySelector('#profile-avatar-form');
export const closeAvatarForm = avatarPopup.querySelector('.popup__close-button');
export const avatarUrlField = avatarPopup.querySelector('.popup__field[name="profile-avatar"]');
export const avatarForm = avatarPopup.querySelector('.popup__form');
export const avatarSaveButton = avatarPopup.querySelector('.popup__submit');

//Add card popup elements
export const cardPopup = page.querySelector('#add-card-form');
export const closeCardPopup = cardPopup.querySelector('.popup__close-button');
export const cardPopupNameField = cardPopup.querySelector('.popup__field[name="card-name"]');
export const cardPopupDescriptionField = cardPopup.querySelector('.popup__field[name="card-link"]');
export const createCardButton = cardPopup.querySelector('.popup__submit[name=card-save-button]');
export const cardForm = cardPopup.querySelector('.popup__form');


//Picture popup elements
export const picturePopup = page.querySelector('#picture-popup');
export const picturePopupImage = picturePopup.querySelector('.popup__image');
export const picturePopupLabel = picturePopup.querySelector('.popup__label');
export const closePicturePopup = picturePopup.querySelector('.popup__close-button');

//place cards elements
export const cardsContainer = page.querySelector('.place-cards')
export const cardTemplate = document.querySelector('#place-card').content;
export const startImagesList = [{
        title: 'Камчатка',
        link: 'https://images.unsplash.com/photo-1568028476727-0c86534220fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80'
    },
    {
        title: 'Тульская область',
        link: 'https://images.unsplash.com/photo-1609252880721-0d953278bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80'
    },
    {
        title: 'Крым',
        link: 'https://images.unsplash.com/photo-1565342403917-671ac824577c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1810&q=80'
    },
    {
        title: 'Байкал',
        link: 'https://images.unsplash.com/photo-1548130516-2ca6aaeb84b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        title: 'Камчатские гейзеры',
        link: 'https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80'
    },
    {
        title: 'Карелия',
        link: 'https://images.unsplash.com/photo-1607516100924-9a3f2c801cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJ1c3NpYSUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }
];
