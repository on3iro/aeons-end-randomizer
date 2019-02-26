import React, { useContext } from 'react'

import Typography from '@material-ui/core/Typography'

import { SetConfigurationContext } from '../globalContexts'
import config from '../config'

const NoSelectedExpansions = React.memo(() => (
  <Typography paragraph>
    There is currently no standalone set selected. Please activate at least one standalone set in the settings.
  </Typography>
))

/**
 * Custom hook to make the users configured sets available to a component.
 * If no sets have been selected a simple noSelectedSetsComponent will
 * be created, which can be rendered to warn the user. (this component will otherwise be null)
 *
 * returns { selectedSets, noSelectedSetsComponent }
  */
const useSelectedExpansions = () => {
  const expansionContext = useContext(SetConfigurationContext)

  if (expansionContext === null) {
    return {
      selectedSets: [],
      NoSelectedExpansionsComponent: NoSelectedExpansions
    }
  }

  const { configurationOfSets } = expansionContext

  const selectedSets = Object
    .keys(configurationOfSets)
    .filter(key => configurationOfSets[key])
  const hasStandaloneSet = selectedSets.some(set => config.DATA[set].type === "standalone")

  const NoSelectedExpansionsComponent = hasStandaloneSet
    ? null
    : NoSelectedExpansions

  return {
    selectedSets,
    NoSelectedExpansionsComponent
  }
}

export default useSelectedExpansions
