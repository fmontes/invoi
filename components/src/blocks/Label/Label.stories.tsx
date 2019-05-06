import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from './index';

storiesOf('Blocks/Label', module)
    .add('normal', () => <Label>Hello World</Label>)
    .add('disabled', () => <Label disabled>Hello World</Label>)
    .add('error', () => <Label error>Hello World</Label>);
