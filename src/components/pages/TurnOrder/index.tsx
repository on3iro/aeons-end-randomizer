import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '../../../Redux/Store'
import * as TurnOrderGame from '../../../Redux/Store/TurnOrder/ActiveGame'

import ActiveGame from './ActiveGame'
import TurnOrderConfiguration from './TurnOrderConfiguration'

const TurnOrder = React.memo(
  ({ gameHasStarted }: { gameHasStarted: boolean }) => (
    <React.Fragment>
      {gameHasStarted ? <ActiveGame /> : <TurnOrderConfiguration />}
    </React.Fragment>
  )
)

const mapStateToProps = (state: RootState) => ({
  gameHasStarted: TurnOrderGame.selectors.getHasStarted(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TurnOrder)
