import React from 'react'

import * as types from 'aer-types/types'

import UpgradedBasicNemesisCardList from 'components/molecules/UpgradedBasicNemesisCardList'
import NemesisInformation from 'components/molecules/NemesisInformation'
import InfoItem from 'components/molecules/InfoItem'
import SectionHeadline from 'components/atoms/SectionHeadline'
import SpecialRules from '../SpecialRules'
import FriendInformation from 'components/molecules/FriendInformation'
import FoeInformation from 'components/molecules/FoeInformation'

type Props = {
  info: string
  nemesis?: types.Nemesis
  foe?: types.Foe
  friend?: types.Friend
  specialRules?: string
  onLoss?: string
  upgradedBasicNemsisCards: types.UpgradedBasicNemesisCard[]
}

const BattleOverview = ({
  info,
  nemesis,
  friend,
  foe,
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
      {friend && <>
        <SectionHeadline data-test="friend">Friend: {friend.name}</SectionHeadline>
        <FriendInformation friend={friend} simple={true} />
      </>}
      {foe && <>
        <SectionHeadline data-test="foe">Foe: {foe.name}</SectionHeadline>
        <FoeInformation foe={foe} simple={true} />
      </>}
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
