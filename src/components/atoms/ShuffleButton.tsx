import React from 'react'
import styled from 'styled-components/macro'
import Fab from '@material-ui/core/Fab'

type Props = {
  withBottomNav?: boolean
}

const ShuffleButton = styled(({ withBottomNav, ...rest }) => <Fab {...rest} />)<
  Props
>`
  position: fixed;
  bottom: ${props => (props.withBottomNav ? '80px' : '24px')};
  right: 24px;
  z-index: 10;
`

ShuffleButton.displayName = 'ShuffleButton'

export default ShuffleButton
