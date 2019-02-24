import { useState } from 'react'

const useExpansionHandling = () => {
  // Expansion handling
  const [ expanded, setExpanded ] = useState(null)

  const handleExpansion = (panel) => (event, expanded) => {
    const panelExpanded = expanded
      ? panel
      : false
    setExpanded(panelExpanded)
  }

  return { expanded, handleExpansion, setExpanded }
}

export default useExpansionHandling
