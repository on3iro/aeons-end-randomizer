import React from 'react'
import { connect } from 'react-redux'
import { withTheme } from 'styled-components/macro'

import { Boon, Friend, FriendOrFoeAttack, ICard, } from 'aer-types/types'
import { RootState, selectors } from 'Redux/Store'

import InfoItem from '../InfoItem'

import AbilityText from '../../atoms/AbilityText'
import SectionHeadline from '../../atoms/SectionHeadline'

import Grid from '@material-ui/core/Grid'
import FriendOrFoeAttackTile from '../FriendOrFoeAttackTile'
import UniqueStarter from '../UniqueStarter'

const renderFriendCards = (friendCards: FriendOrFoeAttack[]) => {
  return friendCards.map((card: FriendOrFoeAttack) => (
    <FriendOrFoeAttackTile key={card.id} card={card} type="friend" />
  ))
}
const renderExtraCards = (friendCards: (ICard | Boon)[]) => {
  return friendCards.map((card : (ICard | Boon)) => {
    if (card.type === 'Boon') {
      return <></>
    } else {
      return <UniqueStarter key={card.id} card={card}></UniqueStarter>
    }
  })
}

type OwnProps = {
  friend: Friend
  theme: any
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const expansion = ownProps.friend
    ? selectors.Settings.Expansions.Expansions.content.getExpansionById(state, {
        expansionId: ownProps.friend.expansion,
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

const FriendInformation = ({ friend, expansion, theme }: Props) => {
  if (!friend || !expansion) {
    return null
  }
  return (<React.Fragment>
    <InfoItem label="Title" info={friend.name} />
    <InfoItem label="Expansion" info={expansion.name} />
    <InfoItem label="Wave" info={expansion.wave || '-'} />
    <InfoItem
      label="Charges"
      info={friend.charges.toString()}
    />

    <AbilityText
      isMage={true}
      themeColor={theme.colors.cards.friend.color}
    >
      <h2>{friend.abilityName}</h2>
      <p dangerouslySetInnerHTML={{
        __html: friend.abilityEffect,
      }} />
    </AbilityText>

    <SectionHeadline
      themeColor={theme.colors.cards.friend.color}
    >
      Friend Deck
    </SectionHeadline>

    <Grid container spacing={16}>
      {renderFriendCards(friend.deck)}
    </Grid>
    {friend.extraCards && <>
        <SectionHeadline
          themeColor={theme.colors.cards.friend.color}
        >
          Extra Cards
        </SectionHeadline>

        <Grid container spacing={16}>
          {renderExtraCards(friend.extraCards)}
        </Grid>
      </>
    }

    
  </React.Fragment>)
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(React.memo(FriendInformation)))
