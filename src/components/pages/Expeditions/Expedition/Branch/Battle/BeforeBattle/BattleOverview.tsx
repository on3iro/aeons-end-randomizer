import React from 'react'

import * as types from 'aer-types/types'

import UpgradedBasicNemesisCardList from 'components/molecules/UpgradedBasicNemesisCardList'
import NemesisInformation from 'components/molecules/NemesisInformation'
import InfoItem from 'components/molecules/InfoItem'
import SectionHeadline from 'components/atoms/SectionHeadline'
import SpecialRules from '../SpecialRules'

type Props = {
  info: string
  nemesis?: types.Nemesis
  specialRules?: string
  onLoss?: string
  upgradedBasicNemsisCards: types.UpgradedBasicNemesisCard[]
}

const BattleOverview = ({
  info,
  nemesis,
  upgradedBasicNemsisCards,
  specialRules,
  onLoss,
}: Props) => {
  return (
    <>
      <InfoItem label="Tries" info={info} />
      <SectionHeadline data-test={`${nemesis?.name}`}>
        {nemesis ? nemesis.name : 'Nemesis'}
      </SectionHeadline>
      <NemesisInformation nemesis={nemesis} />
      {(specialRules || onLoss) && (
        <SpecialRules
          rules={[
            ...(specialRules ? [specialRules] : []),
            ...(onLoss === 'skip'
              ? ['You only have a single try for this battle!']
              : []),
          ]}
        />
      )}
      <UpgradedBasicNemesisCardList
        upgradedBasicNemsisCards={upgradedBasicNemsisCards}
      />
    </>
  )
}

export default React.memo(BattleOverview)
