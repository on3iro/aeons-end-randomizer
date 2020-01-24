import React from 'react'

import { Treasure } from '../../../../types'

import InfoItem from '../../InfoItem'
import AbilityText from '../../../atoms/AbilityText'
import List from 'components/atoms/_styled_/List'
import TileBodyWrapper from 'components/atoms/_styled_/TileBodyWrapper'
import TileNameBold from 'components/atoms/_styled_/TileNameBold'

type Props = {
  treasure: Treasure
}

const Body = React.memo(({ treasure }: Props) => (
  <TileBodyWrapper>
    <TileNameBold>{treasure.name}</TileNameBold>
    <List>
      <InfoItem label="Set" info={treasure.expansion} />
      <InfoItem label="Treasure Level" info={treasure.level.toString()} />
      {treasure.subtype && <InfoItem label="Subtype" info={treasure.subtype} />}
    </List>
    <AbilityText dangerouslySetInnerHTML={{ __html: treasure.effect }} />
  </TileBodyWrapper>
))

export default Body
