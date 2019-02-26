import React, { useState } from 'react'

const useExpandedHandling = () => {
  // Expansion handling
  const [ expanded, setExpanded ] = useState<boolean |  string>(false)

  const handleExpansion = (panel: string) => (
    event: React.ChangeEvent<any>,
    expanded: boolean | string
  ) => {
    const panelExpanded = expanded
      ? panel
      : false
    setExpanded(panelExpanded)
  }

  return { expanded, handleExpansion, setExpanded }
}

export default useExpandedHandling
