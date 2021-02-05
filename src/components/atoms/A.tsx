import styled from 'styled-components'
import { Link } from 'react-router-dom'

const A = styled(Link)`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.light};
  }
`

export default A
