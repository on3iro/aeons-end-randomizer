import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

const AoeExpansionPanel = withStyles({
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

export default AoeExpansionPanel
