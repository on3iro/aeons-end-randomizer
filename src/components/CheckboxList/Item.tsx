import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

type BaseProps = {
  checked: boolean
  item: string
  label: string
  changeHandler: (selection: string) => void
}

export type RenderComponent = React.ComponentType<BaseProps>

type Props = BaseProps & {
  Component?: RenderComponent
}

const DefaultCheckbox = React.memo(
  ({ checked, item, label, changeHandler }: BaseProps) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={() => changeHandler(item)}
          value={item}
        />
      }
      label={label}
    />
  )
)

const Item = React.memo(({ Component = DefaultCheckbox, ...rest }: Props) => {
  return <Component {...rest} />
})

export default Item
