import React from 'react'

import ShowDetailsButton from '../ShowDetailsButton'

import Wrapper from './Wrapper'
import Content from './Content'
import TypeIcon from './TypeIcon'

type Props = {
  body: React.ReactElement | string
  bgColor: string
  fontColor: string
  icon?: string
  iconColor?: string
  showDetails: () => void
  hideShowDetailsButton?: boolean
}

const Tile = React.memo(
  ({
    body,
    bgColor,
    fontColor,
    icon,
    iconColor,
    showDetails,
    hideShowDetailsButton,
  }: Props) => (
    <Wrapper themeColor={bgColor}>
      <Content>{body}</Content>

      {icon && iconColor ? (
        <TypeIcon icon={icon} iconColor={iconColor} />
      ) : null}

      {hideShowDetailsButton ? null : (
        <ShowDetailsButton
          showDetails={() => showDetails()}
          theme={fontColor}
        />
      )}
    </Wrapper>
  )
)

export default Tile
