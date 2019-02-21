import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MageList = ({ mages }) => (
  <List>
    {
      mages.map(mage => (
        <ListItem key={mage.name}>
          <ListItemText>{mage.name}, {mage.set}</ListItemText>
        </ListItem>
      ))
    }
  </List>
)

export default MageList
