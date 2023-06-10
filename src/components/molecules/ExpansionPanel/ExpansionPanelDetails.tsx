import React from 'react'

import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

const ExpansionPanelDetails = ({
  children,
  ...rest
}: {
  children: React.ReactNode
}) => <MuiExpansionPanelDetails {...rest}>{children}</MuiExpansionPanelDetails>

export default React.memo(ExpansionPanelDetails)
