//
// This schema has been created by using https://github.com/YousefED/typescript-json-schema
// To recreate the schema run 'typescript-json-schema tsconfig.json Expedition' at the project root,
// copy it to this directory and remove unwanted properties.
//

export const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  definitions: {
    CardType: {
      enum: ['EMPTY', 'Gem', 'Relic', 'Spell'],
      type: 'string',
    },
    Function: {
      description: 'Creates a new function.',
      properties: {
        arguments: {},
        caller: {
          $ref: '#/definitions/Function',
        },
        length: {
          type: 'number',
        },
        name: {
          description:
            'Returns the name of the function. Function names are read-only and can not be changed.',
          type: 'string',
        },
        prototype: {},
      },
      type: 'object',
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
      type: 'object',
    },
    MarketType: {
      enum: ['custom', 'official'],
      type: 'string',
    },
    Object: {
      description: 'Provides functionality common to all JavaScript objects.',
      properties: {
        constructor: {
          $ref: '#/definitions/Function',
          description:
            'The initial value of Object.prototype.constructor is the standard built-in Object constructor.',
        },
      },
      type: 'object',
    },
  },
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    settingsSnapshot: {
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
          type: 'object',
          required: ['id', 'name', 'tiles'],
        },
      },
      type: 'object',
      required: [
        'availableCardIds',
        'availableMageIds',
        'availableNemesisIds',
        'availableTreasureIds',
        'availableUpgradedBasicNemesisCardIds',
        'supplySetup',
      ],
    },
    variantId: {
      type: 'string',
    },
    bigPocketVariant: {
      type: 'boolean',
    },
    seed: {
      properties: {
        seed: {
          type: 'string',
        },
      },
      type: 'object',
    },
  },
  type: 'object',
  required: ['settingsSnapshot', 'id'],
}
