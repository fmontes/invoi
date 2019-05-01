import * as React from 'react';
import { Label } from './index';
import { shallow } from 'enzyme';

test('Label should render', () => {
    const component = shallow(<Label>Hello World</Label>);
    expect(component).toMatchSnapshot();
});
