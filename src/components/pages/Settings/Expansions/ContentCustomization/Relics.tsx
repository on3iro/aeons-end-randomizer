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
  selectedRelics: selectors.Settings.Expansions.SelectedCards.getRelicsByExpansionId(
    state,
    props.expansionId
  ),
})

const mapDispatchToProps = {
  handleRelicChange: actions.Settings.Expansions.SelectedCards.toggleCard,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Relics = React.memo(({ selectedRelics, handleRelicChange }: Props) => {
  const { show: showRelicModal, renderModal: renderCardModal } = useModal()
  const [modalContentId, setModalContentId] = useState<string>('')

  const CheckboxComponent = useCallback(
    ({ checked, item, label, changeHandler }) => {
      const handleRelicDetails = (relicId: string) => {
        showRelicModal()
        setModalContentId(relicId)
      }

      return (
        <CheckboxWithDetails
          id={item.id}
          checked={checked}
          item={item.id}
          label={label}
          changeHandler={changeHandler}
          showDetails={handleRelicDetails}
        />
      )
    },
    [showRelicModal]
  )

  return (
    <React.Fragment>
      <CheckboxList
        label="Relics"
        items={entitiesToItems(selectedRelics)}
        Component={CheckboxComponent}
        changeHandler={handleRelicChange}
      />
      <SupplyModal id={modalContentId} renderModal={renderCardModal} />
    </React.Fragment>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Relics)
