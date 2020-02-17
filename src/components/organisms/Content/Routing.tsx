import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import About from '../../pages/About'
import Nemeses from '../../pages/Nemeses'
import Mages from '../../pages/Mages'
import Supply from '../../pages/Supply'
import Settings from '../../pages/Settings'
import ContentCustomization from '../../pages/Settings/Expansions/ContentCustomization'
import TurnOrder from '../../pages/TurnOrder'
import Expeditions from '../../pages/Expeditions'
import Expedition from '../../pages/Expeditions/Expedition'

type Props = {}

const Routing = (props: Props) => {
  return (
    <Switch>
      <Redirect exact={true} from="/" to="/randomizer/nemesis" />
      <Redirect exact={true} from="/nemesis" to="/randomizer/nemesis" />
      <Redirect exact={true} from="/mages" to="/randomizer/mages" />
      <Redirect exact={true} from="/supply" to="/randomizer/supply" />
      <Route exact={true} path="/randomizer/nemesis" component={Nemeses} />
      <Route exact={true} path="/randomizer/mages" component={Mages} />
      <Route exact={true} path="/randomizer/supply" component={Supply} />
      <Route exact={true} path="/turnorder" component={TurnOrder} />
      <Route exact={true} path="/about" component={About} />
      <Route
        exact={true}
        path="/settings/expansions/:id"
        render={props => (
          <ContentCustomization expansionId={props.match.params.id} />
        )}
      />
      <Route exact={true} path="/settings" component={Settings} />
      <Route
        exact={true}
        path="/expeditions/:id"
        render={props => <Expedition id={props.match.params.id} />}
      />
      <Route exact={true} path="/expeditions" component={Expeditions} />
    </Switch>
  )
}

export default React.memo(Routing)
