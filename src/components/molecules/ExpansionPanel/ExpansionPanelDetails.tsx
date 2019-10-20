import React from 'react'

import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

const ExpansionPanelDetails = React.memo(
  ({ children, ...rest }: { children: React.ReactNode }) => (
    <MuiExpansionPanelDetails {...rest}>{children}</MuiExpansionPanelDetails>
  )
)

export default ExpansionPanelDetails
