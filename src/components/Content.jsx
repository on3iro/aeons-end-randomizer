import React from 'react'

import Nemeses from 'components/pages/Nemeses'
import Mages from 'components/pages/Mages'
import Supply from 'components/pages/Supply'
import Settings from 'components/pages/Settings'
import TurnOrder from 'components/pages/TurnOrder'

import { ROUTES } from 'routes'


const Content = ({ classes, route, ...rest }) => (
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
)

export default Content
