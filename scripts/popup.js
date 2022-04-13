import { page } from './vars.js'
export function openPopup(popup) {
    popup.classList.add('popup_opened');
};

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

page.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(evt.target);
    };
});

page.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    };

});