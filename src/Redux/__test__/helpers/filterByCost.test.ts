import { filterByCost } from '../../helpers'

describe('filterByCost', () => {
  test.each([
    // '<'
    [
      { cost: 2 },
      {
        operation: '<',
      },
      true,
    ],
    [
      { cost: 2 },
      {
        operation: '<',
        threshold: 4,
      },
      true,
    ],
    [
      { cost: 5 },
      {
        operation: '<',
        threshold: 4,
      },
      false,
    ],

    // '>'
    [
      { cost: 2 },
      {
        operation: '>',
      },
      true,
    ],
    [
      { cost: 6 },
      {
        operation: '>',
        threshold: 4,
      },
      true,
    ],
    [
      { cost: 3 },
      {
        operation: '>',
        threshold: 4,
      },
      false,
    ],

    // '<='
    [
      { cost: 2 },
      {
        operation: '<=',
      },
      true,
    ],
    [
      { cost: 2 },
      {
        operation: '<=',
        threshold: 4,
      },
      true,
    ],
    [
      { cost: 4 },
      {
        operation: '<=',
        threshold: 4,
      },
      true,
    ],
    [
      { cost: 5 },
      {
        operation: '<=',
        threshold: 4,
      },
      false,
    ],

    // '>='
    [
      { cost: 2 },
      {
        operation: '>=',
      },
      true,
    ],
    [
      { cost: 5 },
      {
        operation: '>=',
        threshold: 4,
      },
      true,
    ],
    [
      { cost: 4 },
      {
        operation: '>=',
        threshold: 4,
      },
      true,
    ],
    [
      { cost: 3 },
      {
        operation: '>=',
        threshold: 4,
      },
      false,
    ],

    // '>='
    [
      { cost: 2 },
      {
        operation: '>=',
      },
      true,
    ],
    [
      { cost: 5 },
      {
        operation: '>=',
        threshold: 4,
      },
      true,
    ],
    [
      { cost: 4 },
      {
        operation: '>=',
        threshold: 4,
      },
      true,
    ],
    [
      { cost: 3 },
      {
        operation: '>=',
        threshold: 4,
      },
      false,
    ],

    // '='
    [
      { cost: 2 },
      {
        operation: '=',
      },
      true,
    ],
    [
      { cost: 2 },
      {
        operation: '=',
        threshold: 4,
      },
      false,
    ],
    [
      { cost: 4 },
      {
        operation: '=',
        threshold: 4,
      },
      true,
    ],
    [
      { cost: 5 },
      {
        operation: '=',
        threshold: 4,
      },
      false,
    ],

    // 'OR'
    [
      { cost: 2 },
      {
        operation: 'OR',
      },
      true,
    ],
    [
      { cost: 2 },
      {
        operation: 'OR',
        values: [2, 3],
      },
      true,
    ],
    [
      { cost: 4 },
      {
        operation: 'OR',
        values: [3, 4, 5, 6],
      },
      true,
    ],
    [
      { cost: 5 },
      {
        operation: 'OR',
        values: [1, 2],
      },
      false,
    ],
  ])('filterByCost(%o, %o)', (a, b, expected) => {
    expect(filterByCost(a, b)).toBe(expected)
  })
})
