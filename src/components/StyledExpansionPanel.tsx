import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

const StyledExpansionPanel = withStyles({
  root: {
    borderRadius: 4,
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(ExpansionPanel);

export default StyledExpansionPanel
