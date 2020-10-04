import styled from 'styled-components/macro'

import * as types from 'aer-types/types'

type Props = {
  type: types.CardType
}

const BluePrintWrapper = styled('div')<Props>`
  position: relative;

  display: flex;
  flex-direction: column;

  background-color: ${(props) =>
    props.type === 'EMPTY'
      ? '#ecf0f1'
      : props.theme.colors.cards[props.type.toLowerCase()].background};
  padding: 30px 20px 15px;
  margin: 8px 0;

  &:last-child {
    margin-bottom: 0;
  }
`

BluePrintWrapper.displayName = 'BluePrintWrapper'

export default BluePrintWrapper
