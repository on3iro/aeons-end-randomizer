import React from 'react'
import styled from 'styled-components'

import { withTheme } from 'styled-components/macro'

import { setTypography } from 'theme/helpers'

type Props = {
  theme: any
}

const Keyword = styled(({ theme, ...rest }) => <span {...rest} />)<Props>`
  ${setTypography('body2', { lineHeight: '18px' })}

  background: ${(props) => props.theme.colors.keywordBg};
  padding: 4px 8px;
  margin: 4px;
  border-radius: 12px;
  height: 24px;
  min-width: 64px;

  display: inline-block;
  text-align: center;
`

export default withTheme(Keyword)
