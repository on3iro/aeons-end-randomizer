import styled from 'styled-components/macro'
import Fab from '@material-ui/core/Fab'

const ShuffleButton = styled(Fab)`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10;
`

ShuffleButton.displayName = 'ShuffleButton'

export default ShuffleButton
