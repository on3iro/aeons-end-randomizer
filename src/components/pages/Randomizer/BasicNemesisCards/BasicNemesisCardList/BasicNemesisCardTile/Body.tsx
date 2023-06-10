import React from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import { BasicNemesisCard } from 'aer-types/types'

import { RootState, selectors } from 'Redux/Store'

import InfoItem from 'components/molecules/InfoItem'

import Name from './Name'

type OwnProps = {
  nemesisCard: BasicNemesisCard
}

const mapStateToProps = (state: RootState) => ({
  expansions:
    selectors.Settings.Expansions.Expansions.content.getExpansionsWithLanguageFallback(
      state
    ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Body = ({ nemesisCard, expansions }: Props) => (
  <React.Fragment>
    <Name component="p">{nemesisCard.name}</Name>
    <List>
      <InfoItem
        label="Set"
        info={expansions[nemesisCard.expansion]?.name || ''}
      />
      <InfoItem
        label="Wave"
        info={expansions[nemesisCard.expansion]?.wave || ''}
      />
      <InfoItem label="Tier" info={nemesisCard.tier.toString()} />
      {nemesisCard.type && <InfoItem label="Type" info={nemesisCard.type} />}
      {nemesisCard.type === 'Minion' && (
        <InfoItem label="Hp" info={nemesisCard.hp.toString()} />
      )}
    </List>
  </React.Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Body))
