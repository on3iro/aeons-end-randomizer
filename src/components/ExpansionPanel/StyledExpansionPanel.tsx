import styled from 'styled-components/macro'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'

const StyledExpansionPanel = styled(ExpansionPanel)`
  border-radius: 4px;
  margin-bottom: 15px;

  &:before {
    display: none;
  }
`

StyledExpansionPanel.displayName = 'StyledExpansionPanel'

export default StyledExpansionPanel
