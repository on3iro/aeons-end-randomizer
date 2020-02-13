import styled from 'styled-components/macro'

const Wrapper = styled('div')`
  box-shadow: ${props => props.theme.components.expansionPanel.boxShadow};
  background: ${props => props.theme.components.expansionPanel.backgroundColor};
  border-radius: ${props => props.theme.components.expansionPanel.borderRadius};
`

export default Wrapper
