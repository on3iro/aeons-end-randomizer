import React from 'react'
import { connect } from 'react-redux'
import { withTheme } from 'styled-components/macro'

import { Foe, FriendOrFoeAttack, ICard, INemesisCard } from 'aer-types/types'
import { RootState, selectors } from 'Redux/Store'

import InfoItem from '../InfoItem'

import AbilityText from '../../atoms/AbilityText'
import SectionHeadline from '../../atoms/SectionHeadline'

import Grid from '@material-ui/core/Grid'
import FriendOrFoeAttackTile from '../FriendOrFoeAttackTile'
import UniqueStarter from '../UniqueStarter'
import NemesisCardTile from '../NemesisCardTile'

const renderFoeCards = (foeCards: FriendOrFoeAttack[]) => {
  return foeCards.map((card: FriendOrFoeAttack) => (
    <FriendOrFoeAttackTile key={card.id} card={card} type="foe" />
  ))
}
const renderExtraCards = (foeCards: (ICard | INemesisCard)[]) => {
  return foeCards.map((card : (ICard | INemesisCard)) => {
    if ('cost' in card) {
      return <UniqueStarter key={card.id} card={card}></UniqueStarter>
    } else {
      return <NemesisCardTile key={card.id} nemesisCard={card} inline={true} />
    }
  })
}

type OwnProps = {
  foe: Foe
  theme: any
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const expansion = ownProps.foe
    ? selectors.Settings.Expansions.Expansions.content.getExpansionById(state, {
        expansionId: ownProps.foe.expansion,
      })
    : null

  return {
    expansion,
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const FoeInformation = ({ foe, expansion, theme }: Props) => {
  if (!foe || !expansion) {
    return null
  }
  return (<React.Fragment>
    <InfoItem label="Title" info={foe.name} />
    <InfoItem label="Expansion" info={expansion.name} />
    <InfoItem label="Wave" info={expansion.wave || '-'} />
    <InfoItem
      label="Charges"
      info={foe.charges.toString()}
    />

    <AbilityText
      isMage={true}
      themeColor={theme.colors.cards.foe.color}
    >
      <h2>{foe.abilityName}</h2>
      <p dangerouslySetInnerHTML={{
        __html: foe.abilityEffect,
      }} />
    </AbilityText>

    <SectionHeadline
      themeColor={theme.colors.cards.foe.color}
    >
      Foe Deck
    </SectionHeadline>

    <Grid container spacing={16}>
      {renderFoeCards(foe.deck)}
    </Grid>
    {foe.extraCards && <>
        <SectionHeadline
          themeColor={theme.colors.cards.foe.color}
        >
          Extra Cards
        </SectionHeadline>

        <Grid container spacing={16}>
          {renderExtraCards(foe.extraCards)}
        </Grid>
      </>
    }

    
  </React.Fragment>)
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(React.memo(FoeInformation)))
