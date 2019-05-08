import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';

storiesOf('Blocks/Button', module)
    .add('normal', () => <Button>Hello Button</Button>)
    .add('secondary', () => <Button secondary>Hello Button</Button>)
    .add('disabled', () => <Button disabled>Hello Button</Button>)
    .add('naked', () => <Button naked>Hello Button</Button>)
    .add('tiny', () => <Button tiny>Hello Button</Button>)
