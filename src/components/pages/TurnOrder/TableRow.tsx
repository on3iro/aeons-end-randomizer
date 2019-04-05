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

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  addToTop: TurnOrderGame.actions.addToTop,
  addToBottom: TurnOrderGame.actions.addToBottom,
  shuffleIntoDeck: TurnOrderGame.actions.shuffleIntoDeck,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    card: ITurnOrderCard
    classes: any
  }

const TableRow = React.memo(
  ({ card, addToTop, addToBottom, shuffleIntoDeck, classes }: Props) => (
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

TableRow.displayName = 'TableRow'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableRow)
