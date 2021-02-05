import styled from 'styled-components/macro'

const Heading = styled('p')`
  font-size: ${(props) => props.theme.heading.fontSize};
  margin: 0;
  letter-spacing: 0.01071em;
`

export default Heading
