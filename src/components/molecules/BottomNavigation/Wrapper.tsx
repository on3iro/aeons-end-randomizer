import styled from 'styled-components'

import { withTheme } from 'styled-components/macro'

const Wrapper = styled('div')`
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  padding: 0;
  background: ${props => props.theme.colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 56px;
  border-top: 2px solid #e6e6e6;
`

export default withTheme(Wrapper)
