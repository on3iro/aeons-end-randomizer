import { useState, useEffect } from 'react'

import {
  get as getFromDb,
  set as setToDb
} from 'idb-keyval'

import config from '../../../../config'
import { ITurnOrderSetup } from '../../../../config/types'
import { CARDS } from '../../../../config/turnOrderSetups'


export const MODES = ["Default", "Maelstrom"]

export type Mode =
  "Default"
  | "Maelstrom"

const adjustSetup = (setup: ITurnOrderSetup, mode: Mode): ITurnOrderSetup => {
  switch (mode) {
    case 'Maelstrom': {
      return {
        id: setup.id,
        name: setup.name,
        turnOrderCards: setup.turnOrderCards.map(card => {
          return (card.id === 'nemesis-1')
            ? CARDS["maelstrom"]
            : card
        })
      }
    }

    case 'Default':
    default: {
      return setup
    }
  }
}

export const useTurnOrderSetup = () => {
  const [turnOrderSetup, setTurnOrderSetup] = useState(
    config.TURNORDERSETUPS['onePlayerThreeToc']
  )

  const handleTurnOrderSetupChange = (setupId: string, mode: Mode) => {
    const setup = config.TURNORDERSETUPS[setupId]
    const adjustedSetup = adjustSetup(setup, mode)
    setTurnOrderSetup(adjustedSetup)
    setToDb('turnOrderSetup', adjustedSetup)
  }

  // Fetch initial setup from indexedDB if it exists
  useEffect(() => {
    getFromDb('turnOrderSetup').then((setup) => {
      if (setup !== undefined) {
        setTurnOrderSetup(setup as ITurnOrderSetup)
      }
    })
  }, [])

  return {
    turnOrderSetup,
    handleTurnOrderSetupChange
  }
}

