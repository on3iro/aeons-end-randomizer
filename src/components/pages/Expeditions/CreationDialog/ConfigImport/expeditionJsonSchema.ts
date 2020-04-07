//
// This schema has been created by using https://github.com/YousefED/typescript-json-schema
// To recreate the schema run 'typescript-json-schema tsconfig.json ExpeditionConfig --include ./src/types/**/*.ts --required' at the project root,
// copy it to this directory and remove unwanted properties.
//

export const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  definitions: {
    CardType: {
      enum: ['EMPTY', 'Gem', 'Relic', 'Spell'],
      type: 'string',
    },
    IBluePrint: {
      properties: {
        id: {
          type: 'string',
        },
        operation: {
          type: 'string',
        },
        threshold: {
          type: 'number',
        },
        type: {
          $ref: '#/definitions/CardType',
        },
        values: {
          items: {
            type: 'number',
          },
          type: 'array',
        },
      },
      required: ['operation', 'type'],
      type: 'object',
    },
    IEmptyBluePrint: {
      properties: {
        id: {
          type: 'string',
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
          items: {
            type: 'number',
          },
          type: 'array',
        },
      },
      required: ['operation', 'type'],
      type: 'object',
    },
    MarketType: {
      enum: ['custom', 'official'],
      type: 'string',
    },
  },
  properties: {
    bigPocketVariantConfig: {
      type: 'boolean',
    },
    initialBarracksConfig: {
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
      required: ['mageIds', 'supplyIds', 'treasureIds'],
      type: 'object',
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
      properties: {
        branches: {
          additionalProperties: {
            anyOf: [
              {
                properties: {
                  config: {
                    properties: {
                      lossRewards: {
                        items: {
                          anyOf: [
                            {
                              properties: {
                                mage: {
                                  properties: {
                                    ids: {
                                      items: {
                                        anyOf: [
                                          {
                                            properties: {
                                              random: {
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
                                  },
                                  required: ['ids'],
                                  type: 'object',
                                },
                                supply: {
                                  properties: {
                                    bigPocket: {
                                      type: 'boolean',
                                    },
                                    ids: {
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
                                  },
                                  required: ['ids'],
                                  type: 'object',
                                },
                                treasure: {
                                  properties: {
                                    ids: {
                                      items: {
                                        anyOf: [
                                          {
                                            properties: {
                                              level: {
                                                enum: [1, 2, 3],
                                                type: 'number',
                                              },
                                              random: {
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
                                  },
                                  required: ['ids'],
                                  type: 'object',
                                },
                              },
                              type: 'object',
                            },
                            {
                              properties: {
                                regular: {
                                  enum: [true],
                                  type: 'boolean',
                                },
                              },
                              required: ['regular'],
                              type: 'object',
                            },
                          ],
                        },
                        type: 'array',
                      },
                      nemesisId: {
                        type: 'string',
                      },
                      newUBNCards: {
                        properties: {
                          addRandom: {
                            type: 'boolean',
                          },
                          ids: {
                            items: {
                              type: 'string',
                            },
                            type: 'array',
                          },
                        },
                        required: ['addRandom', 'ids'],
                        type: 'object',
                      },
                      onLoss: {
                        enum: ['skip'],
                        type: 'string',
                      },
                      specialRules: {
                        type: 'string',
                      },
                      tier: {
                        enum: [1, 2, 3, 4],
                        type: 'number',
                      },
                      treasure: {
                        properties: {
                          hasTreasure: {
                            type: 'boolean',
                          },
                          level: {
                            enum: [1, 2, 3],
                            type: 'number',
                          },
                        },
                        required: ['hasTreasure'],
                        type: 'object',
                      },
                      winRewards: {
                        anyOf: [
                          {
                            properties: {
                              mage: {
                                properties: {
                                  ids: {
                                    items: {
                                      anyOf: [
                                        {
                                          properties: {
                                            random: {
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
                                },
                                required: ['ids'],
                                type: 'object',
                              },
                              supply: {
                                properties: {
                                  bigPocket: {
                                    type: 'boolean',
                                  },
                                  ids: {
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
                                },
                                required: ['ids'],
                                type: 'object',
                              },
                              treasure: {
                                properties: {
                                  ids: {
                                    items: {
                                      anyOf: [
                                        {
                                          properties: {
                                            level: {
                                              enum: [1, 2, 3],
                                              type: 'number',
                                            },
                                            random: {
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
                                },
                                required: ['ids'],
                                type: 'object',
                              },
                            },
                            type: 'object',
                          },
                          {
                            properties: {
                              regular: {
                                enum: [true],
                                type: 'boolean',
                              },
                            },
                            required: ['regular'],
                            type: 'object',
                          },
                        ],
                      },
                    },
                    required: ['newUBNCards', 'tier', 'treasure'],
                    type: 'object',
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
                    properties: {
                      descisions: {
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
                    required: ['descisions', 'text'],
                    type: 'object',
                  },
                  nextBranchId: {
                    additionalProperties: false,
                    patternProperties: {
                      '^[0-9]+$': {
                        type: 'string',
                      },
                    },
                    type: 'object',
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
                    anyOf: [
                      {
                        properties: {
                          mage: {
                            properties: {
                              ids: {
                                items: {
                                  anyOf: [
                                    {
                                      properties: {
                                        random: {
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
                            },
                            required: ['ids'],
                            type: 'object',
                          },
                          supply: {
                            properties: {
                              bigPocket: {
                                type: 'boolean',
                              },
                              ids: {
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
                            },
                            required: ['ids'],
                            type: 'object',
                          },
                          treasure: {
                            properties: {
                              ids: {
                                items: {
                                  anyOf: [
                                    {
                                      properties: {
                                        level: {
                                          enum: [1, 2, 3],
                                          type: 'number',
                                        },
                                        random: {
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
                            },
                            required: ['ids'],
                            type: 'object',
                          },
                        },
                        type: 'object',
                      },
                      {
                        properties: {
                          regular: {
                            enum: [true],
                            type: 'boolean',
                          },
                        },
                        required: ['regular'],
                        type: 'object',
                      },
                    ],
                  },
                  nextBranchId: {
                    type: 'string',
                  },
                  type: {
                    enum: ['reward'],
                    type: 'string',
                  },
                },
                required: ['config', 'type'],
                type: 'object',
              },
            ],
          },
          type: 'object',
        },
        firstBranchId: {
          type: 'string',
        },
      },
      required: ['branches', 'firstBranchId'],
      type: 'object',
    },
    settingsSnapshotConfig: {
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
    variantIdConfig: {
      type: 'string',
    },
  },
  required: [
    'bigPocketVariantConfig',
    'name',
    'sequenceConfig',
    'settingsSnapshotConfig',
  ],
  type: 'object',
}
