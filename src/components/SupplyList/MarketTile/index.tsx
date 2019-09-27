import React from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'

import * as types from '../../../types'

import { RootState, selectors } from '../../../Redux/Store'
import { getOperationString } from '../../../Redux/helpers'

import SupplyShowDetailsButton from './SupplyShowDetailsButton'

import Card from './Card'
import CardContent from './CardContent'
import CardName from './CardName'
import CardTypeIcon from './CardTypeIcon'
import CostInfo from './CostInfo'
import CostOperation from './CostOperation'
import ExpansionInfo from './ExpansionInfo'

// FIXME fix prop type
const mapStateToProps = (state: RootState, props: any) => ({
  expansion:
    selectors.Settings.Expansions.SelectedExpansions.getExpansionById(
      state,
      props.marketTile.expansion
    ) || null,
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    marketTile: {
      id?: string
      type: types.CardType
      expansion?: string
      name?: string
      cost?: number
      operation?: types.Operation
      threshold?: number
      values?: Array<number>
    }
    showSupplyDetails?: Function
  }

const MarketTile = React.memo(
  ({ marketTile, expansion, showSupplyDetails, ...rest }: Props) => {
    const { type, operation, values, threshold } = marketTile

    return (
      <Grid item xs={6} md={4} {...rest}>
        <Card type={type.toLowerCase()}>
          <CardContent>
            {operation && (
              <CostOperation color="textSecondary">
                {type} {getOperationString(operation, values, threshold)}
              </CostOperation>
            )}
            <CardName component="p">
              {marketTile && marketTile.name ? marketTile.name : '-'}
            </CardName>
            <List>
              <ExpansionInfo expansionName={expansion ? expansion.name : ''} />
              <CostInfo
                cost={
                  marketTile && marketTile.cost ? marketTile.cost : undefined
                }
              />
            </List>
          </CardContent>
          <CardTypeIcon type={type.toLowerCase()} />
          {showSupplyDetails && marketTile.name ? (
            <SupplyShowDetailsButton
              onClick={() => showSupplyDetails(marketTile.id)}
            />
          ) : null}
        </Card>
      </Grid>
    )
  }
)

MarketTile.displayName = 'MarketTile'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketTile)
