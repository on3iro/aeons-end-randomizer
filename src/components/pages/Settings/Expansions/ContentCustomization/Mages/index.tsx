import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from '../../../../../../Redux/Store'
import * as types from '../../../../../../types'

import ListWrapper from '../../../../../molecules/ListWrapper'

import Checkbox from './Checkbox'

export type SelectedMage = types.Mage & { selected: boolean }
export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: SelectedMage[],
  changeHandler: ChangeHandler
) =>
  items.map(item => (
    <Checkbox key={item.id} mage={item} changeHandler={changeHandler} />
  ))

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
  return (
    <React.Fragment>
      <ListWrapper label="Mages">
        <React.Fragment>
          {renderCheckboxes(selectedMages, handleMageChange)}
        </React.Fragment>
      </ListWrapper>
    </React.Fragment>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mages)
