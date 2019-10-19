import React, { useMemo } from 'react'
import { connect } from 'react-redux'

import * as types from '../../../../types'
import { RootState, selectors } from '../../../../Redux/Store'
import { useModal } from '../../../../hooks/useModal'
import useExpandedHandling from '../../../../hooks/useExpansionHandling'

import SupplyList from '../../../molecules/SupplyList'
import MageList from '../../../molecules/MageList'
import TreasureList from '../../../molecules/TreasureList'
import UpgradedBasicNemesisCards from '../../../molecules/UpgradedBasicNemesisCardList'
import ExpansionPanel from '../../../molecules/ExpansionPanel'

import ShuffleButton from '../../../atoms/ShuffleButton'

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

const Barracks = React.memo(
  ({
    cards,
    mages,
    treasures,
    upgradedBasicNemsisCards,
    banishedCards,
  }: Props) => {
    const { show, RenderModal } = useModal()
    const { expanded, createExpansionHandler } = useExpandedHandling('mages')

    const mageKey = 'mages'
    const mageHandler = useMemo(() => createExpansionHandler(mageKey), [
      createExpansionHandler,
      mageKey,
    ])

    const supplyKey = 'supply'
    const supplyHandler = useMemo(() => createExpansionHandler(supplyKey), [
      createExpansionHandler,
      supplyKey,
    ])

    const treasureKey = 'treasures'
    const treasureHandler = useMemo(() => createExpansionHandler(treasureKey), [
      createExpansionHandler,
      treasureKey,
    ])

    const upgradedBasicNemsisCardsKey = 'upgradedBasicNemsisCards'
    const upgradedBasicNemsisCardsHandler = useMemo(
      () => createExpansionHandler(upgradedBasicNemsisCardsKey),
      [createExpansionHandler, upgradedBasicNemsisCardsKey]
    )

    const banishedKey = 'banished'
    const banishedHandler = useMemo(() => createExpansionHandler(banishedKey), [
      createExpansionHandler,
      banishedKey,
    ])

    return (
      <React.Fragment>
        <RenderModal titleColor="#333" titleLabel="Barracks">
          <React.Fragment>
            <ExpansionPanel
              summary="Mages"
              expansionKey={mageKey}
              expansionHandler={mageHandler}
              expanded={expanded}
            >
              <MageList mages={mages} />
            </ExpansionPanel>

            <ExpansionPanel
              summary="Supply"
              expansionKey={supplyKey}
              expansionHandler={supplyHandler}
              expanded={expanded}
            >
              <SupplyList tiles={cards} />
            </ExpansionPanel>

            <ExpansionPanel
              summary="Treasures"
              expansionKey={treasureKey}
              expansionHandler={treasureHandler}
              expanded={expanded}
            >
              <TreasureList treasures={treasures} />
            </ExpansionPanel>

            <ExpansionPanel
              summary="Upgraded basic nemesis cards"
              expansionKey={upgradedBasicNemsisCardsKey}
              expansionHandler={upgradedBasicNemsisCardsHandler}
              expanded={expanded}
            >
              <UpgradedBasicNemesisCards
                upgradedBasicNemsisCards={upgradedBasicNemsisCards}
              />
            </ExpansionPanel>

            <ExpansionPanel
              summary="Banished cards"
              expansionKey={banishedKey}
              expansionHandler={banishedHandler}
              expanded={expanded}
            >
              <SupplyList tiles={banishedCards} />
            </ExpansionPanel>
          </React.Fragment>
        </RenderModal>
        <ShuffleButton onClick={show} color="primary" variant="extended">
          Show Barracks
        </ShuffleButton>
      </React.Fragment>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Barracks)
