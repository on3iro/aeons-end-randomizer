import React from 'react'
import { connect } from 'react-redux'

import { IMarketSetup } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as SupplySetups from '../../../Redux/Store/Settings/SupplySetups'

import MarketOptionsWrapper from './MarketOptionsWrapper'
import SupplyPreview from '../../SupplyPreview'

const MarketOptions = React.memo(
  ({
    activeMarketSetups,
    expansionHandler,
    classes,
  }: {
    activeMarketSetups: ReadonlyArray<IMarketSetup>
    expansionHandler: (
      event: React.ChangeEvent<any> | undefined,
      expanded: boolean | string
    ) => void
    classes: any
  }) => (
    <MarketOptionsWrapper>
      {activeMarketSetups.map(setup => (
        <SupplyPreview
          setup={setup}
          clickHandler={() => expansionHandler(undefined, false)}
          classes={classes}
        />
      ))}
    </MarketOptionsWrapper>
  )
)

const mapStateToProps = (state: RootState) => ({
  activeMarketSetups: SupplySetups.selectors.getActiveSetups(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketOptions)
