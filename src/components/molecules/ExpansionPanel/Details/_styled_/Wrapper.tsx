import styled from 'styled-components/macro'

type Props = {
  isExpanded: boolean
}

const Wrapper = styled('div')<Props>`
  visibility: ${props => (props.isExpanded ? 'visible' : 'hidden')};
`

export default Wrapper
