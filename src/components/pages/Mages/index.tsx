import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'
import { MageCount } from '../../../Redux/Store/Mages/Count'
import { useModal } from '../../Modal'

import MageCountPicker from './MageCountPicker'
import MageList from '../../MageList'
import EmptyMageListHint from './EmptyMageListHint'

import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

import MageModal from './MageModal'

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

    const { show, renderModal } = useModal()
    const [modalContentId, setModalContentId] = useState<string>('')
    const [modalPlayerNumber, setModalPlayerNumber] = useState<number>(1)

    const handleMageDetails = (mageId: string, playerNumber: number) => {
      show()
      setModalContentId(mageId)
      setModalPlayerNumber(playerNumber)
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
          <MageList mages={mages} showMageDetails={handleMageDetails} />
        )}
        <ShuffleButton
          onClick={handleShuffle}
          color="primary"
          variant="extended"
        >
          Recruit Mages
        </ShuffleButton>
        <MageModal
          id={modalContentId}
          player={`player${modalPlayerNumber}`}
          renderModal={renderModal}
        />
      </React.Fragment>
    )
  }
)

Mages.displayName = 'Mages'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mages)
