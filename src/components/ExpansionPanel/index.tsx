import React from 'react'

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'

import StyledExpansionPanel from './StyledExpansionPanel'
import StyledExpansionPanelSummary from './StyledExpansionPanelSummary'

type Props = {
  classes: any
  expanded: string | boolean
  expansionKey: string
  summary: string
  children: React.ReactNode
  expansionHandler: (
    event: React.ChangeEvent<any> | undefined,
    expanded: boolean | string
  ) => void
}

const ExpansionPanel = React.memo(
  ({
    children,
    classes,
    expanded,
    expansionHandler,
    expansionKey,
    summary,
  }: Props) => (
    <StyledExpansionPanel
      expanded={expanded === expansionKey}
      onChange={expansionHandler}
    >
      <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{summary}</Typography>
      </StyledExpansionPanelSummary>
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </StyledExpansionPanel>
  )
)

export default ExpansionPanel
