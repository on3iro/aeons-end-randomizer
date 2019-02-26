import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import { withStyles } from '@material-ui/core/styles'

import {
  ITurnOrderCard
} from '../../../config/types'

import TurnOrderTableRow from './TurnOrderTableRow'
import turnOrderStyles from './turnOrderStyles'


const renderTableRows = (
  cards: ITurnOrderCard[],
  handlers: {
    addToTop: (id: string) => void,
    addToBottom: (id: string) => void,
    shuffleIntoDeck: (id: string) => void
  },
  classes: any
) => cards.map((card, i) => (
  <TurnOrderTableRow 
    key={i}
    card={card}
    handlers={handlers}
    classes={classes}
  />
))

const TurnOrderTable = React.memo(({ cards, handlers, classes }: {
  cards: ITurnOrderCard[],
  handlers: {
    addToTop: (id: string) => void,
    addToBottom: (id: string) => void,
    shuffleIntoDeck: (id: string) => void
  },
  classes: any
}) => (
 <Table className={classes.cardTable}>
   <TableBody>
     { renderTableRows(cards, handlers, classes) }
   </TableBody>
 </Table>
))

export default withStyles(turnOrderStyles)(TurnOrderTable)
