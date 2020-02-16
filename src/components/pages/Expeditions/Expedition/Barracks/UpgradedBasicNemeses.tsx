import React from 'react'

import * as types from '../../../../../types'

import ExpansionPanel from '../../../../molecules/ExpansionPanel'
import UpgradedBasicNemesisCards from '../../../../molecules/UpgradedBasicNemesisCardList'

type Props = {
  upgradedBasicNemsisCards: types.UpgradedBasicNemesisCard[]
  expansionKey: string
  expansionHandler: (
    e: React.ChangeEvent<any> | undefined,
    expanded: string | boolean
  ) => void
  expanded: boolean | string
}

const UpgradedBasicNemeses = ({
  upgradedBasicNemsisCards,
  expansionKey,
  expansionHandler,
  expanded,
}: Props) => (
  <React.Fragment>
    {upgradedBasicNemsisCards.length > 0 && (
      <ExpansionPanel
        summary="Upgraded basic nemesis cards"
        expansionKey={expansionKey}
        expansionHandler={expansionHandler}
        expanded={expanded}
      >
        <UpgradedBasicNemesisCards
          upgradedBasicNemsisCards={upgradedBasicNemsisCards}
        />
      </ExpansionPanel>
    )}
  </React.Fragment>
)

export default React.memo(UpgradedBasicNemeses)
