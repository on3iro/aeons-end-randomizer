import React from 'react'

import * as types from 'aer-types'

import UpgradedBasicNemesisCardList from 'components/molecules/UpgradedBasicNemesisCardList'
import NemesisInformation from 'components/molecules/NemesisInformation'
import InfoItem from 'components/molecules/InfoItem'
import SectionHeadline from 'components/atoms/SectionHeadline'

type Props = {
  info: string
  nemesis?: types.Nemesis
  upgradedBasicNemsisCards: types.UpgradedBasicNemesisCard[]
}

const BattleOverview = ({ info, nemesis, upgradedBasicNemsisCards }: Props) => {
  return (
    <>
      <InfoItem label="Tries" info={info} />
      <SectionHeadline data-test={`${nemesis?.name}`}>
        {nemesis ? nemesis.name : 'Nemesis'}
      </SectionHeadline>
      <NemesisInformation nemesis={nemesis} />
      <UpgradedBasicNemesisCardList
        upgradedBasicNemsisCards={upgradedBasicNemsisCards}
      />
    </>
  )
}

export default React.memo(BattleOverview)
