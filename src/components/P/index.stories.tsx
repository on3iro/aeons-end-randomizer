import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import P from '.'

export default {
  title: 'Components/Body Text',
  component: P,
} as Meta

const Template = (args: any) => <P {...args}>Paragraph</P>

export const Paragraph = Template.bind({})
