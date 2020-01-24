import styled from 'styled-components/macro'

import RouterLink from 'components/atoms/Link/_styled_/RouterLink'

const Link = styled(RouterLink)`
  width: 100%;
  padding: 11px 16px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text.primary};
  transition: background-color 0.2s ease;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.gray[8]};
    color: ${props => props.theme.colors.text.primary};
  }
`

export default Link
