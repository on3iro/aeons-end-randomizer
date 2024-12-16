import React from 'react'
import Grid from '@material-ui/core/Grid'

import * as types from 'aer-types/types'

import NemesisCardTile from 'components/molecules/NemesisCardTile'
import BasicNemesisCardGridWrapper from './BasicNemesisCardGridWrapper'

const renderBasicNemesisCards = (
  basicNemesisCards: ReadonlyArray<types.BasicNemesisCard>
) =>
  basicNemesisCards.map((basicNemesisCard) => (
    <NemesisCardTile
      key={basicNemesisCard.id}
      nemesisCard={basicNemesisCard}
    />
  ))

type Props = {
  basicNemesisCards: ReadonlyArray<types.BasicNemesisCard>
}

const BasicNemesisCardList = React.memo(({ basicNemesisCards }: Props) => (
  <BasicNemesisCardGridWrapper>
    <Grid container spacing={16}>
      {renderBasicNemesisCards(basicNemesisCards)}
    </Grid>
  </BasicNemesisCardGridWrapper>
))

export default BasicNemesisCardList
