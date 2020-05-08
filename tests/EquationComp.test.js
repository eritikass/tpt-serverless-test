import React from 'react';
import Equation from '../src/components/Equation';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Equation component renders correctly', () => {
	it('renders correctly', () => {
		const rendered = renderer.create(<Equation />);
		expect(rendered.toJSON()).toMatchSnapshot();
	});
});
describe('Equation component', () => {
	test('renders', () => {
		const wrapper = shallow(<Equation />);
		expect(wrapper.exists()).toBe(true);
	});
	test('When the form is submitted the event is cancelled', () => {
		const wrapper = shallow(<Equation />);
		let prevented = false;
		wrapper.find('form').simulate('submit', {
			preventDefault: () => {
				prevented = true;
			},
		});
		expect(prevented).toBe(true);
	});
	test('returns the default empty array when there is no data to map through', () => {
		const wrapper = shallow(<Equation />);
		expect(wrapper).toMatchSnapshot();
	});
});
