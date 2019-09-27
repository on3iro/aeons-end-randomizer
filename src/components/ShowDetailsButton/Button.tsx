import styled from 'styled-components'

const Button = styled('button')`
  margin: 0 16px 16px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: #fff;
  outline: 0;

  &:hover,
  &:active {
    opacity: 0.8;
  }

  svg {
    vertical-align: middle;
  }
`

export default Button
