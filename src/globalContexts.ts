import React from 'react'
import {

} from './config/types'

interface ISetConfiguration {
  configurationOfSets: { [key: string]: boolean };
  setSets(newSets: { [key: string]: boolean }): void;
  sets: string[];
}

export const SetConfigurationContext = React.createContext<ISetConfiguration | null>(null)

