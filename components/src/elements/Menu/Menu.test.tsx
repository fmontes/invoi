import * as React from 'react';
import { Menu } from './index';
import { shallow } from 'enzyme';

test('Menu should render', () => {
    const component = shallow(
        <Menu
            theme={{}}
            options={[
                {
                    label: 'Option One',
                    onClick: (e: MouseEvent) => console.log('one')
                },
                {
                    label: 'Option Two',
                    onClick: (e: MouseEvent) => console.log('two'),
                    disabled: true
                },
                {
                    label: 'Option Three',
                    onClick: (e: MouseEvent) => console.log('three')
                }
            ]}
        />
    );
    expect(component).toMatchSnapshot();
});
