import * as React from 'react';
import { Button } from './';
import { shallow } from 'enzyme';

test('Button should render', () => {
    const component = shallow(<Button>Hello World</Button>);
    expect(component).toMatchSnapshot();
});
