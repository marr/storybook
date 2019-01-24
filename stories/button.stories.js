import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/button';

storiesOf('Custom Button', module)
  .add('with class', () => <Button onClick={action('clicked')} className='special'>Hello Button</Button>)
  ;
