import React from 'react'
import styled from 'styled-components/macro'
import MuiCard from '@material-ui/core/Card'

type Props = {
  themeColor: string
}

const Wrapper = styled(({ themeColor, ...rest }) => <MuiCard {...rest} />)<
  Props
>`
  position: relative;

  background: ${props => props.themeColor};
`

Wrapper.displayName = 'Wrapper'

export default Wrapper
