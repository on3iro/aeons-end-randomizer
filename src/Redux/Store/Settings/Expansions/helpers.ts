import * as Languages from './Languages'

import {
  Nemesis,
  Mage,
  Treasure,
  BasicNemesisCard,
  UpgradedBasicNemesisCard,
  ICard,
} from 'aer-types/types'

import { LanguageKey } from './types'

type Entity =
  | Nemesis
  | Mage
  | Treasure
  | BasicNemesisCard
  | UpgradedBasicNemesisCard
  | ICard

export type ContentStruct<T> = {
  [key in LanguageKey]: {
    [id: string]: T
  }
}

export const getContentByIdWithLanguageFallback = <T extends Entity>(
  languages: Languages.State,
  content: ContentStruct<T>,
  id: string
) => {
  // Just get the corresponding expansion id from the english version
  const language = languages[content.ENG[id].expansion]

  // Fallback to english
  return content[language][id] || content.ENG[id]
}

export const getEntitiesByIdListWithLanguageFallback = <T extends Entity>(
  content: ContentStruct<T>,
  ids: string[],
  language: LanguageKey
) => {
  return ids.map((id) => {
    return content[language][id] || content.ENG[id]
  })
}
