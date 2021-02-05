import styled from 'styled-components'

import Colors from 'theme/Colors'
import { setTypography } from 'theme/helpers'

import A from 'components/atoms/A'

const Link = styled(A)`
  ${setTypography('body2', { color: Colors.primary.main })}

  display: flex;
  align-items: center;
  margin-left: -6px;

  &:hover {
    color: ${(props) => props.theme.colors.primary.light};
  }
`

export default Link
