import * as types from 'aer-types/types'
import { determineUsedExpansions } from '../determineUsedExpansions'

describe('determineUsedExpansions', () => {
  it('should correctly determine used unique expansions', () => {
    const result = determineUsedExpansions(
      {
        Settings: {
          Expansions: {
            Cards: {
              content: {
                ENG: {
                  DiamondCluster: {
                    type: 'Gem',
                    expansion: 'AE',
                    name: 'Diamond Cluster',
                    id: 'DiamondCluster',
                    cost: 4,
                    effect:
                      '\n        <p>\n          Gain 2 <span class="aether">&AElig;</span>.<br/>\n          If this is the second time you have played Diamond Cluster this turn \n          gain an additional 2 <span class="aether">&AElig;</span>.\n        </p>\n      ',
                    keywords: [],
                  },
                },
                PL: {},
                FR: {},
              },
            },
            Mages: {
              content: {
                ENG: {
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
                  },
                },
                PL: {},
                FR: {},
              },
            },
            Nemeses: {
              content: {
                ENG: {
                  Necroswarm: {
                    expansion: 'IW',
                    name: 'Necroswarm',
                    id: 'Necroswarm',
                    health: 70,
                    difficulty: 7,
                    expeditionRating: 4,
                    additionalInfo: '',
                  },
                },
                PL: {},
                FR: {},
              },
            },
            Treasures: {
              content: {
                ENG: {
                  DezmodiasOblivionShard: {
                    id: 'DezmodiasOblivionShard',
                    name: "Dezmodia's Oblivion Shard",
                    expansion: 'IW',
                    level: 1,
                    subtype: 'Gem',
                    effect:
                      '\n        <p>\n        Gain 2 <span class="aether">&AElig;</span> that cannot be used to gain \n        a relic or spell.\n        </p>\n      ',
                  },
                },
                PL: {},
                FR: {},
              },
            },
            UpgradedBasicNemesisCards: {
              content: {
                ENG: {
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
                  },
                },
                PL: {},
                FR: {},
              },
            },
          },
        },
      },
      {
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
          ],
        },
        availableCardIds: ['DiamondCluster'],
        availableMageIds: ['Adelheim'],
        availableNemesisIds: ['Necroswarm'],
        availableTreasureIds: ['DezmodiasOblivionShard'],
        availableUpgradedBasicNemesisCardIds: ['HissingAcid'],
      } as types.SettingsSnapshot
    )

    expect(result).toEqual(['AE', 'IW', 'NA'])
  })
})
