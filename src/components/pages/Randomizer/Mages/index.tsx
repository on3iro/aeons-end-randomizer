import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import { MageCount } from 'Redux/Store/Randomizer/Mages/Count'

import MageList from 'components/molecules/MageList'
import NoSelectedExpansions from 'components/molecules/NoSelectedExpansions'
import ShuffleButton from 'components/atoms/ShuffleButton'

import MageCountPicker from './MageCountPicker'
import EmptyMageListHint from './EmptyMageListHint'

const mapStateToProps = (state: RootState) => {
  const mageIds = selectors.Randomizer.Mages.Recruited.getMages(state)

  return {
    hasStandaloneExpansionSelected: selectors.Settings.Expansions.Expansions.getHasStandaloneExpansion(
      state
    ),
    availableMages: selectors.Settings.Expansions.getSelectedMagesForSelectedExpansions(
      state
    ),
    mageCount: selectors.Randomizer.Mages.Count.getCount(state),
    mages: mageIds.map(mageId =>
      selectors.Settings.Expansions.Mages.content.getById(state, {
        id: mageId.id,
      })
    ),
  }
}

const mapDispatchToProps = {
  setMageCount: actions.Randomizer.Mages.Count.setCount,
  setMages: actions.Randomizer.Mages.Recruited.setRandomMages,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Mages = ({
  hasStandaloneExpansionSelected,
  availableMages,
  mageCount,
  setMageCount,
  setMages,
  mages,
}: Props) => {
  if (!hasStandaloneExpansionSelected) {
    return <NoSelectedExpansions />
  }

  const handleShuffle = () => {
    setMages(availableMages, mageCount)
  }

  const noMagesGeneratedYet = mages.length === 0

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMageCount(parseInt(e.currentTarget.value) as MageCount)
  }

  return (
    <React.Fragment>
      <MageCountPicker
        selectedValue={mageCount.toString()}
        handleAmountChange={handleAmountChange}
      />
      {noMagesGeneratedYet ? (
        <EmptyMageListHint>Tap button to recruit mages</EmptyMageListHint>
      ) : (
        <MageList mages={mages} />
      )}
      <ShuffleButton
        onClick={handleShuffle}
        color="primary"
        variant="extended"
        withBottomNav={true}
      >
        Recruit Mages
      </ShuffleButton>
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Mages))
