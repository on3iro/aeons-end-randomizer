import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'
import { formatExpansionName } from 'helpers'

import CheckboxWithControls from '../../../../../molecules/CheckboxWithControls'

import { ChangeHandler } from './index'
import { RootState, selectors } from 'Redux/Store'

type OwnProps = {
  expansion: types.Expansion
  changeHandler: ChangeHandler
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    selected: selectors.Settings.Expansions.Expansions.selected.getIsSelected(
      state,
      { expansionId: ownProps.expansion.id }
    ),
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Checkbox = ({ expansion, changeHandler, selected }: Props) => {
  const handleChange = useCallback(
    (id: string) => {
      changeHandler(id)
    },
    [changeHandler]
  )

  return (
    <React.Fragment>
      <CheckboxWithControls
        id={expansion.id}
        checked={selected}
        label={formatExpansionName(expansion)}
        changeHandler={handleChange}
      />
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Checkbox))
