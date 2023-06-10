import styled from 'styled-components/macro'

type Props = {
  type: string
}

const TileListItem = styled('li')<Props>`
  margin: 4px;
  min-width: 36px;
  width: calc(33.33333% - 8px);
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
  background: ${props => props.theme.colors.cards[props.type].background};
  font-family: 'Roboto', sans-serif;

  @media all and (min-width: 502px) {
    width: calc(11.11111% - 8px);
  }
`

export default TileListItem
