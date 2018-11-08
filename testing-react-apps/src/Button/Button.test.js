/*
  eslint
	no-undef: 0
*/

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
	describe('Snapshot test', () => {
		it('match the snapshot', () => {
			const mockAlertNumber = jest.fn();
			const component = renderer.create(<Button data="Joe Rules" alertNumber={mockAlertNumber} />);
			const tree = component.toJSON();
			expect(tree).toMatchSnapshot();
		});

		// it('match the snapshot', () => {
		// 	const mockAlertNumber = jest.fn();
		// 	const component = renderer.create(<Button data="hello wolrd" alertNumber={mockAlertNumber} />);
		// 	const tree = component.toJSON();
		// 	expect(tree).toMatchSnapshot();
		// });
	});

	describe('Integration test', () => {
		it('should run the multiply function on click', () => {
			const mockAlertNumber = jest.fn();
			const component = mount(<Button data="Joe Rules" alertNumber={mockAlertNumber} />);
			component.find('button').simulate('click');
			expect(mockAlertNumber).toHaveBeenCalledTimes(1);
		});
	});
});
