import React from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import useSelectedSets from '../hooks/useSelectedSets.jsx'
import config from '../config'

const TILECONFIGS = {
  "market1": {
    name: "MARKET SETUP 1",
    tiles: [
      { type: "Gem", operation: "<", threshold: 4 },
      { type: "Gem", operation: "=", threshold: 4 },
      { type: "Gem", operation: "ANY" },
      { type: "Relic", operation: "ANY" },
      { type: "Relic", operation: "ANY" },
      { type: "Spell", operation: "<", threshold: 5 },
      { type: "Spell", operation: "<", threshold: 5 },
      { type: "Spell", operation: ">", threshold: 5 },
      { type: "Spell", operation: ">", threshold: 5 },
    ]
  }
}

const createTiles = (tileConfig, classes) => {
  return tileConfig.tiles.map(({ type, operation, threshold }, i) => (
      <GridListTile key={i} cols={1} style={{ height: 'auto' }}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {type} {operation} {threshold ? threshold : ""}
            </Typography>
            <Typography component="p">
              -
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Cost:
            </Typography>
          </CardContent>
        </Card>
      </GridListTile>
  ))
}

const Supply = ({ classes }) => {
  const { selectedSets, noneSelectedComponent } = useSelectedSets()

  if (noneSelectedComponent) {
    return noneSelectedComponent
  }

  const tileConfig = TILECONFIGS["market1"]

  return (
    <GridList cellHeight={180} className={classes.gridList} cols={3}>
      <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
        <ListSubheader component="div">{tileConfig.name}</ListSubheader>
      </GridListTile>
      { createTiles(tileConfig, classes) }
    </GridList>
  )
}

export default withStyles({
  gridList: {
    width: 300,
    height: 450,
  },
  card: {
    minWidth: 30,
  },
})(Supply)
