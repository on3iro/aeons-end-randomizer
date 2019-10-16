import React from 'react'

import * as types from '../../../types'

import Card from '../../atoms/Card'

const renderUpgradedBasicNemesisCards = (
  upgradedBasicNemsisCards: types.UpgradedBasicNemesisCard[]
) =>
  upgradedBasicNemsisCards.map(upgradedBasicNemsisCard => (
    <Card>
      <p>
        <b>Expansion:</b> {upgradedBasicNemsisCard.expansion}
      </p>
      <p>
        <b>Name:</b> {upgradedBasicNemsisCard.name}
      </p>
      <p>
        <b>UpgradedBasicNemesisCardLevel:</b> {upgradedBasicNemsisCard.tier}
      </p>
      {upgradedBasicNemsisCard.type && (
        <p>
          <b>Type:</b> {upgradedBasicNemsisCard.type}
        </p>
      )}
    </Card>
  ))

type Props = {
  upgradedBasicNemsisCards: types.UpgradedBasicNemesisCard[]
}

const UpgradedBasicNemesisCardList = React.memo(
  ({ upgradedBasicNemsisCards }: Props) => (
    <div>{renderUpgradedBasicNemesisCards(upgradedBasicNemsisCards)}</div>
  )
)

export default UpgradedBasicNemesisCardList
