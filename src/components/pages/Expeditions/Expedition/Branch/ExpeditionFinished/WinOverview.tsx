import React from 'react'

import InfoItem from 'components/molecules/InfoItem'
import P from 'components/atoms/P'

type Props = {
  info: string
}

const WinOverview = ({ info }: Props) => {
  return (
    <>
      <P>Expedition complete!</P>
      <InfoItem label="Score" info={info} />
    </>
  )
}

export default React.memo(WinOverview)
