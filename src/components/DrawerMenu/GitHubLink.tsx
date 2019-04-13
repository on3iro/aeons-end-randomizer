import styled from 'styled-components/macro'
import Link from '@material-ui/core/Link'

const GithHubLink = styled(Link)`
  display: block;
  line-height: 24px;
  margin-top: ${props => props.theme.spacing.unit * 2}px;
`

export default GithHubLink
