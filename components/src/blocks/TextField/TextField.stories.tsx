import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextField } from './index';

storiesOf('Form/Fields/TextField', module)
    .add('normal', () => <TextField type="text" />)
    .add('disabled', () => <TextField type="text" disabled />)
