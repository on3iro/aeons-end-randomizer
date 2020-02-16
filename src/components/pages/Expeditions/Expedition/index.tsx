import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

import { RootState, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'

import BackLink from '../../../molecules/BackLink'

import Barracks from './Barracks'
import Battle from './Battle'
import Header from './Header'

const renderBattles = (
  battles: types.Battle[],
  previousNemeses: string[],
  previousUpgradedBasicNemesis: string[]
) =>
  battles.map(battle => (
    <Battle
      key={battle.id}
      battle={battle}
      previousNemeses={previousNemeses}
      previousUpgradedBasicNemesis={previousUpgradedBasicNemesis}
    />
  ))

// FIXME fix prop typing
const mapStateToProps = (state: RootState, props: any) => ({
  expedition: selectors.Expeditions.Expeditions.getExpeditionById(state, {
    expeditionId: props.id,
  }),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    id: string
  }

const Expedition = ({ expedition }: Props) => {
  const isLoading = !expedition

  if (isLoading) {
    return <CircularProgress />
  }

  // We need to hand previously rolled nemesis and upgradedBasicNemesisCards to
  // our battle, so there will be no duplicates
  // TODO this should probably be refactored in some way (still unsure what would be the best way)
  const previousNemeses = expedition.battles.reduce((acc: string[], battle) => {
    if (battle.nemesisId) {
      return [...acc, battle.nemesisId]
    }

    return acc
  }, [])
  const previousUpgradedBasicNemesis = expedition.upgradedBasicNemesisCards

  return (
    <React.Fragment>
      <BackLink to="/expeditions" label="Back to overview" />
      <Header
        title={expedition.name || expedition.id}
        score={expedition.score}
      />

      {renderBattles(
        expedition.battles,
        previousNemeses,
        previousUpgradedBasicNemesis
      )}
      <Barracks expedition={expedition} />
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Expedition))
