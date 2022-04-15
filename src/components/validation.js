import { page } from './vars.js';

const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-span`);
    inputElement.classList.add(settings.invalidInput);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorMessage);

};

const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-span`);
    inputElement.classList.remove(settings.invalidInput);
    errorElement.textContent = '';
    errorElement.classList.remove(settings.errorMessage);
};

const checkInputValidity = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
        hideInputError(formElement, inputElement, settings);
    }

};

const isValidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const buttonActivation = (inputList, buttonElement, settings) => {
    if (isValidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButton);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(settings.inactiveButton);
        buttonElement.disabled = false;
    };
};

const seteventLinstener = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.input));
    const buttonElement = formElement.querySelector(settings.button);
    buttonActivation(inputList, buttonElement, settings);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement, settings);
            buttonActivation(inputList, buttonElement, settings);
        });
    });
};

export const enableValidation = (settings) => {
    const formList = Array.from(page.querySelectorAll(settings.form));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });
        seteventLinstener(formElement, settings);
    });
};