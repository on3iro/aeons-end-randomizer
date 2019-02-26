import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import { Loop, Publish, GetApp } from '@material-ui/icons'

import {
  ITurnOrderCard
} from '../../../config/types'

import TurnOrderTableCell from './TurnOrderTableCell'

const TurnOrderTableRow = React.memo(({
  card,
  handlers,
  classes
}: {
  card: ITurnOrderCard,
  handlers: {
    addToTop: (id: string) => void,
    addToBottom: (id: string) => void,
    shuffleIntoDeck: (id: string) => void
  },
  classes: any
}) => (
  <TableRow className={`${classes.cardRow} ${classes[card.cssClass]}`}>
    <TurnOrderTableCell>
      <Typography component='p'>{card.name}</Typography>
    </TurnOrderTableCell>
    <TurnOrderTableCell align="right">
      <IconButton
        aria-label="Add to top" 
        title="Add to top" 
        onClick={() => handlers.addToTop(card.id)}
      >
        <Publish fontSize="small" />
      </IconButton>
    </TurnOrderTableCell>
    <TurnOrderTableCell align="right">
      <IconButton 
        aria-label="Add to bottom"
        title="Add to bottom"
        onClick={() => handlers.addToBottom(card.id)}
      >
        <GetApp fontSize="small" />
      </IconButton>
    </TurnOrderTableCell>
    <TurnOrderTableCell align="right">
      <IconButton 
        aria-label="Shuffle into Turn Order Deck"
        title="Shuffle into Turn Order Deck"
        onClick={() => handlers.shuffleIntoDeck(card.id)}
      >
        <Loop fontSize="small" />
      </IconButton>
    </TurnOrderTableCell>
  </TableRow>
))

export default TurnOrderTableRow
