import styled from 'styled-components'

type Props = {
  size?: string
}

const Wrapper = styled('i')<Props>`
  font-size: ${props => (props.size ? props.size : '24px')};
`

export default Wrapper
