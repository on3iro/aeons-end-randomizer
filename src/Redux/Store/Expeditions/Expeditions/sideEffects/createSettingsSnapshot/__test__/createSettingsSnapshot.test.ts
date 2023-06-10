import { createSettingsSnapshot } from '../index'
import * as handleExistingSettingsSnapshotModule from '../handleExistingSettingsSnapshot'
import * as handleNewSettingsSnapshotModule from '../handleNewSettingsSnapshot'
import * as types from 'aer-types/types'

import { rootState } from '__fixtures__/rootState'

describe('createSettingsSnapshot()', () => {
  it('should call handleNewSettingsSnapshot()', () => {
    const handleNewSettingsSnapshotSpy = jest.spyOn(
      handleNewSettingsSnapshotModule,
      'handleNewSettingsSnapshot'
    )

    const handleExistingSettingsSnapshotSpy = jest.spyOn(
      handleExistingSettingsSnapshotModule,
      'handleExistingSettingsSnapshot'
    )

    createSettingsSnapshot(rootState, undefined)

    expect(handleNewSettingsSnapshotSpy).toHaveBeenCalled()
    expect(handleExistingSettingsSnapshotSpy).not.toHaveBeenCalled()

    handleNewSettingsSnapshotSpy.mockRestore()
    handleExistingSettingsSnapshotSpy.mockRestore()
  })

  it('should call handleExistingSettingsSnapshot()', () => {
    const handleNewSettingsSnapshotSpy = jest.spyOn(
      handleNewSettingsSnapshotModule,
      'handleNewSettingsSnapshot'
    )

    const handleExistingSettingsSnapshotSpy = jest.spyOn(
      handleExistingSettingsSnapshotModule,
      'handleExistingSettingsSnapshot'
    )

    createSettingsSnapshot(rootState, {
      name: 'TEST',
      bigPocketVariantConfig: true,
      sequenceConfig: {
        firstBranchId: '',
        branches: {} as types.BranchesConfig,
      },
      settingsSnapshotConfig: {
        supplySetup: {
          id: 'random',
          name: 'Random Setup (Default)',
          type: 'official',
          default: true,
          active: true,
          tiles: [
            {
              type: 'Gem',
              operation: 'ANY',
            },
            {
              type: 'Gem',
              operation: 'ANY',
            },
            {
              type: 'Gem',
              operation: 'ANY',
            },
            {
              type: 'Relic',
              operation: 'ANY',
            },
            {
              type: 'Relic',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
          ],
        },
        availableCardIds: [
          'DiamondCluster',
          'ChaosArc',
          'Ignite',
          'EssenceTheft',
          'SearingRuby',
        ],
        availableMageIds: ['Adelheim'],
        availableNemesisIds: ['CarapaceQueen', 'CrookedMask'],
        availableTreasureIds: [
          'DezmodiasOblivionShard',
          'UlgimorsCoalFragment',
        ],
        availableUpgradedBasicNemesisCardIds: [
          'HissingAcid',
          'Wreck',
          'BaneCommander',
        ],
      },
    })

    expect(handleNewSettingsSnapshotSpy).not.toHaveBeenCalled()
    expect(handleExistingSettingsSnapshotSpy).toHaveBeenCalled()

    handleNewSettingsSnapshotSpy.mockRestore()
    handleExistingSettingsSnapshotSpy.mockRestore()
  })

  it('should produce correct result', () => {
    const result = createSettingsSnapshot(rootState, {
      name: 'TEST',
      bigPocketVariantConfig: true,
      sequenceConfig: {
        firstBranchId: '',
        branches: {} as types.BranchesConfig,
      },
      settingsSnapshotConfig: {
        supplySetup: {
          id: 'random',
          name: 'Random Setup (Default)',
          type: 'official',
          default: true,
          active: true,
          tiles: [
            {
              type: 'Gem',
              operation: 'ANY',
            },
            {
              type: 'Gem',
              operation: 'ANY',
            },
            {
              type: 'Gem',
              operation: 'ANY',
            },
            {
              type: 'Relic',
              operation: 'ANY',
            },
            {
              type: 'Relic',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
          ],
        },
        availableCardIds: [
          'DiamondCluster',
          'ChaosArc',
          'Ignite',
          'EssenceTheft',
          'SearingRuby',
        ],
        availableMageIds: ['Adelheim'],
        availableNemesisIds: ['CarapaceQueen', 'CrookedMask'],
        availableTreasureIds: [
          'DezmodiasOblivionShard',
          'UlgimorsCoalFragment',
        ],
        availableUpgradedBasicNemesisCardIds: [
          'HissingAcid',
          'Wreck',
          'BaneCommander',
        ],
      },
    })

    expect(result).toMatchSnapshot()
  })
})
