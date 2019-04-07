import React from 'react'
import { connect } from 'react-redux'

import { IMarketSetup } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as SupplySetups from '../../../Redux/Store/Settings/SupplySetups'
import * as SupplySelection from '../../../Redux/Store/Supply/Selection'
import * as RandomSetup from '../../../Redux/Store/Supply/RandomSetup'

import MarketOptionsWrapper from './MarketOptionsWrapper'
import SupplyPreview from '../../SupplyPreview'

const getCustomAndPredefined = SupplySetups.selectors.makeGetCustomAndPredefined()
const mapStateToProps = (state: RootState) => ({
  activeMarketSetups: SupplySetups.selectors.getActiveSetups(state),
  allMarketSetups: getCustomAndPredefined(state),
  selectedSetup: SupplySelection.selectors.getSelectedSetup(state),
})

const mapDispatchToProps = {
  selectSetup: SupplySelection.actions.selectSetup,
  resetMarket: RandomSetup.actions.resetMarket,
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
