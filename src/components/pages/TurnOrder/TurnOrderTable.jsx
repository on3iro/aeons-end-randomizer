import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import { Loop, Publish, GetApp } from '@material-ui/icons'

import TurnOrderTableCell from './TurnOrderTableCell'

const renderTableRows = (cards, handlers) => cards.map((card, i) => (
  <TableRow key={i}>
    <TurnOrderTableCell>
      <Typography component='p'>{card.name}</Typography>
    </TurnOrderTableCell>
    <TurnOrderTableCell align="center">
      <IconButton
        aria-label="Add to top" 
        title="Add to top" 
        onClick={() => handlers.addToTop(card.id)}
      >
        <Publish fontSize="small" />
      </IconButton>
    </TurnOrderTableCell>
    <TurnOrderTableCell align="center">
      <IconButton 
        aria-label="Add to bottom"
        title="Add to bottom"
        onClick={() => handlers.addToBottom(card.id)}
      >
        <GetApp fontSize="small" />
      </IconButton>
    </TurnOrderTableCell>
    <TurnOrderTableCell align="center">
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

const TurnOrderTable = ({ cards, handlers }) => (
 <Table>
   <TableBody>
     { renderTableRows(cards, handlers) }
   </TableBody>
 </Table>
)

export default TurnOrderTable
