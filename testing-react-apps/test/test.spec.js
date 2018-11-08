/*
  eslint
	no-undef: 0
*/
const { expect } = require('chai');

describe('Preview App Test page', () => {
	it('should have the right title', () => {
		browser.url('http://localhost:3001/');
		const title = browser.getTitle();
		expect(title).to.equal('Testing React Preview App');
	});

	describe('Button', () => {
		it('should render the product of 3 * 2 on the DOM when clicked', () => {
			browser.url('http://localhost:3001/');
			const btn = $('.Button');
			btn.click();
			const newNum = $('.newNum');
			expect(newNum.getText()).to.be.equal('6');
		});
	});
});
