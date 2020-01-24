import React from 'react'
import { connect } from 'react-redux'

import IconButton from '@material-ui/core/IconButton'
import { Loop, Publish, GetApp } from '@material-ui/icons'

import { ITurnOrderCard } from '../../../../types'
import { RootState, actions } from '../../../../Redux/Store'

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

const Row = React.memo(
  ({ card, addToTop, addToBottom, shuffleIntoDeck }: Props) => (
    <RowWrapper type={card.type}>
      <Cell>{card.name}</Cell>
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
)

Row.displayName = 'Row'

export default connect(mapStateToProps, mapDispatchToProps)(Row)
