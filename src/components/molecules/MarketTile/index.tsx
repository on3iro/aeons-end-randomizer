import React, { useContext, useCallback } from 'react'
import { connect } from 'react-redux'

import { withTheme } from 'styled-components/macro'

import { RootState, selectors } from 'Redux/Store'
import * as types from 'aer-types'
import { useModal } from 'hooks/useModal'

import Tile from '../Tile'
import { SelectionHandlerContext } from '../SupplySelection'
import SupplyModal from '../SupplyModal'

import Wrapper from './Wrapper'
import Body from './Body'

// FIXME
// This is currently a typing hack
// We ensure that our modal will only be shown
type MaybeMarketTile =
  | {
      type?: types.CardType
      name?: string
      expansion?: string
      cost?: number
      keywords?: string[]
      effect?: string
    }
  | undefined

type MaybeOutputMarketTile =
  | {
      type: types.CardType
      name: string
      expansion: string
      cost: number
      keywords: string[]
      effect: string
    }
  | undefined

const getCard = (marketTile: MaybeMarketTile): MaybeOutputMarketTile => {
  if (!marketTile) {
    return undefined
  }

  const { type, name, expansion, cost, keywords, effect } = marketTile

  return type && name && expansion && cost && keywords && effect !== undefined
    ? {
        type,
        name,
        expansion,
        cost,
        keywords,
        effect,
      }
    : undefined
}

const mapStateToProps = (state: RootState) => ({
  expansions: selectors.Settings.Expansions.Expansions.content.getContent(
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

const MarketTile = ({ marketTile, expansions, theme, ...rest }: Props) => {
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
    <>
      {marketTile && (
        <Wrapper item xs={12} sm={6} md={4} {...rest}>
          <Tile
            clickHandler={handleSelection}
            selected={marketTile.visualSelection}
            body={
              <Body
                supplyCard={marketTile}
                expansionName={
                  marketTile.expansion
                    ? expansions.ENG[marketTile.expansion].name
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
            data-test={`market-tile-${marketTile.type.toLocaleLowerCase()}`}
          />
          <SupplyModal card={card} RenderModal={RenderModal} />
        </Wrapper>
      )}
    </>
  )
}

export default withTheme(
  connect(mapStateToProps, mapDispatchToProps)(React.memo(MarketTile))
)
