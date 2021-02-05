import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import H1 from '.'

export default {
  title: 'Components/Headlines',
  component: H1,
} as Meta

const Template = (args: any) => <H1 {...args}>Headline H1</H1>

export const Headline1 = Template.bind({})
