import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';

storiesOf('Button/Regular', module)
    .add('normal', () => <Button>Hello Button</Button>)
    .add('secondary', () => <Button secondary>Hello Button</Button>)
    .add('disabled', () => <Button disabled>Hello Button</Button>)
    .add('naked', () => <Button naked>Hello Button</Button>)

storiesOf('Button/Tiny', module)
    .add('normal', () => <Button tiny>Hello Button</Button>)
    .add('secondary', () => <Button tiny secondary>Hello Button</Button>)
    .add('disabled', () => <Button tiny disabled>Hello Button</Button>)
    .add('naked', () => <Button tiny naked>Hello Button</Button>)
