import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import BottomNavigation from 'components/molecules/BottomNavigation'

import Nemeses from './Nemeses'
import Mages from './Mages'
import Supply from './Supply'
import BasicNemesisCards from './BasicNemesisCards'

const Randomizer = () => {
  return (
    <>
      <Switch>
        <Redirect exact={true} from="/randomizer/" to="/randomizer/nemesis" />
        <Redirect exact={true} from="/nemesis" to="/randomizer/nemesis" />

        <Route exact={true} path="/randomizer/nemesis" component={Nemeses} />
        <Route
          exact={true}
          path="/randomizer/basic-nemesis-cards"
          component={BasicNemesisCards}
        />
        <Route exact={true} path="/randomizer/mages" component={Mages} />
        <Route exact={true} path="/randomizer/supply" component={Supply} />
      </Switch>
      <BottomNavigation />
    </>
  )
}

export default React.memo(Randomizer)
