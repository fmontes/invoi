import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioWithLabel } from './index';

storiesOf('Form/RadioWithLabel', module)
    .add('normal', () => <RadioWithLabel label="This is the label" />)
    .add('disabled', () => <RadioWithLabel label="Disabled" disabled />)
    .add('disabled checked', () => <RadioWithLabel label="Disabled and checked" disabled checked />)
    .add('error', () => <RadioWithLabel label="Error, is required" error />)
