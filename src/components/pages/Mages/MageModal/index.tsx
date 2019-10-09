import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

import { Mage, ICard } from '../../../../types'

import Modal from '../../../Modal'

import MageTitleInfo from './MageTitleInfo'
import DescriptionMage from './DescriptionMage'
import Ability from './Ability'
import ExpansionInfo from './ExpansionInfo'
import ChargesInfo from './ChargesInfo'
import ComplexityInfo from './ComplexityInfo'
import SectionHeadline from './SectionHeadline'
import UniqueStarter from './UniqueStarter'
import UniqueStartersWrapper from './UniqueStartersWrapper'

import Grid from '@material-ui/core/Grid'

// FIXME refine type
const mapStateToProps = (state: RootState, props: any) => ({
  mage: selectors.Settings.Expansions.SelectedMages.getMageById(state, props),
  selectedExpansions: selectors.Settings.Expansions.SelectedExpansions.getSelectedExpansionsState(
    state
  ),
})

// FIXME types
type Props = ReturnType<typeof mapStateToProps> & {
  id: string
  player: 'player1' | 'player2' | 'player3' | 'player4'
  visible: boolean
  closeModal: any
  selectedExpansions: any
  theme: any
}

const MageModal = React.memo(
  ({ player, visible, closeModal, mage, selectedExpansions, theme }: Props) => {
    const { expansions } = selectedExpansions

    const renderUniqueStarters = (uniqueStarters: ICard[]) => {
      return uniqueStarters.map((card: ICard) => (
        <UniqueStartersWrapper item xs={12} sm={6} key={card.id}>
          <UniqueStarter card={card} />
        </UniqueStartersWrapper>
      ))
    }

    // FIXME fix hardcoded playernumbers

    const renderMageModalBody = (mage: Mage) => (
      <React.Fragment>
        <MageTitleInfo title={mage.mageTitle} />
        <ExpansionInfo expansion={expansions[mage.expansion].name} />
        <ChargesInfo charges={mage.numberOfCharges} />
        {mage.complexityRating ? (
          <ComplexityInfo complexity={mage.complexityRating} />
        ) : null}

        <Ability>
          <DescriptionMage
            playerNumber={1}
            dangerouslySetInnerHTML={{
              __html: mage.ability,
            }}
          />
        </Ability>

        <SectionHeadline playerNumber={1}>Unique Starters</SectionHeadline>

        {mage.uniqueStarters ? (
          <Grid container spacing={16}>
            {renderUniqueStarters(mage.uniqueStarters)}
          </Grid>
        ) : null}
      </React.Fragment>
    )

    return (
      <Modal
        visible={visible}
        titleColor={theme.colors.playerColors[player].normal}
        titleLabel={mage.name}
        body={mage ? renderMageModalBody(mage) : 'No content'}
        closeModal={closeModal}
      />
    )
  }
)

export default withTheme(
  connect(
    mapStateToProps,
    null
  )(MageModal)
)
