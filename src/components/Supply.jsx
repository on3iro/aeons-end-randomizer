import React from 'react'
import Typography from '@material-ui/core/Typography'

import useSelectedSets from '../hooks/useSelectedSets.jsx'
import config from '../config'

const Supply = () => {
  const { selectedSets, noneSelectedComponent } = useSelectedSets()

  if (noneSelectedComponent) {
    return noneSelectedComponent
  }

  return (
    <Typography>YADA</Typography>
  )
}

export default Supply
