import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

const DiscardTableCell = withStyles({
    root: {
      padding: '4px 8px',
      '&:first-child': {
        paddingLeft: 16
      },
      '&:last-child': {
        paddingRight: 8
      },
    }
})(TableCell)

export default DiscardTableCell
