import styled from 'styled-components'
import A from '../../../../atoms/A'

const BackLink = styled(A)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary.main};

  &:hover {
    color: ${props => props.theme.colors.primary.light};
  }
`

export default BackLink
