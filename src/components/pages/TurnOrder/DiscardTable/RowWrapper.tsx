import styled from 'styled-components/macro'
import MuiTableRow from '@material-ui/core/TableRow'

import { TurnOrderCardType } from 'aer-types/types'
import { TurnOrderColors } from '../../../../mainTheme'

type Props = {
  type: TurnOrderCardType
}

const getTurnOrderCardStyles = (
  turnOrderCardColors: TurnOrderColors,
  type: TurnOrderCardType
) => {
  if (!turnOrderCardColors[type]) {
    return `
      background: #fff;
      &:first-child {
        background: #fff;
      }
    `
  }

  return `
    background: ${turnOrderCardColors[type].light};
    &:first-child {
      background: ${turnOrderCardColors[type].normal};
    }
  `
}

const RowWrapper = styled(MuiTableRow)<Props>`
  ${(props) =>
    getTurnOrderCardStyles(props.theme.colors.turnOrderCards, props.type)}

  &:first-child {
    & * {
      color: #fff;
    }
  }

  & td {
    border-bottom: 4px solid #fafafa;
  }
`

export default RowWrapper
