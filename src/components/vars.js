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
