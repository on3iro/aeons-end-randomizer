import React from 'react'
import List from '@material-ui/core/List'

import { Treasure } from '../../../../types'

import AbilityText from '../../../atoms/AbilityText'

import InfoItem from '../../InfoItem'

import TileNameBold from 'components/atoms/_styled_/TileNameBold'

type Props = {
  treasure: Treasure
}

const Body = React.memo(({ treasure }: Props) => (
  <React.Fragment>
    <TileNameBold>{treasure.name}</TileNameBold>
    <List>
      <InfoItem label="Set" info={treasure.expansion} />
      <InfoItem label="Treasure Level" info={treasure.level.toString()} />
      {treasure.subtype && <InfoItem label="Subtype" info={treasure.subtype} />}
    </List>
    <AbilityText dangerouslySetInnerHTML={{ __html: treasure.effect }} />
  </React.Fragment>
))

export default Body
