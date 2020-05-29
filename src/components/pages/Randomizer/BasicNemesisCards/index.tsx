import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import { PlayerCount } from 'Redux/Store/Randomizer/BasicNemesisCards/PlayerCount'

import NoSelectedExpansions from 'components/molecules/NoSelectedExpansions'
import ShuffleButton from 'components/atoms/ShuffleButton'

import EmptyHint from './EmptyHint'
import PlayerAmountPicker from './PlayerAmountPicker'
import Tier from './Tier'

const mapStateToProps = (state: RootState) => {
  const basicNemesisCardIds = selectors.Randomizer.BasicNemesisCards.RandomCards.getBasicNemesisCards(
    state
  )

  return {
    hasStandaloneExpansionSelected: selectors.Settings.Expansions.Expansions.getHasStandaloneExpansion(
      state
    ),
    availableBasicNemesisCards: selectors.Settings.Expansions.getSelectedBasicNemesisCardsForSelectedExpansions(
      state
    ),
    playerCount: selectors.Randomizer.BasicNemesisCards.PlayerCount.getCount(
      state
    ),
    randomBasicNemesisCards: {
      Tier1: basicNemesisCardIds.Tier1.map(basicNemesisCardId =>
        selectors.Settings.Expansions.BasicNemesisCards.content.getById(state, {
          id: basicNemesisCardId.id,
        })
      ),
      Tier2: basicNemesisCardIds.Tier2.map(basicNemesisCardId =>
        selectors.Settings.Expansions.BasicNemesisCards.content.getById(state, {
          id: basicNemesisCardId.id,
        })
      ),
      Tier3: basicNemesisCardIds.Tier3.map(basicNemesisCardId =>
        selectors.Settings.Expansions.BasicNemesisCards.content.getById(state, {
          id: basicNemesisCardId.id,
        })
      ),
    },
  }
}

const mapDispatchToProps = {
  createDeck:
    actions.Randomizer.BasicNemesisCards.RandomCards.createBasicNemesisCardDeck,
  setPlayerCount: actions.Randomizer.BasicNemesisCards.PlayerCount.setCount,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const BasicNemesisCards = ({
  hasStandaloneExpansionSelected,
  availableBasicNemesisCards,
  createDeck,
  randomBasicNemesisCards,
  playerCount,
  setPlayerCount,
}: Props) => {
  if (!hasStandaloneExpansionSelected) {
    return <NoSelectedExpansions />
  }

  const handleRandomization = () => {
    createDeck(availableBasicNemesisCards, playerCount)
  }

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerCount(parseInt(event.currentTarget.value) as PlayerCount)
  }

  const noCardsRolled =
    randomBasicNemesisCards.Tier1.length < 1 ||
    randomBasicNemesisCards.Tier2.length < 1 ||
    randomBasicNemesisCards.Tier3.length < 1

  return (
    <React.Fragment>
      <PlayerAmountPicker
        selectedValue={playerCount.toString()}
        handleAmountChange={handleAmountChange}
      />
      {noCardsRolled ? (
        <EmptyHint>Tab button to draw new basic nemesis cards!</EmptyHint>
      ) : (
        <>
          <Tier
            title="Tier 1"
            basicNemesisCards={randomBasicNemesisCards.Tier1}
          />
          <Tier
            title="Tier 2"
            basicNemesisCards={randomBasicNemesisCards.Tier2}
          />
          <Tier
            title="Tier 3"
            basicNemesisCards={randomBasicNemesisCards.Tier3}
          />
        </>
      )}

      <ShuffleButton
        onClick={handleRandomization}
        color="primary"
        variant="extended"
        withBottomNav={true}
      >
        Draw basic nemesis cards
      </ShuffleButton>
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BasicNemesisCards))
