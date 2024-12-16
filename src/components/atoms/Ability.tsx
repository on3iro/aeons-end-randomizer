import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components/macro'
import Effect from './Effect'

type Props = {
  themeColor: string
  theme: any
  name: string
  activation?: string
  effect: string
}

const Ability = styled(({ theme, themeColor, name, activation = null, effect, ...rest}) => (
  <div {...rest}>
    <h2>{name}</h2>
    {activation && <p className="ability-activation" dangerouslySetInnerHTML={{__html:activation}}></p>}
    <Effect effect={effect} />
  </div>
))<Props>`
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01071em;
  position: relative;

  border: 1px solid ${props => props.themeColor};
  padding: 16px 24px;
  border-radius: 4px;
  margin: 24px 0 16px;

  h2 {
    position: absolute;
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 0;
    margin-top: 0;
    background: #fff;
    display: inline-block;
    top: -14px;
    color: ${props => props.themeColor};
    padding: 0 8px;
    margin-left: -8px;
  }

  .ability-activation {
    text-decoration: underline;
    margin-top: 0px;
  }
`

export default withTheme(Ability)
