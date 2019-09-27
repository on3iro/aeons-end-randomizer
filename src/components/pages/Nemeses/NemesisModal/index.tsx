import React from 'react'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

import { Nemesis } from '../../../../types'

import Modal from '../../../Modal'

import Title from './Title'
import HealthInfo from './HealthInfo'
import DifficultyInfo from './Difficulty'
import ExpansionInfo from './ExpansionInfo'
import ExpeditionTierInfo from './ExpeditionTierInfo'
import SectionHeadline from './SectionHeadline'
import AdditionalInfo from './AdditionalInfo'

// FIXME refine type
const mapStateToProps = (state: RootState, props: any) => ({
  nemesis: selectors.Settings.Expansions.SelectedNemeses.getNemesisById(
    state,
    props
  ),
  selectedExpansions: selectors.Settings.Expansions.SelectedExpansions.getSelectedExpansionsState(
    state
  ),
})

type Props = ReturnType<typeof mapStateToProps> & {
  id: string
  visible: boolean | string
  closeModal: any
  selectedExpansions: any
}

const NemesisModal = React.memo(
  ({ visible, closeModal, nemesis, selectedExpansions }: Props) => {
    const { expansions } = selectedExpansions

    const renderNemesisModalTitle = (nemesis: Nemesis) => (
      <Title variant="h1">{nemesis.name}</Title>
    )

    const renderNemesisModalBody = (nemesis: Nemesis) => (
      <React.Fragment>
        <ExpansionInfo
          expansion={
            nemesis.expansion ? expansions[nemesis.expansion].name : ''
          }
        />
        <HealthInfo health={nemesis.health} />
        <DifficultyInfo difficulty={nemesis.difficulty} />
        <ExpeditionTierInfo expeditionTier={nemesis.expeditionRating} />
        {nemesis.additionalInfo ? (
          <React.Fragment>
            <SectionHeadline>Additional Information</SectionHeadline>
            <AdditionalInfo
              dangerouslySetInnerHTML={{
                __html: nemesis.additionalInfo,
              }}
            />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    )

    return (
      <Modal
        visible={visible}
        title={nemesis ? renderNemesisModalTitle(nemesis) : 'No title'}
        body={nemesis ? renderNemesisModalBody(nemesis) : 'No content'}
        closeModal={closeModal}
      />
    )
  }
)

export default connect(
  mapStateToProps,
  null
)(NemesisModal)
