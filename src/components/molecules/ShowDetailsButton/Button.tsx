import React from 'react'
import styled from 'styled-components'

type Props = {
  themeColor: string
}

const Button = styled(({ themeColor, ...rest }) => <button {...rest} />)<Props>`
  margin: 0 16px 16px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: ${props => props.themeColor};
  outline: 0;
  position: relative;
  z-index: 1;

  &:hover,
  &:active {
    opacity: 0.8;
  }

  svg {
    vertical-align: middle;
  }
`

export default Button
