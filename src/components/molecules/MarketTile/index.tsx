import React, { useContext, useCallback } from 'react'
import { connect } from 'react-redux'

import { withTheme } from 'styled-components/macro'

import { RootState, selectors } from '../../../Redux/Store'
import * as types from '../../../types'

import Tile from '../Tile'
import { SelectionHandlerContext } from '../SupplySelection'

import Wrapper from './Wrapper'
import Body from './Body'

const mapStateToProps = (state: RootState) => ({
  selectedExpansions: selectors.Settings.Expansions.SelectedExpansions.getSelectedExpansionsState(
    state
  ),
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
      visualSelection?: boolean
    }
    showSupplyDetails: (e: Event, id: string) => void
    theme: any
  }

const MarketTile = React.memo(
  ({
    marketTile,
    selectedExpansions,
    showSupplyDetails,
    theme,
    ...rest
  }: Props) => {
    const { expansions } = selectedExpansions
    const { selectionHandler, listId } = useContext(SelectionHandlerContext)
    const handleSelection = useCallback(() => {
      selectionHandler({ supplyCardId: marketTile.id, listId })
    }, [selectionHandler, marketTile, listId])

    const handleDetails = useCallback(
      (e: Event) => {
        showSupplyDetails(e, marketTile.id || '')
      },
      [marketTile.id, showSupplyDetails]
    )

    return (
      <Wrapper item xs={6} md={4} {...rest}>
        {marketTile && (
          <Tile
            clickHandler={handleSelection}
            selected={marketTile.visualSelection}
            body={
              <Body
                supplyCard={marketTile}
                expansionName={
                  marketTile.expansion
                    ? expansions[marketTile.expansion].name
                    : ''
                }
              />
            }
            bgColor={
              theme.colors.cards[marketTile.type.toLowerCase()].background
            }
            fontColor={theme.colors.text.primary}
            icon={theme.icons[marketTile.type.toLowerCase()]}
            iconColor={theme.colors.cards[marketTile.type.toLowerCase()].color}
            showDetails={handleDetails}
            hideShowDetailsButton={
              showSupplyDetails && marketTile.name ? false : true
            }
          />
        )}
      </Wrapper>
    )
  }
)

MarketTile.displayName = 'MarketTile'

export default withTheme(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MarketTile)
)
