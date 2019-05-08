import React from 'react';
import { storiesOf } from '@storybook/react';
import { MenuOption } from './index';

storiesOf('Blocks/MenuOption', module)
    .add('normal', () => <MenuOption>Menu Option</MenuOption>)
    .add('disabled', () => <MenuOption disabled>Menu Option</MenuOption>)
