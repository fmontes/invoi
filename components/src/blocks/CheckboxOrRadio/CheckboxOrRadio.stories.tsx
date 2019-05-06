import React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckboxOrRadio } from './index';

storiesOf('Blocks/Checkbox', module)
    .add('normal', () => <CheckboxOrRadio type="checkbox" />)
    .add('disabled', () => <CheckboxOrRadio type="checkbox" disabled />)
    .add('disabled checked', () => <CheckboxOrRadio type="checkbox" checked disabled />)
    .add('error', () => <CheckboxOrRadio type="checkbox" error />)

storiesOf('Blocks/Radio', module)
    .add('normal', () => <CheckboxOrRadio type="radio" />)
    .add('disabled', () => <CheckboxOrRadio type="radio" disabled />)
    .add('disabled checked', () => <CheckboxOrRadio type="radio" checked disabled />)
    .add('error', () => <CheckboxOrRadio type="radio" error />)
