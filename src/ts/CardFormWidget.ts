import { isValidation } from './utils/validators';
import validationCards from './utils/change-filter';

export default class CardFormWidget {
	private parentEl: HTMLElement;

	private element?: HTMLFormElement;

	private submit?: HTMLButtonElement;

	private input?: HTMLInputElement;

	private cards: HTMLElement[] = [];

	constructor(parentEl: HTMLElement) {
		this.parentEl = parentEl;

		this.onSubmit = this.onSubmit.bind(this);
		this.changeValueListener = this.changeValueListener.bind(this);
	}

	static get markup() {
		return `
		<ul class="cards list-unstyled list-inline">
			<li class="list-inline-item"><div class="card filter visa" title="Visa"></div></li>
			<li class="list-inline-item"><div class="card filter master" title="Mastercard"></div></li>
			<li class="list-inline-item"><div class="card filter mir" title="Mir"></div></li>
		</ul>
		<form id="card-form-widget">
			<div class="form-group">
				<input class="form-control" id="card_number" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="">
				<button class="btn btn-success" id="submitForm">Click to Validate</button>
			</div>
		</form>
		`;
	}

	static get submitSelector() {
		return '#submitForm';
	}

	static get inputSelector() {
		return '#card_number';
	}

	static get selector() {
		return '#card-form-widget';
	}

	bindToDOM() {
		this.parentEl.innerHTML = CardFormWidget.markup;

		this.element = this.parentEl
			.querySelector(CardFormWidget.selector) || undefined;
		this.submit = this.element
			?.querySelector(CardFormWidget.submitSelector) || undefined;
		this.input = this.element
			?.querySelector(CardFormWidget.inputSelector) || undefined;
		this.cards = Array.from(
			this.parentEl.querySelectorAll('.card')
		);

		this.input?.addEventListener('input', this.changeValueListener);
		this.element?.addEventListener('submit', this.onSubmit);
	}

	onSubmit(e: Event) {
		e.preventDefault();

		const cardNumberInput = this.input;

		if (cardNumberInput && isValidation(cardNumberInput)) {
			cardNumberInput.classList.add('is-valid');
			cardNumberInput.classList.remove('is-invalid');
		} else {
			cardNumberInput?.classList.add('is-invalid');
			cardNumberInput?.classList.remove('is-valid');
		}
	}

	changeValueListener() {
		const { input } = this;

		this.clearFilter();
		const selectorCard = validationCards(
			Number.parseInt(input!.value[0], 10)
		);

		this.addFilterExcept(selectorCard);
	}

	clearFilter() {
		const { cards } = this;

		cards.forEach((card: HTMLElement) => {
			card.classList.remove('filter');
		});
	}

	addFilterExcept(selector: string) {
		const { cards } = this;

		cards.forEach((card: HTMLElement) => {
			if (!card.classList.contains(selector)) {
				card.classList.add('filter');
			}
		});
	}
}
