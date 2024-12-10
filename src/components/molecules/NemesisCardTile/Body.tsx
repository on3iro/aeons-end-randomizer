import React from 'react'
import List from '@material-ui/core/List'

import { INemesisCard, BasicNemesisCard } from 'aer-types/types'

import InfoItem from 'components/molecules/InfoItem'

import Name from './Name'
import AbilityText from 'components/atoms/AbilityText'

type Props = {
  nemesisCard: INemesisCard | BasicNemesisCard
  inline: boolean
}

const Body = ({ nemesisCard, inline = false }: Props) => (
  <React.Fragment>
    <Name component="p">{nemesisCard.name}</Name>
    <List>
      <InfoItem label="Set" info={nemesisCard.expansion} />
      {'tier' in nemesisCard && <InfoItem label="Tier" info={nemesisCard.tier.toString()} />}
      {nemesisCard.type && <InfoItem label="Type" info={nemesisCard.type} />}
      {nemesisCard.type === 'Minion' && (
        <InfoItem label="Hp" info={nemesisCard.hp.toString()} />
      )}
      {inline && <AbilityText
        dangerouslySetInnerHTML={{
          __html: nemesisCard.effect || '',
        }}
      />}
    </List>
  </React.Fragment>
)

export default React.memo(Body)
