import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'
import { MageCount } from '../../../Redux/Store/Mages/Count'

import MageList from '../../molecules/MageList'
import NoSelectedExpansions from '../../molecules/NoSelectedExpansions'

import ShuffleButton from '../../atoms/ShuffleButton'

import MageCountPicker from './MageCountPicker'
import EmptyMageListHint from './EmptyMageListHint'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.SelectedExpansions.getHasStandaloneExpansion(
    state
  ),
  availableMages: selectors.Settings.Expansions.getSelectedMagesForSelectedExpansions(
    state
  ),
  mageCount: selectors.Mages.Count.getCount(state),
  mages: selectors.Mages.Recruited.getMages(state),
})

const mapDispatchToProps = {
  setMageCount: actions.Mages.Count.setCount,
  setMages: actions.Mages.Recruited.setRandomMages,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Mages = React.memo(
  ({
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
)

Mages.displayName = 'Mages'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mages)
