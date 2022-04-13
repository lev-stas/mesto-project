import {
    startImagesList,
    cardsContainer
} from './vars.js';

import { createCard } from './cards.js';

for (let i = 0; i < startImagesList.length; i = i + 1) {
    const cardTitle = startImagesList[i].title;
    const cardLink = startImagesList[i].link;
    const cardNumber = i + 1;
    const startCard = createCard(cardTitle, cardLink);
    cardsContainer.append(startCard);
};