import styled from 'styled-components/macro'
import Typography from '@material-ui/core/Typography'

const AppInfo = styled(Typography)`
  margin: ${props => props.theme.spacing.unit * 2}px;
`

export default AppInfo
