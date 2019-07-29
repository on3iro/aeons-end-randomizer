import React from 'react'
import Button from '@material-ui/core/Button'

import * as types from '../../../../../types'

import InputField from './InputField'
import MainControlsWrapper from './MainControlsWrapper'

type Props = {
  bluePrintList: types.IBluePrint[]
  cancelEdit: Function
  setup: types.IMarketSetup
  setupName: string
  setSetupName: Function
  saveCustomSetup: Function
}

const MainControls = React.memo(
  ({
    bluePrintList,
    cancelEdit,
    setup,
    setupName,
    setSetupName,
    saveCustomSetup,
  }: Props) => {
    return (
      <MainControlsWrapper>
        <InputField
          id="setup-name"
          label="Setup Name"
          placeholder="Setup Name"
          value={setupName}
          onChange={e => setSetupName(e.currentTarget.value)}
          margin="normal"
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() =>
            saveCustomSetup({ ...setup, name: setupName, tiles: bluePrintList })
          }
        >
          Save
        </Button>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={() => cancelEdit(setup.id)}
        >
          Cancel
        </Button>
      </MainControlsWrapper>
    )
  }
)

MainControls.displayName = 'MainControls'

export default MainControls
