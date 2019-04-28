import React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout } from './';

storiesOf('Layout', module)
  .add('with text', () => (
    <Layout>Hello Layout</Layout>
  ))
  .add('with emoji', () => (
    <Layout><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Layout>
  )); 