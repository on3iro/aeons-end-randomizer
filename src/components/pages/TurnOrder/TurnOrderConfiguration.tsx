import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'

import { ITurnOrderSetup, ITurnOrderCard } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as TurnOrderConfig from '../../../Redux/Store/TurnOrder/Configuration'
import * as TurnOrderGame from '../../../Redux/Store/TurnOrder/ActiveGame'

import ShuffleButton from '../../ShuffleButton'
import turnOrderStyles from './styles'
import CardNameDisplay from './CardNameDisplay'
import ModeSelection from './ModeSelection'
import SetupSelection from './SetupSelection'

const TurnOrderConfiguration = React.memo(
  ({
    currentConfiguration,
    startGame,
    classes,
  }: {
    currentConfiguration: ITurnOrderSetup
    startGame: (deck: ITurnOrderCard[]) => TurnOrderGame.Action
    classes: any
  }) => (
    <React.Fragment>
      <SetupSelection />
      <ModeSelection classes={classes} />
      <CardNameDisplay
        classes={classes}
        turnOrderSetup={currentConfiguration}
      />
      <ShuffleButton
        color="primary"
        variant="extended"
        onClick={() => startGame(currentConfiguration.turnOrderCards)}
      >
        Start Game
      </ShuffleButton>
    </React.Fragment>
  )
)

const mapStateToProps = (state: RootState) => ({
  currentConfiguration: TurnOrderConfig.selectors.getConfiguration(state),
})

const mapDispatchToProps = {
  startGame: TurnOrderGame.actions.startGame,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(turnOrderStyles)(TurnOrderConfiguration))
