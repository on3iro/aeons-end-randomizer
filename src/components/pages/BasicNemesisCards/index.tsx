import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import { PlayerCount } from 'Redux/Store/Randomizer/BasicNemesisCards/PlayerCount'

import NoSelectedExpansions from 'components/molecules/NoSelectedExpansions'
import ShuffleButton from 'components/atoms/ShuffleButton'
import SectionHeadline from 'components/atoms/SectionHeadline'

import EmptyHint from './EmptyHint'
import BasicNemesisCardList from './BasicNemesisCardList'
import PlayerAmountPicker from './PlayerAmountPicker'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.SelectedExpansions.getHasStandaloneExpansion(
    state
  ),
  availableBasicNemesisCards: selectors.Settings.Expansions.getSelectedBasicNemesisCardsForSelectedExpansions(
    state
  ),
  randomBasicNemesisCards: selectors.Randomizer.BasicNemesisCards.RandomCards.getBasicNemesisCards(
    state
  ),
  playerCount: selectors.Randomizer.BasicNemesisCards.PlayerCount.getCount(
    state
  ),
})

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

  return (
    <React.Fragment>
      <PlayerAmountPicker
        selectedValue={playerCount.toString()}
        handleAmountChange={handleAmountChange}
      />
      {randomBasicNemesisCards.Tier1 && (
        <React.Fragment>
          <SectionHeadline>Tier 1</SectionHeadline>
          <BasicNemesisCardList
            basicNemesisCards={randomBasicNemesisCards.Tier1 || []}
          />
        </React.Fragment>
      )}
      {randomBasicNemesisCards.Tier2 && (
        <React.Fragment>
          <SectionHeadline>Tier 2</SectionHeadline>
          <BasicNemesisCardList
            basicNemesisCards={randomBasicNemesisCards.Tier2 || []}
          />
        </React.Fragment>
      )}
      {randomBasicNemesisCards.Tier3 && (
        <React.Fragment>
          <SectionHeadline>Tier 3</SectionHeadline>
          <BasicNemesisCardList
            basicNemesisCards={randomBasicNemesisCards.Tier3 || []}
          />
        </React.Fragment>
      )}
      {(randomBasicNemesisCards.Tier1 === null ||
        randomBasicNemesisCards.Tier2 === null ||
        randomBasicNemesisCards.Tier3 === null) && (
        <EmptyHint>Tab button to draw new basic nemesis cards!</EmptyHint>
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
