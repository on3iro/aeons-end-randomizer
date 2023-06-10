import React from 'react'

import * as types from 'aer-types/types'

import SectionHeadline from 'components/atoms/SectionHeadline'

import BasicNemesisCardList from './BasicNemesisCardList'

type Props = {
  title: string
  basicNemesisCards?: ReadonlyArray<types.BasicNemesisCard>
}

const Tier = ({ title, basicNemesisCards }: Props) => {
  return (
    <React.Fragment>
      <SectionHeadline>{title}</SectionHeadline>
      <BasicNemesisCardList basicNemesisCards={basicNemesisCards || []} />
    </React.Fragment>
  )
}

export default React.memo(Tier)
