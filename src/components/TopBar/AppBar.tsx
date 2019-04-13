import styled, { css } from 'styled-components/macro'
import MuiAppBar from '@material-ui/core/AppBar'

type Props = {
  drawerIsOpen: boolean
}

const openDrawerMixin = css`
  width: calc(100% - ${props => props.theme.drawerWidth}px);
  margin-left: ${props => props.theme.drawerWidth}px;
  transition: ${props => props.theme.muiTransitions.appBarShift};
`

const AppBar = styled(MuiAppBar)<Props>`
  position: fixed;

  ${props => (props.drawerIsOpen ? openDrawerMixin : '')}
`

export default AppBar
