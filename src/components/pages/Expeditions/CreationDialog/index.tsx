import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions } from 'Redux/Store'
import * as types from 'types'

import MarketSelect from 'components/molecules/MarketSelect'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'

import NameInput from 'components/pages/Expeditions/CreationDialog/NameInput'
import SeedInput from 'components/pages/Expeditions/CreationDialog/SeedInput'
import BigPocketSelect from 'components/pages/Expeditions/CreationDialog/BigPocketSelect'
import VariantSelect from 'components/pages/Expeditions/CreationDialog/VariantSelect'
import CreateButton from 'components/pages/Expeditions/CreationDialog/CreateButton'

type OwnProps = {
  finisher: Function
  existingExpedition?: types.Expedition
}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  createExpedition: actions.Expeditions.Expeditions.createExpedition,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const CreationDialog = ({
  finisher,
  existingExpedition,
  createExpedition,
}: Props) => {
  const [expeditionName, changeExpeditionName] = useState(
    existingExpedition ? `${existingExpedition.name} Copy` : ''
  )
  const [bigPocketVariant, changeBigPocketVariant] = useState(
    existingExpedition?.bigPocketVariant ?? false
  )
  const [selectedMarketId, selectMarketId] = useState(
    existingExpedition?.settingsSnapshot.supplySetup.id ?? 'random'
  )
  const [selectedVariant, selectVariant] = useState(
    existingExpedition?.variantId ?? 'DEFAULT'
  )
  const [seedValue, changeSeedValue] = useState(
    existingExpedition?.seed.seed ?? ''
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

  return (
    <React.Fragment>
      <ModalBodyWrapper hasFooter={true}>
        <NameInput
          expeditionName={expeditionName}
          handleInputChange={handleNameChange}
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
            existingExpedition && [
              existingExpedition.settingsSnapshot.supplySetup,
            ]
          }
        />

        <SeedInput seed={seedValue} handleInputChange={handleSeedChange} />
      </ModalBodyWrapper>

      <ModalFooterWrapper>
        <CreateButton handleExpeditionCreation={handleExpeditionCreation} />
      </ModalFooterWrapper>
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(CreationDialog))
