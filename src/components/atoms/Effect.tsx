import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components/macro'

type Props = {
  themeColor?: string
  isMage?: boolean
  theme: any
  effect: string
}

const Effect = styled(({ theme, effect, ...rest }) => (
  <span {...rest} dangerouslySetInnerHTML={{__html: effect}} />
))<Props>`
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01071em;
  position: relative;
  display: contents;

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

export default withTheme(Effect)
