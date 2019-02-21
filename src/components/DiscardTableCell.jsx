import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

const DiscardTableCell = withStyles({
    root: {
        padding: '4px'
    }
})(TableCell)

export default DiscardTableCell