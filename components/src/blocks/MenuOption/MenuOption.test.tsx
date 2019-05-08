import * as React from 'react';
import { MenuOption } from './index';
import { shallow } from 'enzyme';

test('MenuOption should render', () => {
    const component = shallow(<MenuOption>Hello World</MenuOption>);
    expect(component).toMatchSnapshot();
});
