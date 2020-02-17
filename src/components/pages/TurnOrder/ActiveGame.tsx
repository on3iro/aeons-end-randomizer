import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'

import { RootState, selectors, actions } from '../../../Redux/Store'

import ShuffleButton from '../../atoms/ShuffleButton'

import DiscardTable from './DiscardTable'

const mapStateToProps = (state: RootState) => ({
  deck: selectors.TurnOrder.ActiveGame.getDeck(state),
  availableCards: selectors.TurnOrder.Configuration.getAvailableCards(state),
})

const mapDispatchToProps = {
  resetGame: actions.TurnOrder.ActiveGame.resetGame,
  drawCard: actions.TurnOrder.ActiveGame.draw,
  newRound: actions.TurnOrder.ActiveGame.newRound,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ActiveTurnOrder = ({
  availableCards,
  deck,
  resetGame,
  newRound,
  drawCard,
}: Props) => (
  <React.Fragment>
    {deck.length === 0 ? (
      <Button
        size="large"
        variant="contained"
        color="secondary"
        onClick={() => newRound(availableCards)}
      >
        New Round
      </Button>
    ) : (
      <Button
        size="large"
        variant="contained"
        color="secondary"
        onClick={drawCard}
      >
        Draw a card
      </Button>
    )}

    <DiscardTable />

    <ShuffleButton color="primary" variant="extended" onClick={resetGame}>
      Reset Game
    </ShuffleButton>
  </React.Fragment>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ActiveTurnOrder))
