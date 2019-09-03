import styled from 'styled-components/macro'
import MuiCard from '@material-ui/core/Card'

const Card = styled(MuiCard)`
  position: relative;

  background: ${props =>
    props.theme.colors.turnOrderCards['nemesis']['normal']};
`

Card.displayName = 'Card'

export default Card
