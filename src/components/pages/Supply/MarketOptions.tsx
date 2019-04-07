import React from 'react'
import { connect } from 'react-redux'

import { IMarketSetup } from '../../../types'
import { RootState, selectors, actions } from '../../../Redux/Store'

import MarketOptionsWrapper from './MarketOptionsWrapper'
import SupplyPreview from '../../SupplyPreview'

const getCustomAndPredefined = selectors.Settings.SupplySetups.makeGetCustomAndPredefined()
const mapStateToProps = (state: RootState) => ({
  activeMarketSetups: selectors.Settings.SupplySetups.getActiveSetups(state),
  allMarketSetups: getCustomAndPredefined(state),
  selectedSetup: selectors.Supply.Selection.getSelectedSetup(state),
})

const mapDispatchToProps = {
  selectSetup: actions.Supply.Selection.selectSetup,
  resetMarket: actions.Supply.RandomSetup.resetMarket,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionHandler: (
      event: React.ChangeEvent<any> | undefined,
      expanded: boolean | string
    ) => void
  }

const MarketOptions = React.memo(
  ({
    activeMarketSetups,
    allMarketSetups,
    expansionHandler,
    resetMarket,
    selectSetup,
    selectedSetup,
  }: Props) => (
    <MarketOptionsWrapper>
      {activeMarketSetups.map(setup => (
        <SupplyPreview
          key={setup.id}
          setup={setup}
          clickHandler={(event: any) => {
            expansionHandler(undefined, false)
            selectSetup(allMarketSetups[event.currentTarget.dataset.value])
            resetMarket()
          }}
          selected={selectedSetup.id === setup.id}
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
