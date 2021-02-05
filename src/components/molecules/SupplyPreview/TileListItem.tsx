import styled from 'styled-components/macro'

import Colors from 'theme/Colors'
import { setTypography } from 'theme/helpers'

type Props = {
  type: string
  theme: any
}

const TileListItem = styled('li')<Props>`
  ${setTypography('caption', { color: Colors.text.secondary })}

  margin: 4px;
  min-width: 36px;
  width: calc(33.33333% - 8px);
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.12);

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.cards[props.type].background};

  @media all and (min-width: 502px) {
    width: calc(11.11111% - 8px);
  }
`

export default TileListItem
