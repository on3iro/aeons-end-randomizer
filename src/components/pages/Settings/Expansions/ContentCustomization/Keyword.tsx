import React from 'react'
import styled from 'styled-components'

type Props = {
  type: number
}

const Keyword = styled(({ type, ...rest }) => <span {...rest} />)<Props>`
  background: ${props => props.theme.colors.cards[`${props.type}`].color};
  padding: 4px 8px;
  margin: 4px;
  border-radius: 12px;
  height: 24px;
  min-width: 64px;

  display: inline-block;
  text-align: center;

  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`

export default Keyword
