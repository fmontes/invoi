import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonMenu } from './index';

storiesOf('Blocks/ButtonMenu', module)
    .add('normal', () => <ButtonMenu>Hello ButtonMenu</ButtonMenu>)
    .add('disabled', () => <ButtonMenu disabled>Hello ButtonMenu</ButtonMenu>)
