import React from 'react'
import { connect } from 'react-redux'
import * as types from 'aer-types/types'

import { RootState, selectors, actions } from 'Redux/Store'

import ListWrapper from 'components/molecules/ListWrapper'

import Checkbox from './Checkbox'

export type ChangeHandler = (id: string) => void

const renderCheckboxes = (items: types.Mage[], changeHandler: ChangeHandler) =>
  items.map((item) => (
    <Checkbox key={item.id} mage={item} changeHandler={changeHandler} />
  ))

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedMages: selectors.Settings.Expansions.Mages.getMagesByExpansionId(
    state,
    props
  ),
})

const mapDispatchToProps = {
  handleMageChange: actions.Settings.Expansions.Mages.selected.toggle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Mages = ({ selectedMages, handleMageChange }: Props) => {
  return (
    <React.Fragment>
      {selectedMages.length > 0 && (
        <ListWrapper label="Mages">
          <React.Fragment>
            {renderCheckboxes(selectedMages, handleMageChange)}
          </React.Fragment>
        </ListWrapper>
      )}
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Mages))
