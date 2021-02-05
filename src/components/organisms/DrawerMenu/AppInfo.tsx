import styled from 'styled-components/macro'

import { setTypography } from 'theme/helpers'

const AppInfo = styled('p')`
  ${setTypography('body2')}

  margin: ${(props) => props.theme.spacing.unit * 2}px;
`

export default AppInfo
