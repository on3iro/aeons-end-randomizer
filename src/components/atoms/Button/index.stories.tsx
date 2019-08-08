import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './'

storiesOf('Button', module)
  .add('Primary', () => (
    <Button onClick={action('clicked')}>Button text</Button>
  ))
  .add('Secondary', () => (
    <Button onClick={action('clicked')} color="secondary">
      Button text
    </Button>
  ))
