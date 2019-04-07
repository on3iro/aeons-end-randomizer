import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { IMarketSetup } from '../../../../types'

import SupplyPreview from '../../../SupplyPreview'

type Props = {
  changeHandler: (selection: string) => void
  checked: boolean
  item: string
  label: string
  setup?: IMarketSetup
}

const CheckboxWithPreview = React.memo(
  ({ changeHandler, checked, item, label, setup }: Props) => (
    <div>
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
      {setup ? (
        <SupplyPreview
          clickHandler={() => changeHandler(item)}
          setup={setup}
          showName={false}
        />
      ) : null}
    </div>
  )
)

CheckboxWithPreview.displayName = 'CheckboxWithPreview'

export default CheckboxWithPreview
