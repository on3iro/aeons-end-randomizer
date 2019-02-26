import React from 'react'

import BuildIcon from '@material-ui/icons/Build'
import List from '@material-ui/core/List'

import { ROUTES } from '../routes'
import RouteItem from './RouteItem'

const Routes = React.memo(({ locationhandler }: {
  locationhandler: (route: string) => void
}) => (
  <List>
    <RouteItem route={ROUTES.nemeses} clickhandler={locationhandler}>
      <i className='ra ra-lg ra-broken-skull' />
    </RouteItem>
    <RouteItem route={ROUTES.mages} clickhandler={locationhandler}>
      <i className='ra ra-lg ra-crystal-wand' />
    </RouteItem>
    <RouteItem route={ROUTES.supply} clickhandler={locationhandler}>
      <i className='ra ra-lg ra-campfire' />
    </RouteItem>
    <RouteItem route={ROUTES.turnOrder} clickhandler={locationhandler}>
      <i className='ra ra-lg ra-player-lift' />
    </RouteItem>
    <RouteItem route={ROUTES.settings} clickhandler={locationhandler}>
      <BuildIcon style={{
 width: '0.9em'
 }} />
    </RouteItem>
  </List>
))

export default Routes
