import React from 'react'

import Nemeses from './pages/Nemeses'
import Mages from './pages/Mages'
import Supply from './pages/Supply'
import Settings from './pages/Settings'
import TurnOrder from './pages/TurnOrder'

import { ROUTES } from '../routes'


const Content = React.memo(({ classes, route, ...rest }: {
  classes: any,
  route: string,
  className: string
}) => (
  <div {...rest}>
    <div className={classes.drawerHeader} />
    {
      {
        [ROUTES.nemeses]: <Nemeses />,
        [ROUTES.mages]: <Mages />,
        [ROUTES.supply]: <Supply />,
        [ROUTES.turnOrder]: <TurnOrder />,
        [ROUTES.settings]: <Settings />
      }[route]
    }
  </div>
))

export default Content
