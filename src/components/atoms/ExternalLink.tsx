import styled from 'styled-components/macro'

const ExternalLink = styled('a')`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.light};
  }
`

export default ExternalLink
