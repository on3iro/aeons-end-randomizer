import * as Languages from './Languages'

import {
  Nemesis,
  Mage,
  Treasure,
  BasicNemesisCard,
  UpgradedBasicNemesisCard,
  ICard,
  Friend,
  Foe,
} from 'aer-types/types'

import { LanguageKey } from './types'

type Entity =
  | Nemesis
  | Mage
  | Treasure
  | BasicNemesisCard
  | UpgradedBasicNemesisCard
  | ICard
  | Friend
  | Foe

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
  console.log(id)
  console.log(content)
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
