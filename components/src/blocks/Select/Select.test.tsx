import * as React from 'react';
import { Select } from './index';
import { shallow } from 'enzyme';

test('Select should render', () => {
    const component = shallow(<Select />);
    expect(component).toMatchSnapshot();
});

test('Select should render disaled', () => {
    const component = shallow(<Select disabled />);
    expect(component).toMatchSnapshot();
});

test('Select should render error', () => {
    const component = shallow(<Select error />);
    expect(component).toMatchSnapshot();
});
