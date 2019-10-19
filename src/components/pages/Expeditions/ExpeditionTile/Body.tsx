import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'
import { Expedition } from '../../../../types'

import InfoItem from '../../../molecules/InfoItem'

import Name from './Name'

import List from '@material-ui/core/List'

type OwnProps = {
  expedition: Expedition
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  variant: selectors.Expeditions.Variants.getVariantById(state, {
    variantId: ownProps.expedition.variantId,
  }),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Body = React.memo(({ expedition, variant }: Props) => (
  <React.Fragment>
    <Name variant="h6" component="h2">
      {expedition.name || expedition.id}
    </Name>
    <List>
      <InfoItem label="Finished" info={expedition.finished ? 'Yes' : 'No'} />
      <InfoItem label="Score" info={expedition.score.toString()} />
      <InfoItem label="Variant" info={variant.name} />
      <InfoItem
        label="Big Pocket"
        info={expedition.bigPocketVariant ? 'Yes' : 'No'}
      />
    </List>
  </React.Fragment>
))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)
