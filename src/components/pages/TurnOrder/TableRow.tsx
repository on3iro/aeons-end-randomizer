import React from 'react'
import { connect } from 'react-redux'

import IconButton from '@material-ui/core/IconButton'
import MuiTableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import { Loop, Publish, GetApp } from '@material-ui/icons'

import { ITurnOrderCard } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as TurnOrderGame from '../../../Redux/Store/TurnOrder/ActiveGame'

import TableCell from './TableCell'

const TableRow = React.memo(
  ({
    card,
    addToTop,
    addToBottom,
    shuffleIntoDeck,
    classes,
  }: {
    card: ITurnOrderCard
    addToTop: (cardId: string) => TurnOrderGame.Action
    addToBottom: (cardId: string) => TurnOrderGame.Action
    shuffleIntoDeck: (cardId: string) => TurnOrderGame.Action
    classes: any
  }) => (
    <MuiTableRow className={`${classes.cardRow} ${classes[card.cssClass]}`}>
      <TableCell>
        <Typography component="p">{card.name}</Typography>
      </TableCell>
      <TableCell align="right">
        <IconButton
          aria-label="Add to top"
          title="Add to top"
          onClick={() => addToTop(card.id)}
        >
          <Publish fontSize="small" />
        </IconButton>
      </TableCell>
      <TableCell align="right">
        <IconButton
          aria-label="Add to bottom"
          title="Add to bottom"
          onClick={() => addToBottom(card.id)}
        >
          <GetApp fontSize="small" />
        </IconButton>
      </TableCell>
      <TableCell align="right">
        <IconButton
          aria-label="Shuffle into Turn Order Deck"
          title="Shuffle into Turn Order Deck"
          onClick={() => shuffleIntoDeck(card.id)}
        >
          <Loop fontSize="small" />
        </IconButton>
      </TableCell>
    </MuiTableRow>
  )
)

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  addToTop: TurnOrderGame.actions.addToTop,
  addToBottom: TurnOrderGame.actions.addToBottom,
  shuffleIntoDeck: TurnOrderGame.actions.shuffleIntoDeck,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableRow)
