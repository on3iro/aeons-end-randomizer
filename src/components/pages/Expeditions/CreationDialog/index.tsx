import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions } from 'Redux/Store'
import * as types from 'aer-types/types'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'

import BigPocketSelect from 'components/pages/Expeditions/CreationDialog/BigPocketSelect'
import UniqueMageNamesSelect from 'components/pages/Expeditions/CreationDialog/UniqueMageNamesSelect'
import ConfigImport from './ConfigImport'
import CreateButton from 'components/pages/Expeditions/CreationDialog/CreateButton'
import MarketSelect from './MarketSelect'
import NameInput from 'components/pages/Expeditions/CreationDialog/NameInput'
import SeedInput from 'components/pages/Expeditions/CreationDialog/SeedInput'
import VariantSelect from 'components/pages/Expeditions/CreationDialog/VariantSelect'

type OwnProps = {
  finisher: Function
  existingExpeditionConfig?: types.ImportedExpeditionConfig
}

const mapStateToProps = (_: RootState) => ({})

const mapDispatchToProps = {
  createExpedition: actions.Expeditions.Expeditions.createExpedition,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const CreationDialog = ({
  finisher,
  existingExpeditionConfig,
  createExpedition,
}: Props) => {
  const [expeditionConfig, changeExpeditionConfig] = useState<
    types.ImportedExpeditionConfig | undefined
  >(existingExpeditionConfig)

  const [expeditionName, changeExpeditionName] = useState(
    expeditionConfig ? `${expeditionConfig.name} Copy` : ''
  )
  const [bigPocketVariant, changeBigPocketVariant] = useState(
    expeditionConfig?.bigPocketVariantConfig || false
  )
  const [uniqueMageNames, changeUniqueMageNames] = useState(
    expeditionConfig?.uniqueMageNamesConfig || false
  )
  const [selectedMarketId, selectMarketId] = useState(
    expeditionConfig?.settingsSnapshotConfig?.supplySetup?.id || 'random'
  )
  const [selectedVariant, selectVariant] = useState(
    expeditionConfig
      ? undefined // We will have a ready made sequence instead
      : 'DEFAULT'
  )
  const [seedValue, changeSeedValue] = useState(
    expeditionConfig?.seedConfig || ''
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
      expeditionConfig,
      variantId: selectedVariant,
      name: expeditionName,
      bigPocketVariant,
      uniqueMageNames,
      marketId: selectedMarketId,
      seedValue,
    })
    finisher()
  }

  const configImportHandler = useCallback(
    (expeditionConfig: types.ExpeditionConfig) => {
      changeExpeditionConfig(expeditionConfig)
      changeExpeditionName(expeditionConfig?.name)
      changeBigPocketVariant(expeditionConfig?.bigPocketVariantConfig || false)
      changeUniqueMageNames(expeditionConfig?.uniqueMageNamesConfig || false)
      selectMarketId(
        expeditionConfig?.settingsSnapshotConfig?.supplySetup?.id || 'random'
      )
      selectVariant(undefined)
      changeSeedValue(expeditionConfig?.seedConfig || '')
    },
    [
      selectMarketId,
      changeExpeditionConfig,
      changeExpeditionName,
      changeBigPocketVariant,
      changeUniqueMageNames,
      selectVariant,
      changeSeedValue,
    ]
  )

  const additionalSetups = (() => {
    if (existingExpeditionConfig?.settingsSnapshotConfig?.supplySetup) {
      return [existingExpeditionConfig.settingsSnapshotConfig.supplySetup]
    } else if (expeditionConfig?.settingsSnapshotConfig?.supplySetup) {
      return [expeditionConfig.settingsSnapshotConfig.supplySetup]
    } else {
      return []
    }
  })()

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

        <UniqueMageNamesSelect
          uniqueMageNames={uniqueMageNames}
          changeUniqueMageNames={changeUniqueMageNames}
        />

        {selectedVariant && (
          <VariantSelect
            handleVariantChange={handleVariantChange}
            selectedVariantId={selectedVariant}
          />
        )}

        <MarketSelect
          selectedMarketId={selectedMarketId}
          clickHandler={supplySelectHandler}
          additionalSetups={additionalSetups}
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
