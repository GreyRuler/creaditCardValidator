import { expect, test } from '@jest/globals';
import { algorithmLuna } from '../utils/validators';

test('should be true for 4111111111111111', () => {
	const result = algorithmLuna('4111111111111111'.split(''));
	expect(result).toBe(true);
});

test('should be true for 411234511111111', () => {
	const result = algorithmLuna('411234511111111'.split(''));
	expect(result).toBe(false);
});
