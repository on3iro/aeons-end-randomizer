import { saveAs } from 'file-saver'

import * as types from 'types'

const saveToFile = (json: string, name: string) => {
  const blob = new Blob([json], { type: 'text/json;charset=utf-8' })

  return saveAs(blob, `${name}.json`)
}

const shareApi = (json: string, name: string) => {
  if (window.navigator.share) {
    return window.navigator.share({
      title: name,
      text: json,
    })
  }
}

export const shareExpedition = (expedition: types.Expedition) => {
  // TODO process data and remove unnecessary parts
  const json = JSON.stringify(expedition)
  const name = (expedition.name ?? expedition.id).replace(/\s/g, '_')

  if (window.navigator.share) {
    return shareApi(json, name)
  } else {
    return saveToFile(json, name)
  }
}
