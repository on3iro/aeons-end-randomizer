import styled, { css } from 'styled-components/macro'

type Props = {
  drawerIsOpen: boolean
  isLoading: boolean
}

const openDrawerMixin = css`
  margin-left: 0;
  transition: ${props => props.theme.muiTransitions.contentShift};
`

const Wrapper = styled('div')<Props>`
  flex-grow: 1;
  padding: ${props => props.theme.spacing.unit * 3}px;
  margin-left: -${props => props.theme.drawerWidth}px;
  transition: ${props => props.theme.muiTransitions.content};

  ${props => (props.drawerIsOpen ? openDrawerMixin : '')}

  ${props =>
    props.isLoading
      ? `
      text-align: center;
      padding-top: 150px;
    `
      : ''}
`

export default Wrapper
