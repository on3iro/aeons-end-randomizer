import styled from 'styled-components/macro'

const LinkIcon = styled('span')`
  line-height: 1;
  margin: 0 8px;
  height: 24px;
  width: 24px;
  font-size: 18px;
  color: ${props => props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
`

export default LinkIcon
