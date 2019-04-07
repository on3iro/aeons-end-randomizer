import React, { useState } from 'react'
import { connect } from 'react-redux'

import { ICreature } from '../../../types'

import { RootState, actions, selectors } from '../../../Redux/Store'
import { MageCount } from '../../../Redux/Store/Mages/Count'

import MageCountPicker from './MageCountPicker'
import MageList from './MageList'
import EmptyMageListHint from './EmptyMageListHint'
import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.Selected.getHasStandaloneSet(
    state
  ),
  selectedExpansions: selectors.Settings.Expansions.Selected.getSelectedExpansionsArray(
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
    selectedExpansions,
    mageCount,
    setMageCount,
    setMages,
    mages,
  }: Props) => {
    if (!hasStandaloneExpansionSelected) {
      return <NoSelectedExpansions />
    }

    const handleShuffle = () => {
      setMages(selectedExpansions, mageCount)
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
