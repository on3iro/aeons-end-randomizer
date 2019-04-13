import React from 'react'
import { connect } from 'react-redux'

import TableBody from '@material-ui/core/TableBody'

import { ITurnOrderCard } from '../../../../types'
import { RootState, selectors } from '../../../../Redux/Store'

import Row from './Row'
import Table from './Table'

const renderRows = (discard: ITurnOrderCard[]) =>
  discard.map((card, i) => <Row key={i} card={card} />)

const mapStateToProps = (state: RootState) => ({
  discard: selectors.TurnOrder.ActiveGame.getDiscard(state),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const DiscardTable = React.memo(({ discard }: Props) => (
  <Table>
    <TableBody>{renderRows(discard)}</TableBody>
  </Table>
))

DiscardTable.displayName = 'DiscardTable'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscardTable)
