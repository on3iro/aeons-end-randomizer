import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components/macro'

type Props = {
  themeColor?: string
  isMage?: boolean
  theme: any
}

const AbilityText = styled(({ themeColor, isMage, theme, ...rest }) => (
  <div {...rest} />
))<Props>`
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01071em;

  ${props =>
    props.isMage
      ? `
    border: 1px solid ${props.themeColor};
    padding: 16px 24px;
    border-radius: 4px;
    margin: 24px 0 16px;

    h2 {
      font-weight: 300;
      font-size: 1.2rem;
      margin-bottom: 0;
      margin-top: -16px;
      background: #fff;
      display: inline-block;
      position: relative;
      top: -25px;
      color: ${props.themeColor};
      padding: 0 8px;
      margin-left: -8px;
    }

    .ability-activation {
      text-decoration: underline;
      margin-top: -16px;
    }
    `
      : null}

  .or {
    display: block;
    margin: 4px 0;
  }

  .aether {
    width: 20px;
    height: 20px;
    background: ${props => props.theme.colors.text.primary};
    border-radius: 100%;
    display: inline-block;
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-size: 12px;
    vertical-align: top;
    line-height: 20px;
  }

  .hint {
    color: ${props => props.theme.colors.text.hint};
    display: block;
  }

  > p:last-child {
    margin-bottom: 0;
  }
`

export default withTheme(AbilityText)
