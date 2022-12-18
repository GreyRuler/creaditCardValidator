export function algorithmLuna(cardNumbers: string[]) {
	const isDivisible = cardNumbers.length % 2 === 0 ? 0 : 1;
	const someSum = cardNumbers.reduce((sum: number, numberStr: string, index: number) => {
		let number = Number.parseInt(numberStr, 10);
		if (index % 2 === isDivisible) {
			number *= 2;
			if (number > 9) {
				number -= 9;
			}
		}
		sum += number;
		return sum;
	}, 0);
	return someSum % 10 === 0;
}

export function isValidation(input: HTMLInputElement) {
	return algorithmLuna(input.value.split(''));
}
