import React from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'

import { Treasure } from 'aer-types/types'
import { RootState, selectors } from 'Redux/Store'

import AbilityText from 'components/atoms/AbilityText'

import InfoItem from '../../InfoItem'

import Name from './Name'

type OwnProps = {
  treasure: Treasure
}

const mapStateToProps = (state: RootState) => ({
  expansions: selectors.Settings.Expansions.Expansions.content.getContent(
    state
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Body = ({ treasure, expansions }: Props) => (
  <React.Fragment>
    <Name component="p">{treasure.name}</Name>
    <List>
      <InfoItem
        label="Set"
        info={expansions.ENG[treasure.expansion]?.name || ''}
      />
      <InfoItem label="Treasure Level" info={treasure.level.toString()} />
      {treasure.subtype && <InfoItem label="Subtype" info={treasure.subtype} />}
    </List>
    <AbilityText dangerouslySetInnerHTML={{ __html: treasure.effect }} />
  </React.Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Body))
