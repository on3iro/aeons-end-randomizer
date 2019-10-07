import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'

import HeaderPlaceholder from './HeaderPlaceholder'
import Wrapper from './Wrapper'

import About from '../pages/About'
import Nemeses from '../pages/Nemeses'
import Mages from '../pages/Mages'
import Supply from '../pages/Supply'
import Settings from '../pages/Settings'
import ContentCustomization from '../pages/Settings/Expansions/ContentCustomization'
import TurnOrder from '../pages/TurnOrder'
import Expeditions from '../pages/Expeditions'
import Expedition from '../pages/Expeditions/Expedition'

type Props = {
  isLoading: boolean
  drawerIsOpen: boolean
}

const Routing = React.memo(() => (
  <Switch>
    <Redirect exact={true} from="/" to="/nemesis" />
    <Route path="/nemesis" component={Nemeses} />
    <Route path="/mages" component={Mages} />
    <Route path="/supply" component={Supply} />
    <Route path="/turnorder" component={TurnOrder} />
    <Route path="/about" component={About} />
    <Route
      path="/settings/expansions/:id"
      render={props => (
        <ContentCustomization expansionId={props.match.params.id} />
      )}
    />
    <Route path="/settings" component={Settings} />
    <Route
      path="/expeditions/:id"
      render={props => <Expedition id={props.match.params.id} />}
    />
    <Route path="/expeditions" component={Expeditions} />
  </Switch>
))

const Content = React.memo(({ isLoading, drawerIsOpen }: Props) => (
  <Wrapper isLoading={isLoading} drawerIsOpen={drawerIsOpen}>
    <HeaderPlaceholder />
    {isLoading ? <CircularProgress /> : <Routing />}
  </Wrapper>
))

Content.displayName = 'Content'

export default Content
