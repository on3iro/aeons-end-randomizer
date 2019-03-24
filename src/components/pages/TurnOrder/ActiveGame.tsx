import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'

import { ITurnOrderCard } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as TurnOrderGame from '../../../Redux/Store/TurnOrder/ActiveGame'
import * as TurnOrderConfig from '../../../Redux/Store/TurnOrder/Configuration'

import ShuffleButton from '../../ShuffleButton'

import DiscardTable from './DiscardTable'

const mapStateToProps = (state: RootState) => ({
  deck: TurnOrderGame.selectors.getDeck(state),
  availableCards: TurnOrderConfig.selectors.getAvailableCards(state),
})

const mapDispatchToProps = {
  resetGame: TurnOrderGame.actions.resetGame,
  drawCard: TurnOrderGame.actions.draw,
  newRound: TurnOrderGame.actions.newRound,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ActiveTurnOrder = React.memo(
  ({ availableCards, deck, resetGame, newRound, drawCard }: Props) => (
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
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveTurnOrder)
