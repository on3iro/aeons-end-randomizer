import React from 'react'
import { withTheme } from 'styled-components/macro'

import { Mage, ICard, Expansion } from 'aer-types/types'

import InfoItem from '../InfoItem'

import AbilityText from '../../atoms/AbilityText'
import SectionHeadline from '../../atoms/SectionHeadline'

import UniqueStarter from '../UniqueStarter'

import Grid from '@material-ui/core/Grid'

const renderUniqueStarters = (uniqueStarters: ICard[]) => {
  return uniqueStarters.map((card: ICard) => (
    <UniqueStarter key={card.id} card={card} />
  ))
}

type Props = {
  mage: Mage
  player: 'player1' | 'player2' | 'player3' | 'player4'
  expansion: Expansion
  theme: any
}

function formatCharges(
  numberOfCharges: number | 'Custom',
  numberOfOvercharges?: number
): string {
  return `${numberOfCharges}${
    numberOfOvercharges ? ` + ${numberOfOvercharges}` : ''
  }`
}

const MageInformation = ({ mage, player, expansion, theme }: Props) => (
  <React.Fragment>
    <InfoItem label="Title" info={mage.mageTitle} />
    <InfoItem label="Expansion" info={expansion.name} />
    <InfoItem label="Wave" info={expansion.wave || '-'} />
    <InfoItem
      label="Charges"
      info={formatCharges(mage.numberOfCharges, mage.numberOfOvercharges)}
    />
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

export default withTheme(React.memo(MageInformation))
