import * as React from 'react';
import Label from './index';
import { shallow } from 'enzyme';

test('Label should render', () => {
    const component = shallow(<Label>Hello World</Label>);
    expect(component).toMatchSnapshot();
});

test('Label should render disabled', () => {
    const component = shallow(<Label disabled>Hello World</Label>);
    expect(component).toMatchSnapshot();
});

test('Label should render error', () => {
    const component = shallow(<Label error>Hello World</Label>);
    expect(component).toMatchSnapshot();
});
