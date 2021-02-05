import styled, { withTheme } from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import Colors from 'theme/Colors'
import { setTypography } from 'theme/helpers'

const StyledLink = styled(NavLink)`
  text-decoration: none;
  height: calc(100% + 1px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid transparent;
  transition: all 0.2 ease-in-out;
  margin-top: -1px;
  padding: 0 16px;

  i {
    color: ${(props) => props.theme.colors.text.hint};
  }

  span {
    display: none;
    ${setTypography('body2', {
      color: Colors.text.hint,
    })}
  }

  &.active {
    border-color: ${(props) => props.theme.colors.secondary['A400']};

    i,
    span {
      color: ${(props) => props.theme.colors.secondary['A400']};
    }
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
    }
  }
`

export default withTheme(StyledLink)
