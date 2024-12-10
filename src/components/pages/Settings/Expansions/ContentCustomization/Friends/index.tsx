import React from 'react'
import { connect } from 'react-redux'
import * as types from 'aer-types/types'

import { RootState, selectors, actions } from 'Redux/Store'

import ListWrapper from 'components/molecules/ListWrapper'

import Checkbox from './Checkbox'

export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: types.Friend[],
  changeHandler: ChangeHandler
) =>
  items.map((item) => (
    <Checkbox key={item.id} friend={item} changeHandler={changeHandler} />
  ))

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedFriends: selectors.Settings.Expansions.Friends.getFriendsByExpansionId(
    state,
    props
  ),
})

const mapDispatchToProps = {
  handleFriendChange: actions.Settings.Expansions.Friends.selected.toggle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Friends = ({ selectedFriends, handleFriendChange }: Props) => {
  return (
    <React.Fragment>
      {selectedFriends.length > 0 && (
        <ListWrapper label="Friends">
          <React.Fragment>
            {renderCheckboxes(selectedFriends, handleFriendChange)}
          </React.Fragment>
        </ListWrapper>
      )}
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Friends))
