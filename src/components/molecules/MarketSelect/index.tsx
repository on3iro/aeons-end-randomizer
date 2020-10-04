import React from 'react'
import { connect } from 'react-redux'
import * as types from 'aer-types/types'
import * as helpers from 'helpers'

import { RootState, selectors } from 'Redux/Store'
import useExpandedHandling from 'hooks/useExpansionHandling'

import ExpansionPanel from 'components/molecules/ExpansionPanel'
import SupplyPreview from 'components/molecules/SupplyPreview'

import MarketOptionsWrapper from './MarketOptionsWrapper'

type OwnProps = {
  clickHandler: (id: string) => void
  selectedMarketId: string
  additionalSetups?: types.IMarketSetup[]
}

const getCustomAndPredefined = selectors.Settings.SupplySetups.makeGetCustomAndPredefined()
const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const activeMarketSetups = [
    ...selectors.Settings.SupplySetups.getActiveSetups(state),
    ...(ownProps.additionalSetups ?? []),
  ].filter(helpers.distinctById)

  const additionalSetupsLookup: {
    [id: string]: types.IMarketSetup
  } = ownProps.additionalSetups
    ? ownProps.additionalSetups.reduce((acc, s) => {
        return {
          ...acc,
          [s.id]: s,
        }
      }, {})
    : {}

  return {
    activeMarketSetups,
    allMarketSetups: {
      ...getCustomAndPredefined(state),
      ...additionalSetupsLookup,
    },
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

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
    <ExpansionPanel
      expanded={expanded}
      expansionKey={expansionKey}
      summary={selectedMarketSetup.name}
      expansionHandler={expansionHandler}
      data-test="Supply"
    >
      <MarketOptionsWrapper>
        {activeMarketSetups.map((setup) => (
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
