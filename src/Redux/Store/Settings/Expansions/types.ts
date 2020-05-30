import AERData from 'aer-data'

export const LANGUAGE_KEYS = Object.keys(AERData.normalizedData)
export type LanguageKey = keyof typeof AERData.normalizedData
