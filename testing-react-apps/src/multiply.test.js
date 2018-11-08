/*
  eslint
	no-undef: 0
*/

import multiply from './multiply';

describe('Multiply', () => {
	describe('Unit test', () => {
		it('should return the product of two numbers', () => {
			const result = multiply(2, 3);
			const expectedProduct = 6;
			expect(result).toBe(expectedProduct);
		});
	});
});
