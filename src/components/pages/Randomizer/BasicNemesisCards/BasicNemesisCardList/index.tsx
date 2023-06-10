import React from 'react'
import Grid from '@material-ui/core/Grid'

import * as types from 'aer-types/types'

import BasicNemesisCardTile from './BasicNemesisCardTile'
import BasicNemesisCardGridWrapper from './BasicNemesisCardGridWrapper'

const renderBasicNemesisCards = (
  basicNemesisCards: ReadonlyArray<types.BasicNemesisCard>
) =>
  basicNemesisCards.map((basicNemesisCard) => (
    <BasicNemesisCardTile
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
