import styled from 'styled-components/macro'

const Heading = styled('p')`
  font-size: ${props =>
    props.theme.components.expansionPanel.summary.heading.fontSize};
  margin: 0;
`

export default Heading
