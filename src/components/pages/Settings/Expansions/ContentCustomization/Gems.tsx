import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from '../../../../../Redux/Store'
import { useModal } from '../../../../Modal'
import * as types from '../../../../../types'

import CheckboxWithDetails from './CheckboxWithDetails'
import CheckboxList from '../../../../CheckboxList'
import SupplyModal from '../../../Supply/SupplyModal'

const entitiesToItems = (
  entities: ReadonlyArray<types.ICard & { selected: boolean }>,
  includeEntity: boolean = false
) =>
  entities.map(entity => ({
    name: entity.name,
    id: entity.id,
    label: entity.name,
    checked: entity.selected,
    ...(includeEntity && { entity }),
  }))

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedGems: selectors.Settings.Expansions.SelectedCards.getGemsByExpansionId(
    state,
    props.expansionId
  ),
})

const mapDispatchToProps = {
  handleGemChange: actions.Settings.Expansions.SelectedCards.toggleCard,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Gems = React.memo(({ selectedGems, handleGemChange }: Props) => {
  const { show: showGemModal, renderModal: renderCardModal } = useModal()
  const [modalContentId, setModalContentId] = useState<string>('')

  const CheckboxComponent = useCallback(
    ({ checked, item, label, changeHandler }) => {
      const handleGemDetails = (gemId: string) => {
        showGemModal()
        setModalContentId(gemId)
      }

      return (
        <CheckboxWithDetails
          id={item.id}
          checked={checked}
          item={item.id}
          label={label}
          changeHandler={changeHandler}
          showDetails={handleGemDetails}
        />
      )
    },
    [showGemModal]
  )

  return (
    <React.Fragment>
      <CheckboxList
        label="Gems"
        items={entitiesToItems(selectedGems)}
        Component={CheckboxComponent}
        changeHandler={handleGemChange}
      />
      <SupplyModal id={modalContentId} renderModal={renderCardModal} />
    </React.Fragment>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gems)
