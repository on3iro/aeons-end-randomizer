import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions } from 'Redux/Store'
import * as types from 'types'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'

import BigPocketSelect from 'components/pages/Expeditions/CreationDialog/BigPocketSelect'
import ConfigImport from './ConfigImport'
import CreateButton from 'components/pages/Expeditions/CreationDialog/CreateButton'
import MarketSelect from './MarketSelect'
import NameInput from 'components/pages/Expeditions/CreationDialog/NameInput'
import SeedInput from 'components/pages/Expeditions/CreationDialog/SeedInput'
import VariantSelect from 'components/pages/Expeditions/CreationDialog/VariantSelect'

type OwnProps = {
  finisher: Function
  expedition?: types.Expedition
}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  createExpedition: actions.Expeditions.Expeditions.createExpedition,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const CreationDialog = ({ finisher, expedition, createExpedition }: Props) => {
  const [existingExpedition, changeExistingExpedition] = useState<
    types.Expedition | undefined
  >(expedition)

  const [expeditionName, changeExpeditionName] = useState(
    existingExpedition ? `${existingExpedition.name} Copy` : ''
  )
  const [bigPocketVariant, changeBigPocketVariant] = useState(
    existingExpedition?.bigPocketVariant || false
  )
  const [selectedMarketId, selectMarketId] = useState(
    existingExpedition?.settingsSnapshot?.supplySetup?.id || 'random'
  )
  const [selectedVariant, selectVariant] = useState(
    existingExpedition?.variantId || 'DEFAULT'
  )
  const [seedValue, changeSeedValue] = useState(
    existingExpedition?.seed.seed || ''
  )

  const supplySelectHandler = (id: string) => {
    selectMarketId(id)
  }

  const handleNameChange = (e: any) =>
    changeExpeditionName(e.currentTarget.value)

  const handleSeedChange = (e: any) => changeSeedValue(e.currentTarget.value)

  const handleVariantChange = (e: any) => selectVariant(e.currentTarget.value)

  const handleExpeditionCreation = () => {
    createExpedition({
      variantId: selectedVariant,
      name: expeditionName,
      bigPocketVariant,
      marketId: selectedMarketId,
      seedValue,
      existingSettingsSnapshot: existingExpedition?.settingsSnapshot,
    })
    finisher()
  }

  const configImportHandler = useCallback(
    // FIXME this type is actually not a full expedition
    (config: types.Expedition) => {
      changeExistingExpedition(config)
      changeExpeditionName(config?.name || `${config.id} Copy`)
      changeBigPocketVariant(config?.bigPocketVariant || false)
      selectMarketId(config?.settingsSnapshot?.supplySetup?.id || 'random')
      selectVariant(config?.variantId || 'DEFAULT')
      changeSeedValue(config?.seed?.seed || '')
    },
    [
      selectMarketId,
      changeExistingExpedition,
      changeExpeditionName,
      selectVariant,
      changeSeedValue,
    ]
  )

  return (
    <React.Fragment>
      <ModalBodyWrapper hasFooter={true}>
        <ConfigImport configImportHandler={configImportHandler} />

        <NameInput
          expeditionName={expeditionName}
          handleInputChange={handleNameChange}
          data-test="input-name"
        />

        <BigPocketSelect
          bigPocketVariant={bigPocketVariant}
          changeBigPocketVariant={changeBigPocketVariant}
        />

        <VariantSelect
          handleVariantChange={handleVariantChange}
          selectedVariantId={selectedVariant}
        />

        <MarketSelect
          selectedMarketId={selectedMarketId}
          clickHandler={supplySelectHandler}
          additionalSetups={
            existingExpedition?.settingsSnapshot?.supplySetup && [
              existingExpedition.settingsSnapshot.supplySetup,
            ]
          }
        />

        <SeedInput seed={seedValue} handleInputChange={handleSeedChange} />
      </ModalBodyWrapper>

      <ModalFooterWrapper>
        <CreateButton
          handleExpeditionCreation={handleExpeditionCreation}
          data-test="btn-expedition-create"
        />
      </ModalFooterWrapper>
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(CreationDialog))
