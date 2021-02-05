import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Li from '.'

export default {
  title: 'Components/Lists',
  component: Li,
} as Meta

const Template = (args: any) => <Li {...args}>List entry</Li>

export const LiElement = Template.bind({})
