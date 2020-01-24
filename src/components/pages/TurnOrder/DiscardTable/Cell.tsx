import styled from 'styled-components/macro'
import MuiTableCell from '@material-ui/core/TableCell'

const Cell = styled(MuiTableCell)`
  padding: 4px 8px;
  font-weight: ${props => props.theme.typography['text'].fontWeight};
  font-size: ${props => props.theme.typography['text'].fontSize};
  line-height: ${props => props.theme.typography['text'].lineHeight};
  letter-spacing: ${props => props.theme.typography['text'].letterSpacing};

  &:first-child {
    padding-left: 16px;
  }

  &:last-child {
    padding-right: 8px;
  }
`

Cell.displayName = 'Cell'

export default Cell
