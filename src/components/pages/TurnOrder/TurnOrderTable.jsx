import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'

import TurnOrderTableRow from './TurnOrderTableRow'

const renderTableRows = (cards, handlers) => cards.map((card, i) => (
  <TurnOrderTableRow 
    key={i}
    card={card}
    handlers={handlers}
  />
))

const TurnOrderTable = React.memo(({ cards, handlers }) => (
 <Table>
   <TableBody>
     { renderTableRows(cards, handlers) }
   </TableBody>
 </Table>
))

export default TurnOrderTable
