import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  theme: any
}

const RouterLink = styled(props => <Link {...props} />)<Props>`
  color: ${props => props.theme.colors.primary.main};
  transition: color 0.2s ease;
  text-decoration: none;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.primary.light};
  }
`

export default RouterLink
