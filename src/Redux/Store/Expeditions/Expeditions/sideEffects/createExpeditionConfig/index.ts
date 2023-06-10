import * as types from 'aer-types/types'

import { BaseConfig } from '../../types'

import { handleWithoutConfig } from './handleWithoutConfig'
import { handleExistingConfig } from './handleExistingConfig'
import { GetStateFn } from 'Redux/helpers'

export const createExpedition = (
  getState: GetStateFn,
  baseConfig: BaseConfig
): types.Expedition => {
  const state = getState()
  const { expeditionConfig } = baseConfig

  if (expeditionConfig) {
    return handleExistingConfig(
      {
        // This transformation is necessary so that typescript knows
        // that we actually have an expedition (just checking baseConfig.expeditionConfig
        // and handing that over as argument did somehow not work)
        ...baseConfig,
        expeditionConfig,
      },
      state
    )
  } else {
    return handleWithoutConfig(baseConfig, state)
  }
}
