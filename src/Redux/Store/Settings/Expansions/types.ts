import AERData from 'aer-data/src/index'

export const LANGUAGE_KEYS = Object.keys(AERData.normalizedData)
export type LanguageKey = keyof typeof AERData.normalizedData

export type GlobalLanguageKey = LanguageKey | 'CUSTOM'
