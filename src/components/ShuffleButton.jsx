import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'

const ShuffleButton = withStyles({
  root: {
    position: 'absolute',
    bottom: '30px',
    right: '30px'
  }
})(Fab)

export default ShuffleButton
