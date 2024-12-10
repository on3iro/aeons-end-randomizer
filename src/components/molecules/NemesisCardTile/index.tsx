import React, { useCallback } from 'react'
import { withTheme } from 'styled-components/macro'

import { INemesisCard } from 'aer-types/types'

import { useModal } from 'hooks/useModal'

import Tile from 'components/molecules/Tile'
import BasicNemesisCardModal from 'components/molecules/BasicNemesisCardModal'

import Wrapper from './Wrapper'
import Body from './Body'

type Props = {
  nemesisCard: INemesisCard
  theme: any
  inline?: boolean
}

const NemesisCardTile = ({ nemesisCard, theme, inline = false }: Props) => {
  const { show, RenderModal } = useModal()

  const handleDetails = useCallback(
    (e: Event) => {
      e.stopPropagation()
      show()
    },
    [show]
  )

  return (
    <Wrapper item xs={12} sm={6} md={3}>
      <Tile
        body={<Body nemesisCard={nemesisCard} inline={inline} />}
        bgColor={theme.colors.turnOrderCards.nemesis.light}
        fontColor={theme.colors.text.primary}
        icon={theme.icons['nemesis']}
        iconColor={theme.colors.turnOrderCards.nemesis.normal}
        showDetails={inline ? undefined : handleDetails}
      />
      {inline || <BasicNemesisCardModal card={nemesisCard} RenderModal={RenderModal} />}
    </Wrapper>
  )
}

export default withTheme(React.memo(NemesisCardTile))
