import * as React from 'react';
import { shallow } from 'enzyme';
import { Layout } from './';

test('Layout should render', () => {
    const layout = shallow(<Layout><h2>Hello World</h2></Layout>);
    expect(layout).toMatchSnapshot();
});
