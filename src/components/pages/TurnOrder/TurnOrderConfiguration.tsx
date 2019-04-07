import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import { RootState, actions, selectors } from '../../../Redux/Store'

import turnOrderStyles from './styles'
import ShuffleButton from '../../ShuffleButton'
import CardNameDisplay from './CardNameDisplay'
import ModeSelection from './ModeSelection'
import PlayerCountSelection from './PlayerCountSelection'
import SetupSelection from './SetupSelection'

const mapStateToProps = (state: RootState) => ({
  currentConfiguration: selectors.TurnOrder.Configuration.getConfiguration(
    state
  ),
  selectedPlayerCount: selectors.TurnOrder.Configuration.getSelectedPlayerCount(
    state
  ),
})

const mapDispatchToProps = {
  startGame: actions.TurnOrder.ActiveGame.startGame,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    classes: any
  }

const TurnOrderConfiguration = React.memo(
  ({
    currentConfiguration,
    startGame,
    selectedPlayerCount,
    classes,
  }: Props) => {
    const availableVariations = Object.keys(selectedPlayerCount.variations).map(
      key => [selectedPlayerCount.variations[key]]
    )

    const hasMoreThanOneVariant: boolean = availableVariations.length > 1

    return (
      <React.Fragment>
        <PlayerCountSelection />
        {hasMoreThanOneVariant ? <SetupSelection classes={classes} /> : null}
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
  }
)

TurnOrderConfiguration.displayName = 'TurnOrderConfiguration'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(turnOrderStyles)(TurnOrderConfiguration))
