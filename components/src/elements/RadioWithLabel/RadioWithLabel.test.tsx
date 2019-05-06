import * as React from 'react';
import { RadioWithLabel } from './index';
import { shallow } from 'enzyme';

test('RadioWithLabel should render', () => {
    const component = shallow(<RadioWithLabel />);
    expect(component).toMatchSnapshot();
});

test('RadioWithLabel should render disaled', () => {
    const component = shallow(<RadioWithLabel disabled />);
    expect(component).toMatchSnapshot();
});

test('RadioWithLabel should render error', () => {
    const component = shallow(<RadioWithLabel error />);
    expect(component).toMatchSnapshot();
});
