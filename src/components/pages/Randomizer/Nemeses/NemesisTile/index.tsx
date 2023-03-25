import React from 'react'
import { connect } from 'react-redux'

import { withTheme } from 'styled-components/macro'

import { Nemesis } from 'aer-types/types'

import Tile from 'components/molecules/Tile'

import Body from './Body'
import { RootState, selectors } from 'Redux/Store'

type OwnProps = {
  nemesis: Nemesis
  showNemesisDetails: (id: string) => void
  theme: any
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    expansion:
      selectors.Settings.Expansions.Expansions.content.getExpansionById(state, {
        expansionId: ownProps.nemesis.expansion,
      }),
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const NemesisTile = ({
  nemesis,
  showNemesisDetails,
  theme,
  expansion,
}: Props) => {
  return (
    <Tile
      body={<Body nemesis={nemesis} expansion={expansion} />}
      bgColor={theme.colors.turnOrderCards.nemesis.normal}
      fontColor={theme.colors.white}
      icon={theme.icons.nemesis}
      iconColor={theme.colors.cards.nemesis.color}
      showDetails={() => showNemesisDetails(nemesis.id)}
    />
  )
}

export default withTheme(
  connect(mapStateToProps, mapDispatchToProps)(React.memo(NemesisTile))
)
