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
  showDetails?: (e: Event) => void
  selected?: boolean
  clickHandler?: Function
}

const Tile = ({
  body,
  bgColor,
  fontColor,
  icon,
  iconColor,
  showDetails,
  selected,
  clickHandler,
  ...rest
}: Props) => (
  <Wrapper
    themeColor={bgColor}
    selected={selected}
    onClick={clickHandler}
    {...rest}
  >
    <Content>{body}</Content>

    {icon && iconColor ? <TypeIcon icon={icon} iconColor={iconColor} /> : null}

    {showDetails ? (
      <ShowDetailsButton showDetails={showDetails} theme={fontColor} />
    ) : null}
  </Wrapper>
)

export default React.memo(Tile)
