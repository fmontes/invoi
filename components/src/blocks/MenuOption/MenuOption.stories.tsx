import React from 'react';
import { storiesOf } from '@storybook/react';
import { MenuOption } from './index';

storiesOf('Blocks/MenuOption', module)
    .add('normal', () => (
        <MenuOption
            {...{
                label: 'Option Enable',
                onClick: (e: MouseEvent) => console.log('Enable')
            }}
        />
    ))
    .add('disabled', () => (
        <MenuOption
            {...{
                label: 'Option Disabled',
                onClick: (e: MouseEvent) => console.log('Disabled'),
                disabled: true
            }}
        >
            Menu Option
        </MenuOption>
    ));
