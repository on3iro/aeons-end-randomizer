import React from 'react'
import { useRedirect, useRoutes } from 'hookrouter'

import About from './components/pages/About'
import Nemeses from './components/pages/Nemeses'
import Mages from './components/pages/Mages'
import Supply from './components/pages/Supply'
import Settings from './components/pages/Settings'
import ContentCustomization from './components/pages/Settings/Expansions/ContentCustomization'
import TurnOrder from './components/pages/TurnOrder'

type Match = {
  urlParameters?: Object
  contentComponent: React.ReactNode
  title: string
}

/**
 * Creates a function which can be used as routing target inside hookrouters
 * useRoutes() hook. Returns an object which contains the provided title,
 * a contentComponent to render and the current urlParameters (or null if there are none)
 *
 * Usage for regular components:
 *  createRoutingTarget(() => <Component />, 'Title')
 *
 * Usage with urlParameters passed to component:
 *  createRoutingTarget((urlParams) => <Component {...urlParams} />, 'Title')
 *    or with desctructoring
 *  createRoutingTarget(({id}: {id: string}) => <Component {id} />, 'Title')
 */
const createRoutingTarget = (
  renderComponent: Function,
  renderTitle: Function
) => (urlParameters: Object): Match => ({
  urlParameters,
  contentComponent: renderComponent(urlParameters),
  title: renderTitle(urlParameters),
})

const routes = {
  '/nemesis': createRoutingTarget(() => <Nemeses />, () => 'Nemesis'),
  '/mages': createRoutingTarget(() => <Mages />, () => 'Mages'),
  '/supply': createRoutingTarget(() => <Supply />, () => 'Supply'),
  '/turnorder': createRoutingTarget(() => <TurnOrder />, () => 'Turn Order'),
  '/settings': createRoutingTarget(() => <Settings />, () => 'Settings'),
  '/about': createRoutingTarget(() => <About />, () => 'About'),
  '/settings/expansions/:id': createRoutingTarget(
    ({ id }: { id: string }) => <ContentCustomization expansionId={id} />,
    ({ id }: { id: string }) => `Settings: Expansions/${id}`
  ),
}

export const useRouting = () => {
  // If no endpoint has been provided we redirect to the nemesis randomizer
  // because we currently do not have a dedicated landingpage
  useRedirect('/', '/nemesis')
  const match = useRoutes(routes)

  return match
}
