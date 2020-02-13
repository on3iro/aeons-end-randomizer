import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'
import useExpandedHandling from '../../../hooks/useExpansionHandling'

import ExpansionPanel from 'components/molecules/ExpansionPanel'

import MarketOptionsWrapper from './MarketOptionsWrapper'
import SupplyPreview from '../SupplyPreview'

const getCustomAndPredefined = selectors.Settings.SupplySetups.makeGetCustomAndPredefined()

const mapStateToProps = (state: RootState) => ({
  activeMarketSetups: selectors.Settings.SupplySetups.getActiveSetups(state),
  allMarketSetups: getCustomAndPredefined(state),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    clickHandler: (id: string) => void
    selectedMarketId: string
  }

const MarketSelect = ({
  activeMarketSetups,
  allMarketSetups,
  selectedMarketId,
  clickHandler,
}: Props) => {
  const { expanded, createExpansionHandler } = useExpandedHandling()
  const expansionKey = 'setup'
  const expansionHandler = createExpansionHandler(expansionKey)

  const selectedMarketSetup = allMarketSetups[selectedMarketId]

  const handleClick = (id: string) => {
    expansionHandler(undefined, false)
    clickHandler(id)
  }

  return (
    <ExpansionPanel summary={selectedMarketSetup.name}>
      <MarketOptionsWrapper>
        {activeMarketSetups.map(setup => (
          <SupplyPreview
            key={setup.id}
            setup={setup}
            clickHandler={() => handleClick(setup.id)}
            selected={setup.id === selectedMarketSetup.id}
          />
        ))}
      </MarketOptionsWrapper>
    </ExpansionPanel>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(MarketSelect))
