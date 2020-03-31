import React from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import ExpansionPanelDetails from './ExpansionPanelDetails'
import StyledExpansionPanel from './StyledExpansionPanel'
import StyledExpansionPanelSummary from './StyledExpansionPanelSummary'

import Heading from 'components/atoms/Heading'

type Props = {
  expanded: string | boolean
  expansionKey: string
  summary: string
  children: React.ReactNode
  expansionHandler: (...args: any) => void
  [key: string]: any
}

const ExpansionPanel = ({
  children,
  expanded,
  expansionHandler,
  expansionKey,
  summary,
  ...rest
}: Props) => {
  const isExpanded = expanded === true || expanded === expansionKey

  return (
    <StyledExpansionPanel expanded={isExpanded} onChange={expansionHandler}>
      <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />} {...rest}>
        <Heading>{summary}</Heading>
      </StyledExpansionPanelSummary>
      <ExpansionPanelDetails>{isExpanded && children}</ExpansionPanelDetails>
    </StyledExpansionPanel>
  )
}

export default React.memo(ExpansionPanel)
