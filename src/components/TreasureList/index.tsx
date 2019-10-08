import React from 'react'

import Card from '../Card'

import * as types from '../../types'

const renderTreasures = (treasures: types.Treasure[]) =>
  treasures.map(treasure => (
    <Card>
      <p>
        <b>Expansion:</b> {treasure.expansion}
      </p>
      <p>
        <b>Name:</b> {treasure.name}
      </p>
      <p>
        <b>TreasureLevel:</b> {treasure.level}
      </p>
      {treasure.subtype && (
        <p>
          <b>Subtype:</b> {treasure.subtype}
        </p>
      )}
      <div dangerouslySetInnerHTML={{ __html: treasure.effect }} />
    </Card>
  ))

type Props = {
  treasures: types.Treasure[]
}

const TreasureList = React.memo(({ treasures }: Props) => (
  <div>{renderTreasures(treasures)}</div>
))

export default TreasureList
