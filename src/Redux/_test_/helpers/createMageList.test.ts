import { createMageList, createSlotList } from '../../helpers'

describe('createMageList()', () => {
  it('should return same array with getFirst() entity getter', () => {
    const availableEntities = [
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

    const result = createMageList(availableEntities, blueprints, getFirst)

    expect(result).toEqual({
      availableEntities: [],
      result: availableEntities,
    })
  })

  it('should return modified array with getSecond() entity getter', () => {
    const availableEntities = [
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

    const result = createMageList(availableEntities, blueprints, getSecond)

    expect(result).toEqual({
      availableEntities: [
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

  it('should return smaller list if there are more blueprints than entities', () => {
    const availableEntities = [
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

    const result = createMageList(availableEntities, blueprints, getFirst)

    expect(result).toEqual({
      availableEntities: [],
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
      ],
    })
  })
})
