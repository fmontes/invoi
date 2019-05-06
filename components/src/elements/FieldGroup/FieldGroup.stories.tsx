import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldGroup } from './index';
import { TextField } from '../../blocks/TextField';
import { Select } from '../../blocks/Select';

storiesOf('Form/FieldGroup/TextField/no hint', module)
    .add('normal', () => (
        <FieldGroup htmlFor="email" label="Label">
            <TextField id="email" type="email" />
        </FieldGroup>
    ))
    .add('disabled', () => (
        <FieldGroup disabled  htmlFor="email" label="Label">
            <TextField disabled id="email" type="email" />
        </FieldGroup>
    ))
    .add('error', () => (
        <FieldGroup error  htmlFor="email" label="Label">
            <TextField error id="email" type="email" />
        </FieldGroup>
    ));

storiesOf('Form/FieldGroup/TextField/with hint', module)
    .add('normal', () => (
        <FieldGroup htmlFor="email" label="Label" hint="This is the hint">
            <TextField id="email" type="email" />
        </FieldGroup>
    ))
    .add('disabled', () => (
        <FieldGroup disabled htmlFor="email" label="Label" hint="This is the hint">
            <TextField disabled id="email" type="email" />
        </FieldGroup>
    ))
    .add('error', () => (
        <FieldGroup error htmlFor="email" label="Label" hint="This is the hint">
            <TextField error id="email" type="email" />
        </FieldGroup>
    ));

storiesOf('Form/FieldGroup/Select/no hint', module)
    .add('normal', () => (
        <FieldGroup label="Label">
            <Select>
                <option>Hello World</option>
            </Select>
        </FieldGroup>
    ))
    .add('disabled', () => (
        <FieldGroup disabled id="email" label="Label">
            <Select disabled>
                <option>Hello World</option>
            </Select>
        </FieldGroup>
    ))
    .add('error', () => (
        <FieldGroup error id="email" label="Label">
            <Select error>
                <option>Hello World</option>
            </Select>
        </FieldGroup>
    ));

    storiesOf('Form/FieldGroup/Select/with hint', module)
    .add('normal', () => (
        <FieldGroup hint="This is the hint" label="Label">
            <Select>
                <option>Hello World</option>
            </Select>
        </FieldGroup>
    ))
    .add('disabled', () => (
        <FieldGroup disabled hint="This is the hint" label="Label">
            <Select disabled>
                <option>Hello World</option>
            </Select>
        </FieldGroup>
    ))
    .add('error', () => (
        <FieldGroup error hint="This is the hint" label="Label">
            <Select error>
                <option>Hello World</option>
            </Select>
        </FieldGroup>
    ));
