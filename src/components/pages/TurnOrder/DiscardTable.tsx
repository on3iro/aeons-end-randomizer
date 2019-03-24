import React from 'react'
import { connect } from 'react-redux'

import MuiTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import { withStyles } from '@material-ui/core/styles'

import { ITurnOrderCard } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as TurnOrderGame from '../../../Redux/Store/TurnOrder/ActiveGame'

import TableRow from './TableRow'
import styles from './styles'

const renderTableRows = (discard: ITurnOrderCard[], classes: any) =>
  discard.map((card, i) => <TableRow key={i} card={card} classes={classes} />)

const mapStateToProps = (state: RootState) => ({
  discard: TurnOrderGame.selectors.getDiscard(state),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    classes: any
  }

const DiscardTable = React.memo(({ discard, classes }: Props) => (
  <MuiTable className={classes.cardTable}>
    <TableBody>{renderTableRows(discard, classes)}</TableBody>
  </MuiTable>
))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DiscardTable))
