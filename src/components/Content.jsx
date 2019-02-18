import React from 'react'

import Nemeses from './Nemeses.jsx'
import Mages from './Mages.jsx'
import Supply from './Supply.jsx'
import Settings from './Settings.jsx'

import { ROUTES } from '../routes.js'


const Content = ({ classes, route, ...rest }) => (
  <div {...rest}>
    <div className={classes.drawerHeader} />
    {
      {
        [ROUTES.nemeses]: <Nemeses />,
        [ROUTES.mages]: <Mages />,
        [ROUTES.supply]: <Supply />,
        [ROUTES.settings]: <Settings />
      }[route]
    }
  </div>
)

export default Content
