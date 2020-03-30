import { handleNewSettingsSnapshot } from '../handleNewSettingsSnapshot'

import { SelectedCardsLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedCards'
import { SelectedMagesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedMages'
import { SelectedNemesesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedNemeses'
import { TreasuresStateSlice } from 'Redux/Store/Settings/Expansions/Treasures'
import { UpgradedBasicNemesisCardsStateSlice } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards'

describe('handleNewSettingsSnapshot()', () => {
  const state: SelectedCardsLookupStateSlice &
    SelectedMagesLookupStateSlice &
    SelectedNemesesLookupStateSlice &
    TreasuresStateSlice &
    UpgradedBasicNemesisCardsStateSlice = {
    Settings: {
      Expansions: {
        SelectedCards: {
          cards: {
            DiamondCluster: {
              type: 'Gem',
              expansion: 'AE',
              name: 'Diamond Cluster',
              id: 'DiamondCluster',
              cost: 4,
              effect:
                '\n        <p>\n          Gain 2 <span class="aether">&AElig;</span>.<br/>\n          If this is the second time you have played Diamond Cluster this turn \n          gain an additional 2 <span class="aether">&AElig;</span>.\n        </p>\n      ',
              keywords: [],
              selected: true,
            },
          },
        },
        SelectedMages: {
          mages: {
            Adelheim: {
              expansion: 'AE',
              name: 'Adelheim',
              id: 'Adelheim',
              mageTitle: 'Breach Mage Weaponsmith',
              ability:
                '\n        <h2>Aethereal Ward</h2>\n        <p class="ability-activation">Activate during the nemesis draw phase:</p>\n        <p>When a nemesis attack or power card is drawn but before it is resolved, \n        you may discard it. It has no effect.\n        <span class="hint">(The nemesis does not draw a replacement card)</span></p>\n      ',
              numberOfCharges: 5,
              uniqueStarters: [
                {
                  type: 'Gem',
                  name: 'Amethyst Shard',
                  expansion: 'AE',
                  id: 'AmethystShard',
                  cost: 0,
                  effect:
                    '\n            <p>\n              Gain 1 <span class="aether">&AElig;</span>.<br/>\n              Any ally may draw a card and then discard a card in hand.\n            </p>\n          ',
                  keywords: [],
                },
              ],
              selected: true,
            },
          },
        },
        SelectedNemeses: {
          nemeses: {
            Necroswarm: {
              expansion: 'IW',
              name: 'Necroswarm',
              id: 'Necroswarm',
              health: 70,
              difficulty: 7,
              expeditionRating: 4,
              additionalInfo: '',
              selected: true,
            },
          },
        },
        Treasures: {
          treasures: {
            DezmodiasOblivionShard: {
              id: 'DezmodiasOblivionShard',
              name: "Dezmodia's Oblivion Shard",
              expansion: 'IW',
              level: 1,
              subtype: 'Gem',
              effect:
                '\n        <p>\n        Gain 2 <span class="aether">&AElig;</span> that cannot be used to gain \n        a relic or spell.\n        </p>\n      ',
              selected: true,
            },
          },
        },
        UpgradedBasicNemesisCards: {
          upgradedBasicNemesisCards: {
            HissingAcid: {
              id: 'HissingAcid',
              name: 'Hissing Acid',
              expansion: 'NA',
              tier: 1,
              type: 'Power',
              power: 3,
              effect:
                '\n      <p>\n        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />\n        <br /> \n        <b>Power 3:</b> Reveal the top card of the turn order deck. If it\'s a player turn order card, Unleash three times. Otherwise, any player suffers 5 damage.\n      </p>\n    ',
              upgraded: true,
              selected: true,
            },
          },
        },
      },
    },
  }

  it('should produce correct result', () => {
    const result = handleNewSettingsSnapshot(state, {
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
      availableCardIds: [],
      availableMageIds: [],
      availableNemesisIds: [],
      availableTreasureIds: [],
      availableUpgradedBasicNemesisCardIds: [],
    })

    expect(result).toMatchSnapshot()
  })
})
