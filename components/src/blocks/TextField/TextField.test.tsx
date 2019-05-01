import * as React from 'react';
import { TextField } from './index';
import { shallow } from 'enzyme';

test('TextField should render', () => {
    const component = shallow(<TextField type="number" />);
    expect(component).toMatchSnapshot();
});
