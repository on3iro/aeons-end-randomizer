import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'

import ExpansionList, { ChangeHandler } from './ExpansionList'

const mapStateToProps = (state: RootState) => ({
  standalones: selectors.Settings.Expansions.Expansions.getStandaloneExpansions(
    state
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    handleChange: ChangeHandler
  }

const Standalones = ({ standalones, handleChange }: Props) => (
  <ExpansionList
    label="Standalone Expansions"
    expansions={standalones}
    handleChange={handleChange}
  />
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Standalones))
