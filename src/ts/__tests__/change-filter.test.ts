import { expect, test } from '@jest/globals';
import validationCards from '../utils/change-filter';
import { CardsSelectors } from '../types/cardsSelectors';

test('should be MIR', () => {
	const cardSelector = validationCards(2);
	expect(cardSelector).toBe(CardsSelectors.MIR);
});
test('should be VISA', () => {
	const cardSelector = validationCards(4);
	expect(cardSelector).toBe(CardsSelectors.VISA);
});
test('should be MASTER', () => {
	const cardSelector = validationCards(5);
	expect(cardSelector).toBe(CardsSelectors.MASTER);
});
test('should be empty string', () => {
	const cardSelector = validationCards(NaN);
	expect(cardSelector).toBe('');
});
