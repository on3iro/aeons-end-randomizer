import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'
import { OldStyleExpedition } from '../../../../types'

import InfoItem from '../../../molecules/InfoItem'

import Name from './Name'
import List from './List'

type OwnProps = {
  expedition: Expedition
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  usedExpansions: selectors.Settings.Expansions.SelectedExpansions.getExpansionNamesByIdList(
    state,
    { expansionIds: ownProps.expedition.settingsSnapshot.usedExpansions }
  ),
  variant: selectors.Expeditions.Variants.getVariantById(state, {
    variantId: ownProps.expedition.variantId,
  }),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Body = ({ expedition, variant, usedExpansions }: Props) => (
  <React.Fragment>
    <Name variant="h6" component="h2">
      {expedition.name || expedition.id}
    </Name>
    <List>
      <InfoItem
        label="Finished"
        info={expedition.finished ? 'Yes' : 'No'}
        data-test="info--expedition-finished"
      />
      <InfoItem
        label="Score"
        info={expedition.score.toString()}
        data-test="info--score"
      />
      <InfoItem label="Variant" info={variant.name} data-test="info--variant" />
      <InfoItem
        label="Big Pocket"
        info={expedition.bigPocketVariant ? 'Yes' : 'No'}
        data-test="info--big-pocket"
      />
      <InfoItem
        label="Seed"
        info={expedition.seed.seed}
        data-test="info--seed"
      />
      <InfoItem
        label="Used expansions"
        info={usedExpansions.join(', ')}
        data-test="info--expansions"
      />
    </List>
  </React.Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Body))
