import React from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import ExpansionPanelDetails from './ExpansionPanelDetails'
import StyledExpansionPanel from './StyledExpansionPanel'
import StyledExpansionPanelSummary from './StyledExpansionPanelSummary'

import Heading from '../../atoms/Heading'

type Props = {
  expanded: string | boolean
  expansionKey: string
  summary: string
  children: React.ReactNode
  expansionHandler: (...args: any) => void
}

const ExpansionPanel = React.memo(
  ({ children, expanded, expansionHandler, expansionKey, summary }: Props) => {
    const isExpanded = expanded === true || expanded === expansionKey

    return (
      <StyledExpansionPanel expanded={isExpanded} onChange={expansionHandler}>
        <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Heading>{summary}</Heading>
        </StyledExpansionPanelSummary>
        <ExpansionPanelDetails>{isExpanded && children}</ExpansionPanelDetails>
      </StyledExpansionPanel>
    )
  }
)

ExpansionPanel.displayName = 'ExpansionPanel'

export default ExpansionPanel
