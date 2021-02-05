import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import H2 from '.'

export default {
  title: 'Components/Headlines',
  component: H2,
} as Meta

const Template = (args: any) => <H2 {...args}>Headline H2</H2>

export const Headline2 = Template.bind({})
