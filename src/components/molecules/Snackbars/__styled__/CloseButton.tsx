import styled from 'styled-components'

const CloseButton = styled('button')`
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  outline: 0;
  color: inherit;
`

export default CloseButton
