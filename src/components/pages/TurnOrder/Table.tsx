import React from 'react'

import MuiTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import { withStyles } from '@material-ui/core/styles'

import {
  ITurnOrderCard
} from '../../../config/types'

import TableRow from './TableRow'
import styles from './styles'
import { TurnOrderAction } from './hooks/TurnOrderStateReducer'


const renderTableRows = (
  cards: ITurnOrderCard[],
  dispatch: (action: TurnOrderAction) => void,
  classes: any
) => cards.map((card, i) => (
  <TableRow 
    key={i}
    card={card}
    dispatch={dispatch}
    classes={classes}
  />
))

const Table = React.memo(({ cards, dispatch, classes }: {
  cards: ITurnOrderCard[],
  dispatch: (action: TurnOrderAction) => void,
  classes: any
}) => (
 <MuiTable className={classes.cardTable}>
   <TableBody>
     { renderTableRows(cards, dispatch, classes) }
   </TableBody>
 </MuiTable>
))

export default withStyles(styles)(Table)
