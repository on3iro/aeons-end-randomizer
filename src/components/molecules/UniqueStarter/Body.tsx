import React from 'react'

import { ICard } from '../../../types'

import InfoItem from '../../molecules/InfoItem'
import AbilityText from '../../atoms/AbilityText'
import TileNameBold from 'components/atoms/_styled_/TileNameBold'

import List from '@material-ui/core/List'

type Props = {
  card: ICard
}

const Body = React.memo(({ card }: Props) => (
  <React.Fragment>
    <TileNameBold>{card.name}</TileNameBold>
    <List>
      <InfoItem label="Type" info={card.type} />
      <InfoItem label="Cost" info={card.cost.toString()} />
    </List>

    <AbilityText
      dangerouslySetInnerHTML={{
        __html: card.effect || '',
      }}
    />
    {card.keywords ? card.keywords.map((keyword: string) => keyword) : null}
  </React.Fragment>
))

export default Body
