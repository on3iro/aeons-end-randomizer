import { saveAs } from 'file-saver'

import * as types from 'types'

const saveToFile = (json: string, name: string) => {
  const blob = new Blob([json], { type: 'text/json;charset=utf-8' })

  // We additionally copy the text to the clipboard, so that
  // users with browsers where saveAs does not work still have an
  // option to get the text
  window.navigator.clipboard.writeText(json)

  return saveAs(blob, `${name}.json`)
}

const shareApi = (json: string, name: string) => {
  // We additionally copy the text to the clipboard, so that
  // users with browsers where saveAs does not work still have an
  // option to get the text
  window.navigator.clipboard.writeText(json)

  if (window.navigator.share) {
    return window.navigator.share({
      title: name,
      text: json,
    })
  }
}

export const shareExpedition = (expedition: types.Expedition) => {
  // Process data and remove unnecessary parts
  const {
    seed, // we only want the seed not its state
    score,
    barracks,
    sequence,
    upgradedBasicNemesisCards,
    banished,
    finished,
    settingsSnapshot, // we do not want to have the usedExpansions property, as it might be misleading
    ...bareExpedition
  } = expedition

  const { usedExpansions, ...snapshot } = settingsSnapshot

  const config = {
    ...bareExpedition,
    seed: { seed: seed.seed },
    settingsSnapshot: snapshot,
  }

  const json = JSON.stringify(config, undefined, 4)
  const name = (expedition.name || expedition.id).replace(/\s/g, '_')

  if (window.navigator.share) {
    return shareApi(json, name)
  } else {
    return saveToFile(json, name)
  }
}
