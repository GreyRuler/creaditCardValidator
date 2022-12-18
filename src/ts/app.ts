import CardFormWidget from './CardFormWidget';

const container = document.querySelector('#container') as HTMLElement;
const form = new CardFormWidget(container);

form.bindToDOM();
