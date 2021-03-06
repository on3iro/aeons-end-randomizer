// This schema has been created by using https://github.com/YousefED/typescript-json-schema
// To recreate the schema run and replace it in here:
//
// typescript-json-schema tsconfig.json ImportedExpeditionConfig --include src/aer-types/types/index.ts --required --aliasRefs

export const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  allOf: [
    {
      properties: {
        bigPocketVariantConfig: {
          type: 'boolean',
        },
        initialBarracksConfig: {
          $ref: '#/definitions/Partial',
        },
        initialUBNCardsConfig: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        name: {
          type: 'string',
        },
        seedConfig: {
          type: 'string',
        },
        sequenceConfig: {
          $ref: '#/definitions/SequenceConfig',
        },
      },
      required: ['bigPocketVariantConfig', 'name', 'sequenceConfig'],
      type: 'object',
    },
    {
      properties: {
        settingsSnapshotConfig: {
          $ref: '#/definitions/SettingsSnapshotConfig',
        },
      },
      type: 'object',
    },
  ],
  definitions: {
    Array: {
      items: {
        anyOf: [
          {
            properties: {
              level: {
                enum: [1, 2, 3],
                type: 'number',
              },
              random: {
                enum: [true],
                type: 'boolean',
              },
            },
            required: ['level', 'random'],
            type: 'object',
          },
          {
            type: 'string',
          },
        ],
      },
      type: 'array',
    },
    Array_1: {
      items: {
        anyOf: [
          {
            properties: {
              random: {
                enum: [true],
                type: 'boolean',
              },
            },
            required: ['random'],
            type: 'object',
          },
          {
            type: 'string',
          },
        ],
      },
      type: 'array',
    },
    Array_2: {
      items: {
        anyOf: [
          {
            $ref: '#/definitions/IBluePrint',
          },
          {
            type: 'string',
          },
        ],
      },
      type: 'array',
    },
    Array_3: {
      items: {
        type: 'number',
      },
      type: 'array',
    },
    Array_4: {
      items: {
        anyOf: [
          {
            $ref: '#/definitions/IBluePrint',
          },
          {
            $ref: '#/definitions/IEmptyBluePrint',
          },
        ],
      },
      type: 'array',
    },
    BattleConfig: {
      $ref: '#/definitions/__type_2',
    },
    BattleTreasure: {
      $ref: '#/definitions/__type_3',
    },
    BranchesConfig: {
      $ref: '#/definitions/__type_1',
    },
    CardType: {
      enum: ['ANY', 'EMPTY', 'Gem', 'Relic', 'Spell'],
      type: 'string',
    },
    IBluePrint: {
      properties: {
        id: {
          type: ['string', 'number'],
        },
        operation: {
          $ref: '#/definitions/Operation',
        },
        threshold: {
          type: 'number',
        },
        type: {
          $ref: '#/definitions/CardType',
        },
        values: {
          $ref: '#/definitions/Array_3',
        },
      },
      required: ['operation', 'type'],
      type: 'object',
    },
    IEmptyBluePrint: {
      properties: {
        id: {
          type: ['string', 'number'],
        },
        operation: {
          enum: ['NoOp'],
          type: 'string',
        },
        threshold: {
          type: 'number',
        },
        type: {
          enum: ['EMPTY'],
          type: 'string',
        },
        values: {
          $ref: '#/definitions/Array_3',
        },
      },
      required: ['operation', 'type'],
      type: 'object',
    },
    MageRewardConfig: {
      properties: {
        ids: {
          $ref: '#/definitions/Array_1',
        },
      },
      required: ['ids'],
      type: 'object',
    },
    MarketType: {
      enum: ['custom', 'official'],
      type: 'string',
    },
    NarrativeConfig: {
      $ref: '#/definitions/__type_4',
    },
    NemesisTier: {
      enum: [1, 2, 3, 4],
      type: 'number',
    },
    OnLoss: {
      enum: ['skip'],
      type: 'string',
    },
    Operation: {
      type: 'string',
    },
    Partial: {
      $ref: '#/definitions/Partial<Barracks>',
      description: 'Make all properties in T optional',
    },
    'Partial<Barracks>': {
      properties: {
        mageIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        supplyIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        treasureIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
      },
      type: 'object',
    },
    RewardsConfig: {
      anyOf: [
        {
          properties: {
            mage: {
              $ref: '#/definitions/MageRewardConfig',
            },
            supply: {
              $ref: '#/definitions/SupplyRewardConfig',
            },
            treasure: {
              $ref: '#/definitions/TreasureRewardConfig',
            },
            type: {
              enum: ['custom'],
              type: 'string',
            },
          },
          required: ['type'],
          type: 'object',
        },
        {
          properties: {
            type: {
              enum: ['regular'],
              type: 'string',
            },
          },
          required: ['type'],
          type: 'object',
        },
      ],
    },
    SequenceConfig: {
      $ref: '#/definitions/__type',
    },
    SettingsSnapshotConfig: {
      properties: {
        availableCardIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        availableMageIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        availableNemesisIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        availableTreasureIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        availableUpgradedBasicNemesisCardIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        supplySetup: {
          properties: {
            active: {
              type: 'boolean',
            },
            default: {
              type: 'boolean',
            },
            id: {
              type: 'string',
            },
            isDirty: {
              type: 'boolean',
            },
            isNew: {
              type: 'boolean',
            },
            name: {
              type: 'string',
            },
            tiles: {
              $ref: '#/definitions/Array_4',
            },
            type: {
              $ref: '#/definitions/MarketType',
            },
          },
          required: ['active', 'id', 'name', 'tiles', 'type'],
          type: 'object',
        },
      },
      required: [
        'availableCardIds',
        'availableMageIds',
        'availableNemesisIds',
        'availableTreasureIds',
        'availableUpgradedBasicNemesisCardIds',
        'supplySetup',
      ],
      type: 'object',
    },
    SupplyRewardConfig: {
      properties: {
        bigPocket: {
          type: 'boolean',
        },
        ids: {
          $ref: '#/definitions/Array_2',
        },
      },
      required: ['ids'],
      type: 'object',
    },
    TreasureLevel: {
      enum: [1, 2, 3],
      type: 'number',
    },
    TreasureRewardConfig: {
      properties: {
        ids: {
          $ref: '#/definitions/Array',
        },
      },
      required: ['ids'],
      type: 'object',
    },
    __type: {
      properties: {
        branches: {
          $ref: '#/definitions/BranchesConfig',
        },
        firstBranchId: {
          type: 'string',
        },
      },
      required: ['branches', 'firstBranchId'],
      type: 'object',
    },
    __type_1: {
      additionalProperties: {
        anyOf: [
          {
            properties: {
              config: {
                $ref: '#/definitions/BattleConfig',
              },
              nextBranchId: {
                type: 'string',
              },
              type: {
                enum: ['battle'],
                type: 'string',
              },
            },
            required: ['config', 'type'],
            type: 'object',
          },
          {
            properties: {
              config: {
                $ref: '#/definitions/NarrativeConfig',
              },
              nextBranchId: {
                items: {
                  type: 'string',
                },
                type: 'array',
              },
              type: {
                enum: ['narrative'],
                type: 'string',
              },
            },
            required: ['config', 'type'],
            type: 'object',
          },
          {
            properties: {
              config: {
                $ref: '#/definitions/RewardsConfig',
              },
              nextBranchId: {
                type: 'string',
              },
              type: {
                enum: ['reward'],
                type: 'string',
              },
            },
            required: ['config', 'nextBranchId', 'type'],
            type: 'object',
          },
        ],
      },
      type: 'object',
    },
    __type_2: {
      properties: {
        lossRewards: {
          anyOf: [
            {
              items: {
                anyOf: [
                  {
                    properties: {
                      mage: {
                        $ref: '#/definitions/MageRewardConfig',
                      },
                      supply: {
                        $ref: '#/definitions/SupplyRewardConfig',
                      },
                      treasure: {
                        $ref: '#/definitions/TreasureRewardConfig',
                      },
                      type: {
                        enum: ['custom'],
                        type: 'string',
                      },
                    },
                    required: ['type'],
                    type: 'object',
                  },
                  {
                    properties: {
                      type: {
                        enum: ['regular'],
                        type: 'string',
                      },
                    },
                    required: ['type'],
                    type: 'object',
                  },
                ],
              },
              type: 'array',
            },
            {
              enum: ['skip'],
              type: 'string',
            },
          ],
        },
        nemesisId: {
          type: 'string',
        },
        newUBNCards: {
          anyOf: [
            {
              properties: {
                ids: {
                  items: {
                    type: 'string',
                  },
                  type: 'array',
                },
                type: {
                  enum: ['custom'],
                  type: 'string',
                },
              },
              required: ['ids', 'type'],
              type: 'object',
            },
            {
              properties: {
                addRandom: {
                  type: 'boolean',
                },
                type: {
                  enum: ['regular'],
                  type: 'string',
                },
              },
              required: ['addRandom', 'type'],
              type: 'object',
            },
          ],
        },
        onLoss: {
          $ref: '#/definitions/OnLoss',
        },
        specialRules: {
          type: 'string',
        },
        tier: {
          $ref: '#/definitions/NemesisTier',
        },
        treasure: {
          $ref: '#/definitions/BattleTreasure',
        },
        winRewards: {
          anyOf: [
            {
              properties: {
                mage: {
                  $ref: '#/definitions/MageRewardConfig',
                },
                supply: {
                  $ref: '#/definitions/SupplyRewardConfig',
                },
                treasure: {
                  $ref: '#/definitions/TreasureRewardConfig',
                },
                type: {
                  enum: ['custom'],
                  type: 'string',
                },
              },
              required: ['type'],
              type: 'object',
            },
            {
              properties: {
                type: {
                  enum: ['regular'],
                  type: 'string',
                },
              },
              required: ['type'],
              type: 'object',
            },
            {
              enum: ['skip'],
              type: 'string',
            },
          ],
        },
      },
      required: ['newUBNCards', 'tier', 'treasure'],
      type: 'object',
    },
    __type_3: {
      properties: {
        hasTreasure: {
          type: 'boolean',
        },
        level: {
          $ref: '#/definitions/TreasureLevel',
        },
      },
      required: ['hasTreasure'],
      type: 'object',
    },
    __type_4: {
      properties: {
        decisions: {
          anyOf: [
            {
              items: {
                type: 'string',
              },
              type: 'array',
            },
            {
              enum: [false],
              type: 'boolean',
            },
          ],
        },
        text: {
          type: 'string',
        },
      },
      required: ['decisions', 'text'],
      type: 'object',
    },
  },
}
