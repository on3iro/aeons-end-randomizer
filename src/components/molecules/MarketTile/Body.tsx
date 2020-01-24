import React from 'react'

import * as types from '../../../types'
import { getOperationString } from '../../../Redux/helpers'

import InfoItem from '../InfoItem'
import TileNameBold from 'components/atoms/_styled_/TileNameBold'
import List from 'components/atoms/_styled_/List'

import BodyWrapper from './_styled_/BodyWrapper'
import CostOperation from './CostOperation'

type Props = {
  supplyCard: {
    id?: string
    type: types.CardType
    expansion?: string
    name?: string
    cost?: number
    operation?: types.Operation
    threshold?: number
    values?: Array<number>
  }
  expansionName: string
}

const Body = React.memo(({ supplyCard, expansionName }: Props) => {
  const { type, operation, values, threshold } = supplyCard

  return (
    <BodyWrapper>
      {operation && (
        <CostOperation>
          {type} {getOperationString(operation, values, threshold)}
        </CostOperation>
      )}
      <TileNameBold>
        {supplyCard && supplyCard.name ? supplyCard.name : '-'}
      </TileNameBold>
      <List>
        <InfoItem
          label="Set"
          info={expansionName !== '' ? expansionName : '-'}
        />
        <InfoItem
          label="Cost"
          info={
            supplyCard && supplyCard.cost ? supplyCard.cost.toString() : '-'
          }
        />
      </List>
    </BodyWrapper>
  )
})

export default Body
