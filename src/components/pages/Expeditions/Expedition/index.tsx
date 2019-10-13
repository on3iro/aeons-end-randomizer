import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

import { RootState, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'

import A from '../../../A'
import Barracks from './Barracks'
import Battle from './Battle'

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
  expedition: selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    props.id
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    id: string
  }

const Expedition = React.memo(({ expedition }: Props) => {
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
      <A to="/expeditions">Zurück</A>
      <p>Expedition {expedition.name}</p>
      <p>
        <b>Current Score:</b> {expedition.score}
      </p>
      <Barracks expedition={expedition} />
      {renderBattles(
        expedition.battles,
        previousNemeses,
        previousUpgradedBasicNemesis
      )}
    </React.Fragment>
  )
})

Expedition.displayName = 'Expedition'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expedition)
