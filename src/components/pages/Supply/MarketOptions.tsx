import React from 'react'
import { connect } from 'react-redux'

import { IMarketSetup } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as SupplySetups from '../../../Redux/Store/Settings/SupplySetups'

import MarketOptionsWrapper from './MarketOptionsWrapper'
import SupplyPreview from '../../SupplyPreview'

const mapStateToProps = (state: RootState) => ({
  activeMarketSetups: SupplySetups.selectors.getActiveSetups(state),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    classes: any
    expansionHandler: (
      event: React.ChangeEvent<any> | undefined,
      expanded: boolean | string
    ) => void
  }

const MarketOptions = React.memo(
  ({ activeMarketSetups, expansionHandler, classes }: Props) => (
    <MarketOptionsWrapper>
      {activeMarketSetups.map(setup => (
        <SupplyPreview
          key={setup.id}
          setup={setup}
          clickHandler={() => expansionHandler(undefined, false)}
          classes={classes}
        />
      ))}
    </MarketOptionsWrapper>
  )
)

MarketOptions.displayName = 'MarketOptions'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketOptions)
