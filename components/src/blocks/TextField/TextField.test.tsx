import * as React from 'react';
import { TextField } from './index';
import { shallow } from 'enzyme';

test('TextField should render', () => {
    const component = shallow(<TextField type="number" />);
    expect(component).toMatchSnapshot();
});

test('TextField should render disaled', () => {
    const component = shallow(<TextField disabled type="number" />);
    expect(component).toMatchSnapshot();
});

test('TextField should render error', () => {
    const component = shallow(<TextField error type="number" />);
    expect(component).toMatchSnapshot();
});
