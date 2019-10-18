import React, { useCallback } from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { IMarketSetup } from '../../../../types'

import SettingsSupplyPreview from './SettingsSupplyPreview'
import CheckboxWithPreviewWrapper from './CheckboxWithPreviewWrapper'

type Props = {
  changeHandler: (selection: string) => void
  setup: IMarketSetup
  children?: React.ReactNode
}

const CheckboxWithPreview = React.memo(
  ({ changeHandler, setup, children }: Props) => {
    const handleSelection = useCallback(() => {
      changeHandler(setup.id)
    }, [changeHandler, setup.id])

    return (
      <CheckboxWithPreviewWrapper>
        <FormControlLabel
          control={
            <Checkbox
              checked={setup.active}
              onChange={handleSelection}
              value={setup.id}
            />
          }
          label={setup.name}
        />
        {children}
        {setup ? (
          <SettingsSupplyPreview
            clickHandler={handleSelection}
            setup={setup}
            showName={false}
          />
        ) : null}
      </CheckboxWithPreviewWrapper>
    )
  }
)

CheckboxWithPreview.displayName = 'CheckboxWithPreview'

export default CheckboxWithPreview
