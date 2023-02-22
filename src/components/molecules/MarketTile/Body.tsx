import React from 'react'

import * as types from 'aer-types/types'
import { getOperationString } from '../../../Redux/helpers'

import InfoItem from '../InfoItem'

import Name from './Name'
import CostOperation from './CostOperation'

import List from '@material-ui/core/List'

type Props = {
  supplyCard: {
    id?: string | number
    type: types.CardType
    expansion?: string
    name?: string
    cost?: number
    operation?: types.Operation
    threshold?: number
    values?: Array<number>
  }
  expansion: types.Expansion | null
}

const Body = ({ supplyCard, expansion }: Props) => {
  const { type, operation, values, threshold } = supplyCard

  return (
    <React.Fragment>
      {operation && (
        <CostOperation color="textSecondary">
          {type} {getOperationString(operation, values, threshold)}
        </CostOperation>
      )}
      <Name component="p">
        {supplyCard && supplyCard.name ? supplyCard.name : '-'}
      </Name>
      <List>
        <InfoItem label="Set" info={expansion ? expansion.name : '-'} />
        <InfoItem
          label="Wave"
          info={expansion && expansion.wave ? expansion.wave : '-'}
        />
        <InfoItem
          label="Cost"
          info={
            supplyCard && supplyCard.cost ? supplyCard.cost.toString() : '-'
          }
          data-test="market-tile-cost"
        />
      </List>
    </React.Fragment>
  )
}

export default React.memo(Body)
