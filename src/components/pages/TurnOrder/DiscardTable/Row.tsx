import React from 'react'
import { connect } from 'react-redux'

import IconButton from 'components/atoms/IconButton'
import Typography from '@material-ui/core/Typography'
import { Loop, Publish, GetApp } from '@material-ui/icons'
import { ITurnOrderCard } from 'aer-types/types'

import { RootState, actions } from 'Redux/Store'

import Cell from './Cell'
import RowWrapper from './RowWrapper'

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  addToTop: actions.TurnOrder.ActiveGame.addToTop,
  addToBottom: actions.TurnOrder.ActiveGame.addToBottom,
  shuffleIntoDeck: actions.TurnOrder.ActiveGame.shuffleIntoDeck,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    card: ITurnOrderCard
  }

const Row = ({ card, addToTop, addToBottom, shuffleIntoDeck }: Props) => (
  <RowWrapper type={card.type}>
    <Cell>
      <Typography component="p">{card.name}</Typography>
    </Cell>
    <Cell align="right">
      <IconButton
        aria-label="Add to top"
        title="Add to top"
        onClick={() => addToTop(card.id)}
      >
        <Publish fontSize="small" />
      </IconButton>
    </Cell>
    <Cell align="right">
      <IconButton
        aria-label="Add to bottom"
        title="Add to bottom"
        onClick={() => addToBottom(card.id)}
      >
        <GetApp fontSize="small" />
      </IconButton>
    </Cell>
    <Cell align="right">
      <IconButton
        aria-label="Shuffle into Turn Order Deck"
        title="Shuffle into Turn Order Deck"
        onClick={() => shuffleIntoDeck(card.id)}
      >
        <Loop fontSize="small" />
      </IconButton>
    </Cell>
  </RowWrapper>
)

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Row))
