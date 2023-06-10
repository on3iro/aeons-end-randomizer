import React, { useState } from 'react'

const useExpandedHandling = (defaultValue: boolean | string = false) => {
  // Expansion handling
  const [expanded, setExpanded] = useState<boolean | string>(defaultValue)

  const createExpansionHandler = (panel: string) => (
    event: React.ChangeEvent<any> | undefined,
    expanded: boolean | string
  ) => {
    const panelExpanded = expanded ? panel : false
    setExpanded(panelExpanded)
  }

  return { expanded, createExpansionHandler, setExpanded }
}

export default useExpandedHandling
