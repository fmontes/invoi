import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './index';

storiesOf('Blocks/Select', module)
    .add('normal', () => <Select><option>Hello World</option></Select>)
    .add('disabled', () => <Select disabled><option>Hello World</option></Select>)
    .add('error', () => <Select error><option>Hello World</option></Select>)
