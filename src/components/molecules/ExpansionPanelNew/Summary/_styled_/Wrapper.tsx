import styled from 'styled-components'

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: relative;
  height: ${props => props.theme.components.expansionPanel.summary.height};
  outline: 0;
  cursor: pointer;
  user-select: none;
`

export default Wrapper
