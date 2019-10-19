import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from '../../../../../../Redux/Store'
import * as types from '../../../../../../types'

import ListWrapper from '../../../../../molecules/ListWrapper'

import Checkbox from './Checkbox'

export type SelectedNemesis = types.Nemesis & { selected: boolean }
export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: SelectedNemesis[],
  changeHandler: ChangeHandler
) =>
  items.map(item => (
    <Checkbox key={item.id} nemesis={item} changeHandler={changeHandler} />
  ))

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
    return (
      <React.Fragment>
        <ListWrapper label="Nemeses">
          <React.Fragment>
            {renderCheckboxes(selectedNemeses, handleNemesisChange)}
          </React.Fragment>
        </ListWrapper>
      </React.Fragment>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nemeses)
