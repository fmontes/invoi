import * as React from 'react';
import { ButtonMenu } from './index';
import { shallow } from 'enzyme';

test('ButtonMenu should render', () => {
    const component = shallow(<ButtonMenu>Hello World</ButtonMenu>);
    expect(component).toMatchSnapshot();
});
