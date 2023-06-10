import React from 'react'
import { connect } from 'react-redux'
import * as types from 'aer-types/types'

import { RootState, selectors, actions } from 'Redux/Store'

import ListWrapper from 'components/molecules/ListWrapper'

import Checkbox from './Checkbox'

export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: types.Nemesis[],
  changeHandler: ChangeHandler
) =>
  items.map((item) => (
    <Checkbox key={item.id} nemesis={item} changeHandler={changeHandler} />
  ))

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedNemeses: selectors.Settings.Expansions.Nemeses.getNemesesByExpansionId(
    state,
    props
  ),
})

const mapDispatchToProps = {
  handleNemesisChange: actions.Settings.Expansions.Nemeses.selected.toggle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Nemeses = ({ selectedNemeses, handleNemesisChange }: Props) => {
  return (
    <React.Fragment>
      {selectedNemeses.length > 0 && (
        <ListWrapper label="Nemeses">
          <React.Fragment>
            {renderCheckboxes(selectedNemeses, handleNemesisChange)}
          </React.Fragment>
        </ListWrapper>
      )}
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Nemeses))
