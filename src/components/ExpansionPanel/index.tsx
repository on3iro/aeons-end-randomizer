import React from 'react'

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import StyledExpansionPanel from './StyledExpansionPanel'
import StyledExpansionPanelSummary from './StyledExpansionPanelSummary'

import Heading from '../Heading'

type Props = {
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
  ({ children, expanded, expansionHandler, expansionKey, summary }: Props) => (
    <StyledExpansionPanel
      expanded={expanded === expansionKey}
      onChange={expansionHandler}
    >
      <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Heading>{summary}</Heading>
      </StyledExpansionPanelSummary>
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </StyledExpansionPanel>
  )
)

ExpansionPanel.displayName = 'ExpansionPanel'

export default ExpansionPanel
