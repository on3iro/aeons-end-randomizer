import styled from 'styled-components'
import A from '../../atoms/A'

const Link = styled(A)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary.main};
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01071em;
  margin-left: -6px;

  &:hover {
    color: ${props => props.theme.colors.primary.light};
  }
`

export default Link
