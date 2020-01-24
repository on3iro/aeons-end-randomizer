import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'
import { Expedition } from 'types'

import InfoItem from 'components/molecules/InfoItem'
import List from 'components/atoms/_styled_/List'
import TileBodyWrapper from 'components/atoms/_styled_/TileBodyWrapper'

import Name from './_styled_/Name'

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

const Body = ({ expedition, variant }: Props) => (
  <TileBodyWrapper>
    <Name>{expedition.name || expedition.id}</Name>
    <List>
      <InfoItem label="Finished" info={expedition.finished ? 'Yes' : 'No'} />
      <InfoItem label="Score" info={expedition.score.toString()} />
      <InfoItem label="Variant" info={variant.name} />
      <InfoItem
        label="Big Pocket"
        info={expedition.bigPocketVariant ? 'Yes' : 'No'}
      />
    </List>
  </TileBodyWrapper>
)

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Body))
