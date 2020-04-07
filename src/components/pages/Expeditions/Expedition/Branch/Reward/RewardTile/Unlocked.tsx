import styled from 'styled-components'

import UnlockedBase from '../../Unlocked'
import { Status } from 'types'

type Props = {
  status: Status
}

const Unlocked = styled(UnlockedBase)<Props>`
  background: ${(props) =>
    props.status === 'unlocked'
      ? props.theme.colors.cards.treasure3.normal
      : props.theme.colors.cards.treasure3.light};
`

export default Unlocked
