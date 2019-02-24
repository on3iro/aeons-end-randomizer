import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'

const ShuffleButton = withStyles({
  root: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 10,
  }
})(Fab)

export default ShuffleButton
