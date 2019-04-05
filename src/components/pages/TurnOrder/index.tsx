import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '../../../Redux/Store'
import * as TurnOrderGame from '../../../Redux/Store/TurnOrder/ActiveGame'

import ActiveGame from './ActiveGame'
import TurnOrderConfiguration from './TurnOrderConfiguration'

const mapStateToProps = (state: RootState) => ({
  gameHasStarted: TurnOrderGame.selectors.getHasStarted(state),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    gameHasStarted: boolean
  }

const TurnOrder = React.memo(({ gameHasStarted }: Props) => (
  <React.Fragment>
    {gameHasStarted ? <ActiveGame /> : <TurnOrderConfiguration />}
  </React.Fragment>
))

TurnOrder.displayName = 'TurnOrder'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TurnOrder)
