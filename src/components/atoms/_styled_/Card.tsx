import styled from 'styled-components/macro'

const Card = styled('div')`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  background: ${props => props.theme.colors.white};
  border-radius: 4px;
`

export default Card
