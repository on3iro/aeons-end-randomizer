import React from 'react'
import List from '@material-ui/core/List'

import { Treasure } from '../../../../types'

import AbilityText from '../../../atoms/AbilityText'

import InfoItem from '../../InfoItem'

import Name from './Name'

type Props = {
  treasure: Treasure
}

const Body = ({ treasure }: Props) => (
  <React.Fragment>
    <Name component="p">{treasure.name}</Name>
    <List>
      <InfoItem label="Set" info={treasure.expansion} />
      <InfoItem label="Treasure Level" info={treasure.level.toString()} />
      {treasure.subtype && <InfoItem label="Subtype" info={treasure.subtype} />}
    </List>
    <AbilityText dangerouslySetInnerHTML={{ __html: treasure.effect }} />
  </React.Fragment>
)

export default React.memo(Body)
