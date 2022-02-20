const page = document.querySelector('.page');

// profile elements
const profile = page.querySelector('.profile');
const editProfileButton = profile.querySelector('.edit-button');
const addCardButton = profile.querySelector('.add-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');

//Profile popup elements
const profilePopup = page.querySelector('#profile-form');
const closeProfilePopup = profilePopup.querySelector('.popup__close-button');
const profilePopupDescriptionField = profilePopup.querySelector('.popup__field[name="profile-description"]');
const profilePopupNameField = profilePopup.querySelector('.popup__field[name="profile-name"]');
const profileForm = profilePopup.querySelector('.popup__form');

//Add card popup elements
const cardPopup = page.querySelector('#add-card-form');
const closeCardPopup = cardPopup.querySelector('.popup__close-button');
const cardPopupNameField = cardPopup.querySelector('.popup__field[name="card-name"]');
const cardPopupDescriptionField = cardPopup.querySelector('.popup__field[name="card-link"]');
const cardForm = cardPopup.querySelector('.popup__form');


//Picture popup elements
const picturePopup = page.querySelector('#picture-popup');
const picturePopupImage = picturePopup.querySelector('.popup__image');
const picturePopupLabel = picturePopup.querySelector('.popup__label');
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
function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

function editProfileInfo() {
    const profileName = profilePopupNameField.value;
    const profileDescription = profilePopupDescriptionField.value;
    profileTitle.textContent = profileName;
    profileSubtitle.textContent = profileDescription;
    closePopup(profilePopup);
};

function createCard(title, link) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const elementPicture = cardElement.querySelector('.card__picture');
    cardElement.querySelector('.card__title').textContent = title;
    elementPicture.src = link
    elementPicture.alt = title;
    const likeButton = cardElement.querySelector('.like-icon');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('like-icon_active');
    });
    const trashButton = cardElement.querySelector('.trash-button');
    trashButton.addEventListener('click', function(evt) {
        evt.target.closest('.card').remove();
    });
    const openPicture = cardElement.querySelector('.card__picture');
    openPicture.addEventListener('click', function(evt) {
        openPopup(picturePopup);
        picturePopupImage.src = evt.target.src;
        picturePopupLabel.textContent = evt.target.alt;
    });
    return cardElement;
};


// Default page behavior
for (let i = 0; i < startImagesList.length; i = i + 1) {
    const cardTitle = startImagesList[i].title;
    const cardLink = startImagesList[i].link;
    const cardNumber = i + 1;
    const startCard = createCard(cardTitle, cardLink);
    cardsContainer.append(startCard);
};


//Event Handlers
editProfileButton.addEventListener('click', function() {
    openPopup(profilePopup);

});
closeProfilePopup.addEventListener('click', function() {
    closePopup(profilePopup);
})

addCardButton.addEventListener('click', function() {
    openPopup(cardPopup);
});

closeCardPopup.addEventListener('click', function() {
    closePopup(cardPopup);
})

closePicturePopup.addEventListener('click', function() {
    closePopup(picturePopup);
})

profileForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    editProfileInfo();
})

cardForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const cardTitle = cardPopupNameField.value;
    const cardLink = cardPopupDescriptionField.value;
    const cardNumber = cardsContainer.childElementCount + 1;
    const newCard = createCard(cardTitle, cardLink);
    cardsContainer.prepend(newCard);
    cardPopupNameField.value = '';
    cardPopupDescriptionField.value = '';
    closePopup(cardPopup);
})
