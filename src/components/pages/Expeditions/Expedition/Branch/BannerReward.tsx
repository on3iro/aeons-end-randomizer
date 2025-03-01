import React from 'react'

import * as types from 'aer-types/types'

import SectionHeadline from 'components/atoms/SectionHeadline'
import SupplyList from 'components/molecules/SupplyList'

type Props = {
  banners: types.ICard[]
}

const BannerReward = ({ banners }: Props) => {
  return (
    <>
      {banners.length > 0 && <SectionHeadline>Banners</SectionHeadline>}
      <SupplyList tiles={banners.map(banner => {return {...banner, canBeLocked: false}})} />
    </>
  )
}

export default React.memo(BannerReward)
