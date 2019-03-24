import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'

const StyledExpansionPanel = withStyles({
  root: {
    borderRadius: 4,
    '&:before': {
      display: 'none',
    },
    marginBottom: '15px',
  },
  expanded: {
    margin: 'auto auto 15px',
  },
})(ExpansionPanel)

StyledExpansionPanel.displayName = 'StyledExpansionPanel'

export default StyledExpansionPanel
