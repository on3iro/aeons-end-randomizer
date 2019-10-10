import React from 'react'
import { withTheme } from 'styled-components/macro'

import { Mage, ICard } from '../../../../types'

import InfoItem from '../../../InfoItem'
import AbilityText from '../../../AbilityText'
import SectionHeadline from '../../../SectionHeadline'

import UniqueStarter from './UniqueStarter'
import UniqueStartersWrapper from './UniqueStartersWrapper'

import Grid from '@material-ui/core/Grid'

const renderUniqueStarters = (uniqueStarters: ICard[]) => {
  return uniqueStarters.map((card: ICard) => (
    <UniqueStartersWrapper item xs={12} sm={6} key={card.id}>
      <UniqueStarter card={card} />
    </UniqueStartersWrapper>
  ))
}

type Props = {
  mage: Mage
  player: 'player1' | 'player2' | 'player3' | 'player4'
  expansionName: string
  theme: any
}

const Body = ({ mage, player, expansionName, theme }: Props) => (
  <React.Fragment>
    <InfoItem label="Title" info={mage.mageTitle} />
    <InfoItem label="Expansion" info={expansionName} />
    <InfoItem label="Charges" info={mage.numberOfCharges.toString()} />
    {mage.complexityRating ? (
      <InfoItem label="Complexity" info={mage.complexityRating.toString()} />
    ) : null}

    <AbilityText
      isMage={true}
      themeColor={
        player
          ? theme.colors.playerColors[player].normal
          : theme.colors.playerColors['player1'].normal
      }
      dangerouslySetInnerHTML={{
        __html: mage.ability,
      }}
    />

    <SectionHeadline
      themeColor={
        player
          ? theme.colors.playerColors[player].normal
          : theme.colors.playerColors['player1'].normal
      }
    >
      Unique Starters
    </SectionHeadline>

    {mage.uniqueStarters ? (
      <Grid container spacing={16}>
        {renderUniqueStarters(mage.uniqueStarters)}
      </Grid>
    ) : null}
  </React.Fragment>
)

export default withTheme(Body)
