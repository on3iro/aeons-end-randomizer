import React from 'react'
import styled from 'styled-components'

import H1 from '../../atoms/H1'

type Props = {
  themeColor: string
}

// NOTE: we need to take away additional props, so that they are not passed
// to DOM elements by MUI Components (we really should get rid of MUI...)
const Title = styled(({ themeColor, ...rest }) => <H1 {...rest} />)<Props>`
  color: ${props => props.themeColor};
`

export default Title
