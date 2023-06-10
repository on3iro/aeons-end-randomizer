import { saveAs } from 'file-saver'

import * as types from 'aer-types/types'
import { convertExpeditionToConfig } from 'Redux/Store/Expeditions/Expeditions/helpers'

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
  const config = convertExpeditionToConfig(expedition)

  const json = JSON.stringify(config, undefined, 4)
  const name = (expedition.name || expedition.id).replace(/\s/g, '_')

  if (window.navigator.share) {
    return shareApi(json, name)
  } else {
    return saveToFile(json, name)
  }
}
