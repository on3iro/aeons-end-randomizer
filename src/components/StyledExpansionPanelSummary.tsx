import { withStyles } from '@material-ui/core/styles'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const StyledExpansionPanelSummary = withStyles({
  root: {
    minHeight: 48,
    '&$expanded': {
      minHeight: 48,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(ExpansionPanelSummary);

export default StyledExpansionPanelSummary
