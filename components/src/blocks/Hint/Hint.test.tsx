import * as React from 'react';
import Hint from './index';
import { shallow } from 'enzyme';

test('Hint should render', () => {
    const component = shallow(<Hint>Hello World</Hint>);
    expect(component).toMatchSnapshot();
});

test('Hint should render disabled', () => {
    const component = shallow(<Hint disabled>Hello World</Hint>);
    expect(component).toMatchSnapshot();
});

test('Hint should render error', () => {
    const component = shallow(<Hint error>Hello World</Hint>);
    expect(component).toMatchSnapshot();
});

