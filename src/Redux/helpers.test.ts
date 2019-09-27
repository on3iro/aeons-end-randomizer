import { createMageList, createSlotList } from './helpers'

describe('createMageList()', () => {
  it('should return same array with getFirst() entity getter', () => {
    const availableMages = [
      {
        id: 'mage1',
        expansion: '',
        name: '',
        uniqueStarters: [],
        mageTitle: '',
        ability: '',
        complexityRating: 1,
        numberOfCharges: 1,
      },
      {
        id: 'mage2',
        expansion: '',
        name: '',
        uniqueStarters: [],
        mageTitle: '',
        ability: '',
        complexityRating: 1,
        numberOfCharges: 1,
      },
      {
        id: 'mage3',
        expansion: '',
        name: '',
        uniqueStarters: [],
        mageTitle: '',
        ability: '',
        complexityRating: 1,
        numberOfCharges: 1,
      },
    ]
    const blueprints = createSlotList(3)
    const getFirst = (available: any[]) => available[0]

    const result = createMageList(availableMages, blueprints, getFirst)

    expect(result).toEqual({
      availableMages: [],
      result: availableMages,
    })
  })

  it('should return modified array with getSecond() entity getter', () => {
    const availableMages = [
      {
        id: 'mage1',
        expansion: '',
        name: '',
        uniqueStarters: [],
        mageTitle: '',
        ability: '',
        complexityRating: 1,
        numberOfCharges: 1,
      },
      {
        id: 'mage2',
        expansion: '',
        name: '',
        uniqueStarters: [],
        mageTitle: '',
        ability: '',
        complexityRating: 1,
        numberOfCharges: 1,
      },
      {
        id: 'mage3',
        expansion: '',
        name: '',
        uniqueStarters: [],
        mageTitle: '',
        ability: '',
        complexityRating: 1,
        numberOfCharges: 1,
      },
      {
        id: 'mage4',
        expansion: '',
        name: '',
        uniqueStarters: [],
        mageTitle: '',
        ability: '',
        complexityRating: 1,
        numberOfCharges: 1,
      },
    ]
    const blueprints = createSlotList(2)
    const getSecond = (available: any[]) => available[1]

    const result = createMageList(availableMages, blueprints, getSecond)

    expect(result).toEqual({
      availableMages: [
        {
          id: 'mage1',
          expansion: '',
          name: '',
          uniqueStarters: [],
          mageTitle: '',
          ability: '',
          complexityRating: 1,
          numberOfCharges: 1,
        },
        {
          id: 'mage4',
          expansion: '',
          name: '',
          uniqueStarters: [],
          mageTitle: '',
          ability: '',
          complexityRating: 1,
          numberOfCharges: 1,
        },
      ],
      result: [
        {
          id: 'mage2',
          expansion: '',
          name: '',
          uniqueStarters: [],
          mageTitle: '',
          ability: '',
          complexityRating: 1,
          numberOfCharges: 1,
        },
        {
          id: 'mage3',
          expansion: '',
          name: '',
          uniqueStarters: [],
          mageTitle: '',
          ability: '',
          complexityRating: 1,
          numberOfCharges: 1,
        },
      ],
    })
  })

  it('should return blueprint if there are more blueprints than entities', () => {
    const availableMages = [
      {
        id: 'mage1',
        expansion: '',
        name: '',
        uniqueStarters: [],
        mageTitle: '',
        ability: '',
        complexityRating: 1,
        numberOfCharges: 1,
      },
    ]
    const blueprints = createSlotList(2)
    const getFirst = (available: any[]) => available[0]

    const result = createMageList(availableMages, blueprints, getFirst)

    expect(result).toEqual({
      availableMages: [],
      result: [
        {
          id: 'mage1',
          expansion: '',
          name: '',
          uniqueStarters: [],
          mageTitle: '',
          ability: '',
          complexityRating: 1,
          numberOfCharges: 1,
        },
        { type: 'EMPTY', operation: 'NoOp' },
      ],
    })
  })
})
