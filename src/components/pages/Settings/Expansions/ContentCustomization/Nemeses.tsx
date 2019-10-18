import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from '../../../../../Redux/Store'
import { useModal } from '../../../../../hooks/useModal'
import * as types from '../../../../../types'

import CheckboxWithDetails from './CheckboxWithDetails'
import CheckboxList from '../../../../molecules/CheckboxList'
import NemesisModal from '../../../../molecules/NemesisModal'

const entitiesToItems = (
  entities: ReadonlyArray<types.Nemesis & { selected: boolean }>,
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
  selectedNemeses: selectors.Settings.Expansions.SelectedNemeses.getNemesesByExpansionId(
    state,
    props.expansionId
  ),
})

const mapDispatchToProps = {
  handleNemesisChange:
    actions.Settings.Expansions.SelectedNemeses.toggleNemesis,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Nemeses = React.memo(
  ({ selectedNemeses, handleNemesisChange }: Props) => {
    const {
      show: showNemesisModal,
      RenderModal: RenderNemesisModal,
    } = useModal()
    const [modalContentId, setModalContentId] = useState<string>('')

    const CheckboxComponent = useCallback(
      ({ checked, item, label, changeHandler }) => {
        const handleNemesisDetails = (nemesisId: string) => {
          showNemesisModal()
          setModalContentId(nemesisId)
        }

        return (
          <CheckboxWithDetails
            id={item.id}
            checked={checked}
            label={label}
            changeHandler={changeHandler}
            showDetails={handleNemesisDetails}
          />
        )
      },
      [showNemesisModal]
    )

    return (
      <React.Fragment>
        <CheckboxList
          label="Nemeses"
          items={entitiesToItems(selectedNemeses)}
          Component={CheckboxComponent}
          changeHandler={handleNemesisChange}
        />
        <NemesisModal id={modalContentId} RenderModal={RenderNemesisModal} />
      </React.Fragment>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nemeses)
