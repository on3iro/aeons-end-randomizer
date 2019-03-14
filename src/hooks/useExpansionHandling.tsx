import React, { useState } from 'react'

const useExpandedHandling = () => {
  // Expansion handling
  const [ expanded, setExpanded ] = useState<boolean |  string>(false)

  const createExpansionHandler = (panel: string) => (
    event: React.ChangeEvent<any> | undefined,
    expanded: boolean | string
  ) => {
    const panelExpanded = expanded
      ? panel
      : false
    setExpanded(panelExpanded)
  }

  return { expanded, createExpansionHandler, setExpanded }
}

export default useExpandedHandling
