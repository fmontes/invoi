import * as React from 'react';
import { CheckboxWithLabel } from './index';
import { shallow } from 'enzyme';

test('CheckboxWithLabel should render', () => {
    const component = shallow(<CheckboxWithLabel type="checkbox" />);
    expect(component).toMatchSnapshot();
});

test('CheckboxWithLabel should render disaled', () => {
    const component = shallow(<CheckboxWithLabel disabled type="checkbox" />);
    expect(component).toMatchSnapshot();
});

test('CheckboxWithLabel should render error', () => {
    const component = shallow(<CheckboxWithLabel error type="checkbox" />);
    expect(component).toMatchSnapshot();
});
