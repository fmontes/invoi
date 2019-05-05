import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldGroup } from './index';
import { TextField } from '../../blocks/TextField/index';

storiesOf('Form/FieldGroup/no hint', module)
    .add('normal', () => (
        <FieldGroup id="email" label="Hello World">
            <TextField id="email" type="email" />
        </FieldGroup>
    ))
    .add('disabled', () => (
        <FieldGroup disabled id="email" label="Hello World">
            <TextField disabled id="email" type="email" />
        </FieldGroup>
    ))
    .add('error', () => (
        <FieldGroup error id="email" label="Hello World">
            <TextField error id="email" type="email" />
        </FieldGroup>
    ));

storiesOf('Form/FieldGroup/with hint', module)
    .add('normal', () => (
        <FieldGroup id="email" label="Hello World" hint="This is the hint">
            <TextField id="email" type="email" />
        </FieldGroup>
    ))
    .add('disabled', () => (
        <FieldGroup disabled id="email" label="Hello World" hint="This is the hint">
            <TextField disabled id="email" type="email" />
        </FieldGroup>
    ))
    .add('error', () => (
        <FieldGroup error id="email" label="Hello World" hint="This is the hint">
            <TextField error id="email" type="email" />
        </FieldGroup>
    ));
