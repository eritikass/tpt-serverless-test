import React from 'react';
import Equation from '../src/components/Equation';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('test changes first input', () => {
	const wrapper = shallow(<Equation />);
	const usernameInput = wrapper.find('.input1');
	usernameInput.simulate('change', { target: { value: '10' } });
});
it('test changes second input', () => {
	const wrapper = shallow(<Equation />);
	const usernameInput = wrapper.find('.input2');
	usernameInput.simulate('change', { target: { value: '15' } });
});
it('test changes select', () => {
	const wrapper = shallow(<Equation />);
	const usernameInput = wrapper.find('.select');
	usernameInput.simulate('change', { target: { value: '+' } });
});
it('test changes select', () => {
	const wrapper = shallow(<Equation />);
	const usernameInput = wrapper.find('.select');
	usernameInput.simulate('change', { target: { value: '*' } });
});
it('test submitting form preventsDefault', () => {
	const addPodcastMock = jest.fn();
	const component = mount(<Equation addPodcast={addPodcastMock} />);
	component.find('form').simulate('submit', { preventDefault: jest.fn() });
});
