import { page, profilePopup } from "./vars";

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    page.addEventListener('click', clickClosePopup);
    page.addEventListener('keydown', escapeClosePopup);
};

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    page.removeEventListener('click', clickClosePopup);
    page.removeEventListener('keydown', escapeClosePopup);
};

export function clickClosePopup(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(evt.target);
    };
};

export function escapeClosePopup(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = page.querySelector('.popup_opened');
        closePopup(openedPopup);

    };
};