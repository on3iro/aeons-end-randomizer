import styled from 'styled-components/macro'
import MuiCardContent from '@material-ui/core/CardContent'

type Props = {
  color: string
}

const Content = styled(MuiCardContent)<Props>`
  color: ${props => props.color};
  position: relative;
  z-index: 1;
`

Content.displayName = 'Content'

export default Content
