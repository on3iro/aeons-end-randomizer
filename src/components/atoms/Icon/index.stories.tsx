import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Icon from './'

storiesOf('Icon', module)
  .add('Icon', () => <Icon name="add" />)
  .add('Icon Sizes', () => (
    <React.Fragment>
      <Icon name="add" size="16px" />
      <Icon name="add" size="24px" />
      <Icon name="add" size="32px" />
      <Icon name="add" size="48px" />
    </React.Fragment>
  ))
