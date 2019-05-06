import React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckboxWithLabel } from './index';

storiesOf('Form/CheckboxWithLabel', module)
    .add('normal', () => <CheckboxWithLabel label="This is the label" />)
    .add('disabled', () => <CheckboxWithLabel label="Disabled" disabled />)
    .add('disabled checked', () => <CheckboxWithLabel label="Disabled and checked" disabled checked />)
    .add('error', () => <CheckboxWithLabel label="Error, is required" error />)
