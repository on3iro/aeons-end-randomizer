import React from 'react'

import Icon from './Icon'

type Props = {
  icon: string
  iconColor: string
}

const TypeIcon = ({ icon, iconColor }: Props) => (
  <Icon iconColor={iconColor} className={`ra ra-lg ${icon}`} />
)

export default React.memo(TypeIcon)
