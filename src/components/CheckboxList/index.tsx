import React from 'react'

import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import Item, { RenderComponent } from './Item'

type Item = {
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
      key={item.name}
      item={item.name}
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
}

const CheckboxList = React.memo(
  ({ label, items, changeHandler, Component, ...rest }: Props) => (
    <React.Fragment>
      <FormLabel {...rest}>{label}</FormLabel>
      <FormGroup {...rest} style={{ marginBottom: '20px' }}>
        {renderCheckboxes(items, changeHandler, Component)}
      </FormGroup>
    </React.Fragment>
  )
)

export default CheckboxList
