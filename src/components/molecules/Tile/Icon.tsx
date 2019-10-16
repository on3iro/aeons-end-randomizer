import styled from 'styled-components/macro'

type Props = {
  iconColor: string
}

const Icon = styled('i')<Props>`
  position: absolute;
  right: 8px;
  bottom: -8px;
  font-size: 120px;
  z-index: 0;
  opacity: 0.2;

  color: ${props => props.iconColor};
`

export default Icon
