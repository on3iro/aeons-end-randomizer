import React from 'react'
import styled from 'styled-components'
import Description from './Description'

type Props = {
  playerNumber: number
}

const DescriptionMage = styled(({ playerNumber, ...rest }) => (
  <Description {...rest} />
))<Props>`
  border: 1px solid
    ${props =>
      props.theme.colors.playerColors[`player${props.playerNumber}`].normal};
  padding: 16px 24px;
  border-radius: 4px;
  margin: 24px 0 16px;

  h2 {
    margin-top: -16px;
    background: #fff;
    display: inline-block;
    position: relative;
    top: -25px;
    color: ${props =>
      props.theme.colors.playerColors[`player${props.playerNumber}`].normal};
    padding: 0 8px;
    margin-left: -8px;
  }

  .ability-activation {
    text-decoration: underline;
    margin-top: -16px;
  }
`

export default DescriptionMage
