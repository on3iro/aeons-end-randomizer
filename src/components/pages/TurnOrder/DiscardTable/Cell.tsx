import styled from 'styled-components/macro'
import MuiTableCell from '@material-ui/core/TableCell'

const Cell = styled(MuiTableCell)`
  padding: 4px 8px;

  &:first-child {
    padding-left: 16px;
  }

  &:last-child {
    padding-right: 8px;
  }
`

Cell.displayName = 'Cell'

export default Cell
