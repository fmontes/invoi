import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextField } from './index';

storiesOf('Blocks/TextField', module)
    .add('normal', () => <TextField type="text" />)
    .add('disabled', () => <TextField type="text" disabled />)
    .add('error', () => <TextField type="text" error />)
