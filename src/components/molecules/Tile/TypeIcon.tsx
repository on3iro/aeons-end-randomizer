import React from 'react'

import Icon from './Icon'

type Props = {
  icon: string
  iconColor: string
}

const TypeIcon = React.memo(({ icon, iconColor }: Props) => (
  <Icon iconColor={iconColor} className={`ra ra-lg ${icon}`} />
))

TypeIcon.displayName = 'TypeIcon'

export default TypeIcon
