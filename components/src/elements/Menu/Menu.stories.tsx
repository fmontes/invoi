import React from 'react';
import { storiesOf } from '@storybook/react';
import { Menu } from './index';

storiesOf('Elements/Menu', module).add('normal', () => (
    <Menu
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
            },
        ]}
    />
));
