import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'

import HeaderPlaceholder from './HeaderPlaceholder'
import Wrapper from './Wrapper'

import About from '../../pages/About'
import Nemeses from '../../pages/Nemeses'
import Mages from '../../pages/Mages'
import Supply from '../../pages/Supply'
import Settings from '../../pages/Settings'
import ContentCustomization from '../../pages/Settings/Expansions/ContentCustomization'
import TurnOrder from '../../pages/TurnOrder'
import Expeditions from '../../pages/Expeditions'
import Expedition from '../../pages/Expeditions/Expedition'

type Props = {
  isLoading: boolean
}

const Routing = React.memo(() => (
  <Switch>
    <Redirect exact={true} from="/" to="/nemesis" />
    <Route exact={true} path="/nemesis" component={Nemeses} />
    <Route exact={true} path="/mages" component={Mages} />
    <Route exact={true} path="/supply" component={Supply} />
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
))

const Content = React.memo(({ isLoading }: Props) => (
  <Wrapper isLoading={isLoading}>
    <HeaderPlaceholder />
    {isLoading ? <CircularProgress /> : <Routing />}
  </Wrapper>
))

Content.displayName = 'Content'

export default Content
