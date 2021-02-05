import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Heading from '.'

export default {
  title: 'Components/Expansion Panel',
  component: Heading,
} as Meta

const Template = (args: any) => (
  <Heading {...args}>Expansion Panel Heading</Heading>
)

export const ExpansionPanelHeading = Template.bind({})
