import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

const RouteItem = React.memo(({ route, clickhandler, children }) => (
  <ListItem button key={route} onClick={() => clickhandler(route)}>
    <ListItemIcon>{children}</ListItemIcon>
    <ListItemText primary={route} />
  </ListItem>
))

export default RouteItem
