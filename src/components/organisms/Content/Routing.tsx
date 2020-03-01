import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import About from 'components/pages/About'
import Settings from 'components/pages/Settings'
import ContentCustomization from 'components/pages/Settings/Expansions/ContentCustomization'
import TurnOrder from 'components/pages/TurnOrder'
import Expeditions from 'components/pages/Expeditions'
import Expedition from 'components/pages/Expeditions/Expedition'
import Randomizer from 'components/pages/Randomizer'

type Props = {}

const Routing = (props: Props) => {
  return (
    <Switch>
      <Redirect exact={true} from="/" to="/randomizer/" />
      <Redirect exact={true} from="/nemesis" to="/randomizer/nemesis" />
      <Route path="/randomizer/" component={Randomizer} />
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
