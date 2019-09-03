import React from 'react'

import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import Item, { RenderComponent } from './Item'

type Item = {
  id: string
  name: string
  label: string
  checked: boolean
}

const renderCheckboxes = (
  items: ReadonlyArray<Item>,
  handleChange: (set: string) => void,
  Component?: RenderComponent
) =>
  items.map(item => (
    <Item
      Component={Component}
      key={item.id}
      item={item.id}
      label={item.label}
      checked={item.checked}
      changeHandler={handleChange}
    />
  ))

type Props = {
  label: string
  items: ReadonlyArray<Item>
  changeHandler: (selection: string) => void
  Component?: RenderComponent
  children?: React.ReactNode
}

const CheckboxList = React.memo(
  ({ children, label, items, changeHandler, Component, ...rest }: Props) => (
    <React.Fragment>
      <FormLabel {...rest} style={{ marginTop: '24px' }}>
        {label}
      </FormLabel>
      <FormGroup {...rest}>
        {children}
        {renderCheckboxes(items, changeHandler, Component)}
      </FormGroup>
    </React.Fragment>
  )
)

CheckboxList.displayName = 'CheckboxList'

export default CheckboxList
