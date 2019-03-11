import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import MuiTableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import { Loop, Publish, GetApp } from '@material-ui/icons'

import {
  ITurnOrderCard
} from '../../../config/types'

import TableCell from './TableCell'
import { TurnOrderAction } from './hooks/TurnOrderStateReducer'

const TableRow = React.memo(({
  card,
  dispatch,
  classes
}: {
  card: ITurnOrderCard,
  dispatch: (action: TurnOrderAction) => void,
  classes: any
}) => (
  <MuiTableRow className={`${classes.cardRow} ${classes[card.cssClass]}`}>
    <TableCell>
      <Typography component='p'>{card.name}</Typography>
    </TableCell>
    <TableCell align="right">
      <IconButton
        aria-label="Add to top" 
        title="Add to top" 
        onClick={() => dispatch({ type: 'ADD_TO_TOP', payload: card.id })}
      >
        <Publish fontSize="small" />
      </IconButton>
    </TableCell>
    <TableCell align="right">
      <IconButton 
        aria-label="Add to bottom"
        title="Add to bottom"
        onClick={() => dispatch({ type: 'ADD_TO_BOTTOM', payload: card.id })}
      >
        <GetApp fontSize="small" />
      </IconButton>
    </TableCell>
    <TableCell align="right">
      <IconButton 
        aria-label="Shuffle into Turn Order Deck"
        title="Shuffle into Turn Order Deck"
        onClick={() => dispatch({ type: 'SHUFFLE_INTO_DECK', payload: card.id })}
      >
        <Loop fontSize="small" />
      </IconButton>
    </TableCell>
  </MuiTableRow>
))

export default TableRow
