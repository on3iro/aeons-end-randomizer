import React from 'react'
import Grid from '@material-ui/core/Grid'

import * as types from 'aer-types/types'

import UpgradedBasicNemesisCardTile from './UpgradedBasicNemesisCardTile'
import UpgradedBasicNemesisCardGridWrapper from './UpgradedBasicNemesisCardGridWrapper'

const renderUpgradedBasicNemesisCards = (
  upgradedBasicNemsisCards: types.UpgradedBasicNemesisCard[]
) =>
  upgradedBasicNemsisCards.map((upgradedBasicNemsisCard) => (
    <UpgradedBasicNemesisCardTile
      key={upgradedBasicNemsisCard.id}
      nemesisCard={upgradedBasicNemsisCard}
    />
  ))

type Props = {
  upgradedBasicNemsisCards: types.UpgradedBasicNemesisCard[]
}

const UpgradedBasicNemesisCardList = ({ upgradedBasicNemsisCards }: Props) => (
  <UpgradedBasicNemesisCardGridWrapper>
    <Grid container spacing={16}>
      {renderUpgradedBasicNemesisCards(upgradedBasicNemsisCards)}
    </Grid>
  </UpgradedBasicNemesisCardGridWrapper>
)

export default React.memo(UpgradedBasicNemesisCardList)
