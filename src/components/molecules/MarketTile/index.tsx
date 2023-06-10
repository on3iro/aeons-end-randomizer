import React, { useContext, useCallback } from 'react'
import { connect } from 'react-redux'

import { withTheme } from 'styled-components/macro'

import { RootState, selectors, actions } from 'Redux/Store'
import * as types from 'aer-types/types'
import { useModal } from 'hooks/useModal'

import Tile from '../Tile'
import { SelectionHandlerContext } from '../SupplySelection'
import SupplyModal from '../SupplyModal'

import Wrapper from './Wrapper'
import Body from './Body'
import { LockedCard } from 'Redux/Store/Randomizer/Supply/LockedCards'

// FIXME
// This is currently a typing hack
// We ensure that our modal will only be shown
type MaybeMarketTile =
  | {
      id?: string | number
      type?: types.CardType
      name?: string
      expansion?: string
      cost?: number
      keywords?: string[]
      effect?: string
      canBeLocked?: boolean
    }
  | undefined

type MaybeOutputMarketTile =
  | {
      id: string
      type: types.CardType
      name: string
      expansion: string
      cost: number
      keywords: string[]
      effect: string
      canBeLocked: boolean
    }
  | undefined

const getCard = (marketTile: MaybeMarketTile): MaybeOutputMarketTile => {
  if (!marketTile) {
    return undefined
  }

  const { id, type, name, expansion, cost, keywords, effect, canBeLocked } =
    marketTile

  return id &&
    typeof id === 'string' &&
    type &&
    name &&
    expansion &&
    cost &&
    keywords &&
    effect !== undefined &&
    canBeLocked !== undefined
    ? {
        id,
        type,
        name,
        expansion,
        cost,
        keywords,
        effect,
        canBeLocked,
      }
    : undefined
}

const mapStateToProps = (state: RootState) => ({
  expansions:
    selectors.Settings.Expansions.Expansions.content.getExpansionsWithLanguageFallback(
      state
    ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    marketTile: {
      id?: string | number
      blueprintId?: string | number
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
      canBeLocked?: boolean
    }
    theme: any
    lockedCards?: ReadonlyArray<LockedCard>
    toggleLock?: typeof actions.Randomizer.Supply.LockedCards.toggleLock
  }

const MarketTile = ({
  marketTile,
  expansions,
  theme,
  lockedCards,
  toggleLock,
  ...rest
}: Props) => {
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

  const handleLock = useCallback(() => {
    if (
      toggleLock &&
      card &&
      card.id &&
      marketTile.blueprintId !== undefined &&
      card.cost
    ) {
      toggleLock({
        id: card.id,
        blueprintId: marketTile.blueprintId,
        type: card.type,
        cost: card.cost,
      })
    }
  }, [toggleLock, card, marketTile])

  const isLocked = lockedCards
    ? lockedCards.findIndex((lockedCard) => lockedCard.id === marketTile?.id) >
      -1
    : false

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
                expansion={
                  marketTile.expansion ? expansions[marketTile.expansion] : null
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
            lock={card && card.canBeLocked ? handleLock : undefined}
            isLocked={isLocked}
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
