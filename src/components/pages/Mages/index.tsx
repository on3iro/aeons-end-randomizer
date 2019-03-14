import React, { useState } from 'react'
import { connect } from 'react-redux'

import { ICreature } from '../../../types'

import { RootState } from '../../../Redux/Store'
import * as SelectedExpansions from '../../../Redux/Store/Settings/Expansions/Selected'
import * as MageCount from '../../../Redux/Store/Mages/Count'
import * as RecruitedMages from '../../../Redux/Store/Mages/Recruited'

import MageCountPicker from './MageCountPicker'
import MageList from './MageList'
import EmptyMageListHint from './EmptyMageListHint'
import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'


const Mages = React.memo(({
  hasStandaloneExpansionSelected,
  selectedExpansions,
  mageCount,
  setMageCount,
  setMages,
  mages,
}: {
  hasStandaloneExpansionSelected: boolean,
  selectedExpansions: ReadonlyArray<string>,
  mageCount: MageCount.MageCount,
  setMageCount: (count: MageCount.MageCount) => MageCount.Action,
  setMages: (expansions: ReadonlyArray<string>, count: MageCount.MageCount) => RecruitedMages.Action,
  mages: ReadonlyArray<ICreature>
}) => {
  if (!hasStandaloneExpansionSelected) {
    return <NoSelectedExpansions />
  }

  const handleShuffle = () => {
    setMages(selectedExpansions, mageCount)
  }

  const noMagesGeneratedYet = mages.length === 0

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMageCount(parseInt(e.currentTarget.value) as MageCount.MageCount)
  }

  return (
    <React.Fragment>
      <MageCountPicker
        selectedValue={mageCount.toString()}
        handleAmountChange={handleAmountChange}
      />
      {
        noMagesGeneratedYet
          ? <EmptyMageListHint>Tap button to recruit mages</EmptyMageListHint>
          : <MageList mages={mages} />
      }
      <ShuffleButton
        onClick={handleShuffle}
        color="primary" 
        variant="extended"
      >
        Recruit Mages
      </ShuffleButton>
    </React.Fragment>
  )
})

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: SelectedExpansions.selectors.getHasStandaloneSet(state),
  selectedExpansions: SelectedExpansions.selectors.getSelectedExpansionsArray(state),
  mageCount: MageCount.selectors.getCount(state),
  mages: RecruitedMages.selectors.getMages(state),
})

const mapDispatchToProps = {
  setMageCount: MageCount.actions.setCount,
  setMages: RecruitedMages.actions.setRandomMages,
}

export default connect(mapStateToProps, mapDispatchToProps)(Mages)
