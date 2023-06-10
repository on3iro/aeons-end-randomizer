import React, { useMemo } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'
import { RootState, selectors } from 'Redux/Store'
import useExpandedHandling from 'hooks/useExpansionHandling'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'

import Mages from './Mages'
import Supply from './Supply'
import Treasure from './Treasure'
import UpgradedBasicNemeses from './UpgradedBasicNemeses'
import Banished from './Banished'

const mageKey = 'mages'
const supplyKey = 'supply'
const treasureKey = 'treasures'
const banishedKey = 'banished'
const upgradedBasicNemsisCardsKey = 'upgradedBasicNemsisCards'

type OwnProps = {
  expedition: types.Expedition
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const expeditionId = ownProps.expedition.id

  return {
    cards: selectors.getExpeditionSupply(state, { expeditionId }),
    mages: selectors.getExpeditionMages(state, { expeditionId }),
    treasures: selectors.getExpeditionTreasure(state, { expeditionId }),
    upgradedBasicNemsisCards: selectors.getExpeditionUpgradedBasicNemesis(
      state,
      { expeditionId }
    ),
    banishedCards: selectors.getExpeditionBanishedCards(state, {
      expeditionId,
    }),
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BarracksContent = ({
  cards,
  mages,
  treasures,
  upgradedBasicNemsisCards,
  banishedCards,
}: Props) => {
  const { expanded, createExpansionHandler } = useExpandedHandling(mageKey)

  const mageHandler = useMemo(() => createExpansionHandler(mageKey), [
    createExpansionHandler,
  ])

  const supplyHandler = useMemo(() => createExpansionHandler(supplyKey), [
    createExpansionHandler,
  ])

  const treasureHandler = useMemo(() => createExpansionHandler(treasureKey), [
    createExpansionHandler,
  ])

  const upgradedBasicNemsisCardsHandler = useMemo(
    () => createExpansionHandler(upgradedBasicNemsisCardsKey),
    [createExpansionHandler]
  )

  const banishedHandler = useMemo(() => createExpansionHandler(banishedKey), [
    createExpansionHandler,
  ])

  return (
    <ModalBodyWrapper>
      <Mages
        mages={mages}
        expansionKey={mageKey}
        expansionHandler={mageHandler}
        expanded={expanded}
      />
      <Supply
        tiles={cards}
        expansionKey={supplyKey}
        expansionHandler={supplyHandler}
        expanded={expanded}
      />
      <Treasure
        treasures={treasures}
        expansionKey={treasureKey}
        expansionHandler={treasureHandler}
        expanded={expanded}
      />
      <UpgradedBasicNemeses
        upgradedBasicNemsisCards={upgradedBasicNemsisCards}
        expansionKey={upgradedBasicNemsisCardsKey}
        expansionHandler={upgradedBasicNemsisCardsHandler}
        expanded={expanded}
      />
      <Banished
        banishedCards={banishedCards}
        expansionKey={banishedKey}
        expansionHandler={banishedHandler}
        expanded={expanded}
      />
    </ModalBodyWrapper>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BarracksContent))
