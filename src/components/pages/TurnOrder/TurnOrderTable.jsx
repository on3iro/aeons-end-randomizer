import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import { withStyles } from '@material-ui/core/styles'

import TurnOrderTableRow from './TurnOrderTableRow'
import turnOrderStyles from './turnOrderStyles'


const renderTableRows = (cards, handlers, classes) => cards.map((card, i) => (
  <TurnOrderTableRow 
    key={i}
    card={card}
    handlers={handlers}
    classes={classes}
  />
))

const TurnOrderTable = React.memo(({ cards, handlers, classes }) => (
 <Table className={classes.cardTable}>
   <TableBody>
     { renderTableRows(cards, handlers, classes) }
   </TableBody>
 </Table>
))

export default withStyles(turnOrderStyles)(TurnOrderTable)
