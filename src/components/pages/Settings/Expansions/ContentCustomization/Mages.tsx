import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from '../../../../../Redux/Store'
import { useModal } from '../../../../Modal'
import * as types from '../../../../../types'

import CheckboxWithDetails from './CheckboxWithDetails'
import CheckboxList from '../../../../CheckboxList'
import MageModal from '../../../Mages/MageModal'

const entitiesToItems = (
  entities: ReadonlyArray<types.Mage & { selected: boolean }>,
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
  selectedMages: selectors.Settings.Expansions.SelectedMages.getMagesByExpansionId(
    state,
    props.expansionId
  ),
})

const mapDispatchToProps = {
  handleMageChange: actions.Settings.Expansions.SelectedMages.toggleMage,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Mages = React.memo(({ selectedMages, handleMageChange }: Props) => {
  const { show: showMageModal, renderModal: renderMageModal } = useModal()
  const [modalContentId, setModalContentId] = useState<string>('')

  const CheckboxComponent = useCallback(
    ({ checked, item, label, changeHandler }) => {
      const handleMageDetails = (mageId: string) => {
        showMageModal()
        setModalContentId(mageId)
      }

      return (
        <CheckboxWithDetails
          id={item.id}
          checked={checked}
          item={item.id}
          label={label}
          changeHandler={changeHandler}
          showDetails={handleMageDetails}
        />
      )
    },
    [showMageModal]
  )

  return (
    <React.Fragment>
      <CheckboxList
        label="Mages"
        items={entitiesToItems(selectedMages)}
        Component={CheckboxComponent}
        changeHandler={handleMageChange}
      />
      <MageModal id={modalContentId} renderModal={renderMageModal} />
    </React.Fragment>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mages)
