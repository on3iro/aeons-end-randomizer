import styled from 'styled-components/macro'
import IconButton from '@material-ui/core/IconButton'

type Props = {
  drawerIsOpen: boolean
}

const MenuButton = styled(IconButton)<Props>`
  margin-left: 12px;
  margin-right: 20px;

  color: #fff;

  ${props => (props.drawerIsOpen ? `display: none;` : '')}
`

export default MenuButton
