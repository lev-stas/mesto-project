import { page } from "./vars";

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    page.addEventListener('keydown', closePopupByEscape);
};

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    page.removeEventListener('keydown', closePopupByEscape);
};

export function closePopupByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = page.querySelector('.popup_opened');
        closePopup(openedPopup);

    };
};