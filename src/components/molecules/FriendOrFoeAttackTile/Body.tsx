import React from 'react'

import { FriendOrFoeAttack } from 'aer-types/types'
import AbilityText from '../../atoms/AbilityText'

import Name from './Name'

type Props = {
  card: FriendOrFoeAttack
}

const Body = ({ card }: Props) => (
  <React.Fragment>
    <Name component="p">{card.name}</Name>
    <AbilityText
      dangerouslySetInnerHTML={{
        __html: card.effect || '',
      }}
    />
  </React.Fragment>
)

export default React.memo(Body)
