const page = document.querySelector('.page');

const profile = page.querySelector('.profile');
const editProfileButton = profile.querySelector('.edit-button');
const addCardButton = profile.querySelector('.add-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');

const popup = page.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close-button');
let popupTitle = popup.querySelector('.popup__title');
let popupNameField = popup.querySelector('.popup__field[name="profile-name"]');
let popupDescriptionField = popup.querySelector('.popup__field[name="profile-description"]');

function openPopupWindow(title, field1, field2) {
    popup.classList.add('popup_opened');
    console.log(field1);
    console.log(field2);
    popupTitle.textContent = title;
    popupNameField.placeholder = field1;
    popupDescriptionField.placeholder = field2;

};

function closePopupWindow() {
    popup.classList.remove('popup_opened');
};

function editProfileInfo() {
    let profileName = popupNameField.value;
    let profileDescription = popupDescriptionField.value;
    profileTitle.textContent = profileName;
    profileSubtitle.textContent = profileDescription;
    popupNameField.value = '';
    popupDescriptionField.value = '';
    closePopupWindow();
}


editProfileButton.addEventListener('click', function() {
    let profileTitle = profile.querySelector('.profile__title');
    let profileSubtitle = profile.querySelector('.profile__subtitle');
    openPopupWindow('Редактировать профиль', profileTitle.textContent, profileSubtitle.textContent);

});

addCardButton.addEventListener('click', function() {
    openPopupWindow('Новое место', 'Название', 'Ссылка на картинку');

});

popup.addEventListener('submit', function(evt) {
    evt.preventDefault();
    if (popupTitle.textContent === 'Редактировать профиль') {
        editProfileInfo();
    } else if (popupTitle.textContent === 'Новое место') {
        alert('Here will be adding of new place card');

    }

})

closePopup.addEventListener('click', closePopupWindow);
