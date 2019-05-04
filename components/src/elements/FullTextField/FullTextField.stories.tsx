import React from 'react';
import { storiesOf } from '@storybook/react';
import { FullTextField } from './index';

storiesOf('FullTextField Normal', module)
    .add('normal', () => <FullTextField/>)
