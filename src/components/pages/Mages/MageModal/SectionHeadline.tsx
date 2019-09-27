import React from 'react'
import styled from 'styled-components'
import H2 from '../../../H2'

type Props = {
  playerNumber: number
}

const SectionHeadline = styled(({ playerNumber, ...rest }) => <H2 {...rest} />)<
  Props
>`
  color: ${props =>
    props.theme.colors.playerColors[`player${props.playerNumber}`].normal};
  font-weight: 300;
  margin: 8px 0;
`

export default SectionHeadline
