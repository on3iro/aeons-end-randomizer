import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import FloatingButton from './'

storiesOf('Floating Button', module).add('Floating Button', () => (
  <FloatingButton onClick={action('clicked')}>Open Breach</FloatingButton>
))
