import React, { useCallback } from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { IMarketSetup } from '../../../../../types'

import PreviewWrapper from './PreviewWrapper'
import Wrapper from './Wrapper'

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
      <Wrapper>
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
          <PreviewWrapper
            clickHandler={handleSelection}
            setup={setup}
            showName={false}
          />
        ) : null}
      </Wrapper>
    )
  }
)

CheckboxWithPreview.displayName = 'CheckboxWithPreview'

export default CheckboxWithPreview
