import React from 'react';
import Equation from '../src/components/Equation';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { add } from '../src/components/Equation';
Enzyme.configure({ adapter: new Adapter() });

describe('Switch tests', () => {
	it('test if action is + answer is correct', () => {
		let wrapper = shallow(<Equation />);

		if (wrapper.state().action === '+') {
			expect(wrapper.state().action).toBe('+');
			const value = add(2, 4);
			wrapper.state().answer = value;
			expect(wrapper.state().answer).toBe(6);
		}
	});
});
