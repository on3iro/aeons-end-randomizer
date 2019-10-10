import React from 'react'
import styled from 'styled-components'

import { withTheme } from 'styled-components/macro'

type Props = {
  theme: any
}

const Keyword = styled(({ theme, ...rest }) => <span {...rest} />)<Props>`
  background: ${props => props.theme.colors.keywordBg};
  padding: 4px 8px;
  margin: 4px;
  border-radius: 12px;
  height: 24px;
  min-width: 64px;

  display: inline-block;
  text-align: center;

  color: ${props => props.theme.colors.text.primary};
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`

export default withTheme(Keyword)
