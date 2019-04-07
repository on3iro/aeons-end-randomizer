import React from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import config from '../../../config'
import { ICreature } from '../../../types'
import { RootState, actions, selectors } from '../../../Redux/Store'

import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

import nemesesStyles from './nemesesStyles'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.Selected.getHasStandaloneSet(
    state
  ),
  selectedExpansions: selectors.Settings.Expansions.Selected.getSelectedExpansionsArray(
    state
  ),
  nemesis: selectors.Nemesis.getNemesis(state),
})

const mapDispatchToProps = {
  setRandomNemesis: actions.Nemesis.setRandomNemesis,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    classes: any
  }

const Nemeses = React.memo(
  ({
    classes,
    hasStandaloneExpansionSelected,
    nemesis,
    selectedExpansions,
    setRandomNemesis,
  }: Props) => {
    if (!hasStandaloneExpansionSelected) {
      return <NoSelectedExpansions />
    }

    return (
      <React.Fragment>
        {nemesis ? (
          <React.Fragment>
            <Card className={classes.card}>
              <CardContent>
                <Typography color="textSecondary">
                  {config.DATA[nemesis.expansion].name}
                </Typography>
                <Typography variant="h6" component="h2">
                  {nemesis['name']}
                </Typography>
              </CardContent>
              <i className={`ra ra-lg ra-broken-skull ${classes.cardIcon}`} />
            </Card>
          </React.Fragment>
        ) : (
          <Typography>Tab button to spawn new nemesis!</Typography>
        )}
        <ShuffleButton
          onClick={() => setRandomNemesis(selectedExpansions)}
          color="primary"
          variant="extended"
        >
          Open Breach
        </ShuffleButton>
      </React.Fragment>
    )
  }
)

Nemeses.displayName = 'Nemeses'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(nemesesStyles)(Nemeses))
