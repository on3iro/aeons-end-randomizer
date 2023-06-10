import { migrate } from '../index'

import { rootState } from '__fixtures__/rootState'

describe('Expedition | migrations', () => {
  it('should migrate to current expedition state', () => {
    // NOTE: For each migration add a respective old base
    // expedition to the rootState fixture and update the snapshot accordingly (check that the snapshot is correct)

    const result = migrate(() => rootState, {
      newState: {
        ...rootState.Expeditions.Expeditions,
      },
    })

    expect(result).toMatchSnapshot()
  })
})
