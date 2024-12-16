import React from 'react'

import { FriendOrFoeAttack } from 'aer-types/types'
import Effect from '../../atoms/Effect'

import Name from './Name'

type Props = {
  card: FriendOrFoeAttack
}

const Body = ({ card }: Props) => (
  <React.Fragment>
    <Name component="p">{card.name}</Name>
    <Effect effect={card.effect || ''} />
  </React.Fragment>
)

export default React.memo(Body)
