import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextField } from './index';

storiesOf('TextField Normal', module)
    .add('normal', () => <TextField type="text" />)
