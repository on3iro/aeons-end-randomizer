import styled from 'styled-components'

import { withTheme } from 'styled-components/macro'

import { NavLink } from 'react-router-dom'

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.text.hint};
  height: calc(100% + 1px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid transparent;
  transition: all 0.2 ease-in-out;
  margin-top: -1px;
  padding: 0 16px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

  span {
    display: none;
  }

  &.active {
    color: ${props => props.theme.colors.secondary['A400']};
    border-color: ${props => props.theme.colors.secondary['A400']};
  }

  &:hover,
  &:active {
    background-color: #e6e6e6;
  }

  @media all and (min-width: 480px) {
    i {
      margin-right: 8px;
    }

    span {
      display: inline-block;
      font-size: 0.875rem;
    }
  }
`

export default withTheme(StyledLink)
