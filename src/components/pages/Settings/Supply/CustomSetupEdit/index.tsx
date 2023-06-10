import React, { useState, useReducer, useCallback } from 'react'
import shortid from 'shortid'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'

import { RootState, actions } from 'Redux/Store'

import BluePrintList from './BluePrintList'
import MainControls from './MainControls'
import Wrapper from './Wrapper'

type BluePrintState = { [id: string]: types.IBluePrint }
type Action = { type: string; payload?: any }

const initialStateFromTiles = (tiles: types.IBluePrint[]) =>
  tiles.reduce<BluePrintState>((acc, tile) => {
    const id = tile.id || shortid.generate()
    return { ...acc, [id]: { ...tile, id } }
  }, {})

const bluePrintReducer = (
  state: BluePrintState,
  action: Action
): BluePrintState => {
  switch (action.type) {
    case 'ADD': {
      const id = shortid.generate()
      return {
        ...state,
        [id]: {
          id,
          type: 'ANY',
          operation: 'ANY',
        },
      }
    }

    case 'UPDATE': {
      const blueprint = action.payload

      return { ...state, [blueprint.id]: { ...blueprint } }
    }

    case 'DELETE': {
      const { id } = action.payload
      const { [id]: blueprint, ...rest } = state

      return { ...rest }
    }

    default: {
      return state
    }
  }
}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  cancelEdit: actions.Settings.SupplySetups.cancelEdit,
  saveCustomSetup: actions.Settings.SupplySetups.saveCustomSetup,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    setup: types.IMarketSetup
    saveCallback: () => void
  }

const CustomSetupEdit = ({
  setup,
  cancelEdit,
  saveCustomSetup,
  saveCallback,
}: Props) => {
  const [setupName, setSetupName] = useState(setup.name || '')
  const [bluePrints, dispatch] = useReducer(
    bluePrintReducer,
    setup.tiles,
    initialStateFromTiles
  )

  // We reverse the list, so that the last added tile is shown on top
  const bluePrintList = Object.values(bluePrints).reverse()

  const handleSave = useCallback(
    (setup) => {
      saveCustomSetup(setup)
      saveCallback()
    },
    [saveCallback, saveCustomSetup]
  )

  return (
    <Wrapper>
      <MainControls
        bluePrintList={bluePrintList}
        cancelEdit={cancelEdit}
        setup={setup}
        setupName={setupName}
        setSetupName={setSetupName}
        saveCustomSetup={handleSave}
      />
      <BluePrintList bluePrintList={bluePrintList} dispatch={dispatch} />
    </Wrapper>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(CustomSetupEdit))
