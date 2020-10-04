import React from 'react'
import { connect } from 'react-redux'

import TableBody from '@material-ui/core/TableBody'
import { ITurnOrderCard } from 'aer-types/types'

import { RootState, selectors } from 'Redux/Store'

import Row from './Row'
import Table from './Table'

const renderRows = (discard: ITurnOrderCard[]) =>
  discard.map((card, i) => {
    if (card.display === false) {
      return null
    }

    return <Row key={i} card={card} />
  })

const mapStateToProps = (state: RootState) => ({
  discard: selectors.TurnOrder.ActiveGame.getDiscard(state),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const DiscardTable = ({ discard }: Props) => (
  <Table>
    <TableBody>{renderRows(discard)}</TableBody>
  </Table>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(DiscardTable))
