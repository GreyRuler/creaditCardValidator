import { FirstNumberCards } from '../types/firstNumberCards';
import { CardsSelectors } from '../types/cardsSelectors';

export default function validationCards(value: number) {
	switch (value) {
		case FirstNumberCards.VISA:
			return CardsSelectors.VISA;
		case FirstNumberCards.MASTER:
			return CardsSelectors.MASTER;
		case FirstNumberCards.MIR:
			return CardsSelectors.MIR;
		default:
			return '';
	}
}
