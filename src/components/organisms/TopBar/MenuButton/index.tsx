import React from 'react'
import styled from 'styled-components/macro'
import MuiIconButton from 'components/atoms/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

type WrapperProps = {
  drawerIsOpen: boolean
}

const Wrapper = styled('div')<WrapperProps>`
  margin-left: 12px;
  margin-right: 20px;

  color: #fff;

  ${props => (props.drawerIsOpen ? `display: none;` : '')}
`

const IconButton = styled(MuiIconButton)`
  color: #fff;
`

type Props = {
  drawerIsOpen: boolean
  onClick: () => void
}

const MenuButton = ({ drawerIsOpen, onClick }: Props) => (
  <Wrapper drawerIsOpen={drawerIsOpen}>
    <IconButton aria-label="Menu" onClick={onClick}>
      <MenuIcon />
    </IconButton>
  </Wrapper>
)

export default MenuButton
