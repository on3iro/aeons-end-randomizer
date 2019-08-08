import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import IconButton from './'

storiesOf('Icon Button', module)
  .add('Primary', () => <IconButton onClick={action('clicked')} icon="save" />)
  .add('Secondary', () => (
    <IconButton onClick={action('clicked')} color="secondary" icon="cancel" />
  ))
