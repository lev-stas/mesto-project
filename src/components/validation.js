import { page } from './vars.js';

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-span`);
    inputElement.classList.add('popup__field_invalid');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_active');

};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-span`);
    inputElement.classList.remove('popup__field_invalid');
    errorElement.textContent = '';
    errorElement.classList.remove('popup__error_active');
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }

};

const isValidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const buttonActivation = (inputList, buttonElement) => {
    if (isValidInput(inputList)) {
        buttonElement.classList.add('popup__submit_inactive')
    } else {
        buttonElement.classList.remove('popup__submit_inactive')
    };
};

const seteventLinstener = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
    const buttonElement = formElement.querySelector('.popup__submit');
    buttonActivation(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement);
            buttonActivation(inputList, buttonElement);
        });
    });
};

export const enableValidation = () => {
    const formList = Array.from(page.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });
        seteventLinstener(formElement);
    });
};
