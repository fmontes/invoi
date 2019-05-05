import React from 'react';
import { storiesOf } from '@storybook/react';
import Hint from './index';

storiesOf('Blocks/Hint/Regular', module)
    .add('normal', () => <Hint>Hello World</Hint>)
    .add('disabled', () => <Hint disabled>Hello World</Hint>)
    .add('error', () => <Hint error>Hello World</Hint>);
