import React from 'react';
import { storiesOf } from '@storybook/react';
import { Label } from './index';

storiesOf('Label Normal', module)
    .add('normal', () => <Label>Hello World</Label>)
