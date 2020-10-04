import styled from 'styled-components'
import { Status } from 'aer-types/types'

import UnlockedBase from '../../Unlocked'

type Props = {
  status: Status
}

const Unlocked = styled(UnlockedBase)<Props>`
  background: ${(props) =>
    props.status === 'unlocked'
      ? props.theme.colors.turnOrderCards.player3.normal
      : props.theme.colors.turnOrderCards.player3.light};
`

export default Unlocked
