import Typography from '@material-ui/core/Typography'
import styled from 'styled-components/macro'

const Heading = styled(Typography)`
  font-size: ${props => props.theme.heading.fontSize};
`

export default Heading
