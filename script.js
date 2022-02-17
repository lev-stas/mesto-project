const page = document.querySelector('.page');

// profile elements
const profile = page.querySelector('.profile');
const editProfileButton = profile.querySelector('.edit-button');
const addCardButton = profile.querySelector('.add-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');

//popup elements
const popup = page.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close-button');
let popupTitle = popup.querySelector('.popup__title');
let popupNameField = popup.querySelector('.popup__field[name="profile-name"]');
let popupDescriptionField = popup.querySelector('.popup__field[name="profile-description"]');
let popupSubmitButton = popup.querySelector('.popup__submit');
const picturePopup = page.querySelector('.picture-popup');
let picturePopupImage = picturePopup.querySelector('.picture-popup__image');
let picturePopupLabel = picturePopup.querySelector('.picture-popup__label');
const closePicturePopup = picturePopup.querySelector('.popup__close-button');


//place cards elements
const cardsContainer = page.querySelector('.place-cards')
const cardTemplate = document.querySelector('#place-card').content;

const startImagesList = [{
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

//functions
function openPopupWindow(title, field1, field2, submitButtonName) {
    popup.classList.add('popup_opened');
    console.log(field1);
    console.log(field2);
    popupTitle.textContent = title;
    popupNameField.placeholder = field1;
    popupDescriptionField.placeholder = field2;
    popupSubmitButton.textContent = submitButtonName;

};

function closePopupWindow() {
    popup.classList.remove('popup_opened');
};

function closePicturePopupWindow() {
    picturePopup.classList.remove('popup_opened');
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

function addPlaceCard() {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    let cardsNumber = cardsContainer.childElementCount + 1;
    let placeTitle = popupNameField.value;
    let imageLink = popupDescriptionField.value;
    cardElement.querySelector('.card__title').textContent = placeTitle;
    cardElement.querySelector('.card__picture').src = imageLink;
    cardElement.querySelector('.card__picture').alt = placeTitle;
    cardElement.querySelector('.like-icon').name = `${cardsNumber}-like-button`;
    cardElement.querySelector('.trash-button').name = `${cardsNumber}-delition-button`;
    const likeButton = cardElement.querySelector('.like-icon');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('like-icon_active');
        evt.target.classList.toggle('like-icon');
    });
    const trashButton = cardElement.querySelector('.trash-button');
    trashButton.addEventListener('click', function(evt) {
        evt.target.closest('.card').remove();
    });
    const openPicture = cardElement.querySelector('.card__picture');
    openPicture.addEventListener('click', function(evt) {
        picturePopup.classList.add('popup_opened');
        picturePopupImage.src = evt.target.src;
        picturePopupLabel.textContent = evt.target.alt;
    });
    cardsContainer.prepend(cardElement);
    popupNameField.value = '';
    popupDescriptionField.value = '';
    closePopupWindow();
};


for (let i = 0; i < startImagesList.length; i = i + 1) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = startImagesList[i].title;
    cardElement.querySelector('.card__picture').src = startImagesList[i].link;
    cardElement.querySelector('.card__picture').alt = startImagesList[i].title;
    cardElement.querySelector('.like-icon').name = `${i}-like-button`;
    cardElement.querySelector('.trash-button').name = `${i}-delition-button`;
    const likeButton = cardElement.querySelector('.like-icon');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('like-icon_active');
        evt.target.classList.toggle('like-icon');
    });
    const trashButton = cardElement.querySelector('.trash-button');
    trashButton.addEventListener('click', function(evt) {
        evt.target.closest('.card').remove();
    });
    const openPicture = cardElement.querySelector('.card__picture');
    openPicture.addEventListener('click', function(evt) {
        picturePopup.classList.add('popup_opened');
        picturePopupImage.src = evt.target.src;
        picturePopupLabel.textContent = evt.target.alt;
    })
    cardsContainer.append(cardElement);
};


//Event Handlers

editProfileButton.addEventListener('click', function() {
    let profileTitle = profile.querySelector('.profile__title');
    let profileSubtitle = profile.querySelector('.profile__subtitle');
    openPopupWindow('Редактировать профиль', profileTitle.textContent, profileSubtitle.textContent, 'Сохранить');

});

addCardButton.addEventListener('click', function() {
    openPopupWindow('Новое место', 'Название', 'Ссылка на картинку', 'Создать');

});

popup.addEventListener('submit', function(evt) {
    evt.preventDefault();
    if (popupTitle.textContent === 'Редактировать профиль') {
        editProfileInfo();
    } else if (popupTitle.textContent === 'Новое место') {
        addPlaceCard()
    }

})

closePopup.addEventListener('click', closePopupWindow);
closePicturePopup.addEventListener('click', closePicturePopupWindow);

console.log(cardsContainer.childElementCount)
