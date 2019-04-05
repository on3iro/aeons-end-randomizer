import React from 'react'
import styled from 'styled-components/macro'

type Props = {
  type: string
}

const Icon = styled('i')<Props>`
  position: absolute;
  right: 8px;
  bottom: -8px;
  font-size: 120px;
  z-index: 0;
  opacity: 0.2;

  color: ${props => props.theme.colors.cards[props.type].color};
`

const CardTypeIcon = React.memo(({ type }: Props) => {
  switch (type) {
    case 'gem': {
      return <Icon type={type} className="ra ra-lg ra-crystals" />
    }
    case 'relic': {
      return <Icon type={type} className="ra ra-lg ra-crystal-wand" />
    }
    case 'spell': {
      return <Icon type={type} className="ra ra-lg ra-scroll-unfurled" />
    }
    default: {
      return null
    }
  }
})

CardTypeIcon.displayName = 'CardTypeIcon'

export default CardTypeIcon
