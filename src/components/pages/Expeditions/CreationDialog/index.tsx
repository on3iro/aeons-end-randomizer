import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'

import MarketSelect from 'components/molecules/MarketSelect'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'

import NameInput from 'components/pages/Expeditions/CreationDialog/NameInput'
import BigPocketSelect from 'components/pages/Expeditions/CreationDialog/BigPocketSelect'
import VariantSelect from 'components/pages/Expeditions/CreationDialog/VariantSelect'
import CreateButton from 'components/pages/Expeditions/CreationDialog/CreateButton'

const mapStateToProps = (state: RootState) => ({
  selectedVariant: selectors.Expeditions.Variants.getSelectedVariant(state),
})

const mapDispatchToProps = {
  createExpedition: actions.Expeditions.Expeditions.createExpedition,
  selectVariant: actions.Expeditions.Variants.updateSelected,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    finisher: Function
  }

const CreationDialog = ({
  finisher,
  createExpedition,
  selectVariant,
  selectedVariant,
}: Props) => {
  const [expeditionName, changeExpeditionName] = useState('')
  const [bigPocketVariant, changeBigPocketVariant] = useState(false)
  const [selectedMarketId, selectMarketId] = useState('random')

  const supplySelectHandler = (id: string) => {
    selectMarketId(id)
  }

  const handleInputChange = (e: any) =>
    changeExpeditionName(e.currentTarget.value)

  const handleVariantChange = (e: any) => selectVariant(e.currentTarget.value)

  const handleExpeditionCreation = () => {
    createExpedition({
      variantId: selectedVariant.id,
      name: expeditionName,
      bigPocketVariant,
      marketId: selectedMarketId,
    })
    finisher()
  }

  return (
    <React.Fragment>
      <ModalBodyWrapper hasFooter={true}>
        <NameInput
          expeditionName={expeditionName}
          handleInputChange={handleInputChange}
        />

        <BigPocketSelect
          bigPocketVariant={bigPocketVariant}
          changeBigPocketVariant={changeBigPocketVariant}
        />

        <VariantSelect
          handleVariantChange={handleVariantChange}
          selectedVariantId={selectedVariant.id}
        />

        <MarketSelect
          selectedMarketId={selectedMarketId}
          clickHandler={supplySelectHandler}
        />
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
