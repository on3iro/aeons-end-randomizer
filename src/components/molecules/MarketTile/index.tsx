import React, { useContext, useCallback } from 'react'
import { connect } from 'react-redux'

import { withTheme } from 'styled-components/macro'

import { RootState, selectors } from '../../../Redux/Store'
import * as types from '../../../types'
import { useModal } from '../../../hooks/useModal'

import Tile from '../Tile'
import { SelectionHandlerContext } from '../SupplySelection'
import SupplyModal from '../SupplyModal'

import Wrapper from './Wrapper'
import Body from './Body'

// FIXME
// This is currently a typing hack
// We ensure that our modal will only be shown
const getCard = (marketTile: {
  type?: types.CardType
  name?: string
  expansion?: string
  cost?: number
  keywords?: string[]
  effect?: string
  selected?: boolean
}):
  | {
      type: types.CardType
      name: string
      expansion: string
      cost: number
      keywords: string[]
      effect: string
      selected: boolean
    }
  | undefined => {
  const { type, name, expansion, cost, keywords, effect, selected } = marketTile
  return type &&
    name &&
    expansion &&
    cost &&
    keywords &&
    effect !== undefined &&
    selected !== undefined
    ? {
        type,
        name,
        expansion,
        cost,
        keywords,
        effect,
        selected,
      }
    : undefined
}

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
      effect?: string
      keywords?: string[]
      cost?: number
      operation?: types.Operation
      threshold?: number
      values?: Array<number>
      visualSelection?: boolean
    }
    theme: any
  }

const MarketTile = React.memo(
  ({ marketTile, selectedExpansions, theme, ...rest }: Props) => {
    const { expansions } = selectedExpansions
    const { show, RenderModal } = useModal()

    const { selectionHandler, listId } = useContext(SelectionHandlerContext)
    const handleSelection = useCallback(() => {
      selectionHandler({ supplyCardId: marketTile.id, listId })
    }, [selectionHandler, marketTile, listId])

    const handleDetails = useCallback(
      (e: Event) => {
        e.stopPropagation()
        show()
      },
      [show]
    )

    const card = getCard(marketTile)

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
            showDetails={card ? handleDetails : undefined}
          />
        )}
        {card && <SupplyModal card={card} RenderModal={RenderModal} />}
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
