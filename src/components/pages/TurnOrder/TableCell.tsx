import { withStyles } from '@material-ui/core/styles'
import MuiTableCell from '@material-ui/core/TableCell'

const TableCell = withStyles({
    root: {
      padding: '4px 8px',
      '&:first-child': {
        paddingLeft: 16
      },
      '&:last-child': {
        paddingRight: 8
      },
    }
})(MuiTableCell)

export default TableCell
