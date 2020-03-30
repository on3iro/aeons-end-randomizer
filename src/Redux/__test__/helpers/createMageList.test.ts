import { createMageList, createSlotList } from '../../helpers'
import { getRandomEntity } from 'Redux/helpers'

describe('createMageList()', () => {
  it('should return same array with getRandomEntity entity getter', () => {
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

    const result = createMageList(
      availableEntities,
      blueprints,
      getRandomEntity,
      { seed: 'test' }
    )

    expect(result).toMatchSnapshot()
  })

  it('should return modified array with getRandomEntity entity getter', () => {
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

    const result = createMageList(
      availableEntities,
      blueprints,
      getRandomEntity,
      { seed: 'test' }
    )

    expect(result).toMatchSnapshot()
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

    const result = createMageList(
      availableEntities,
      blueprints,
      getRandomEntity,
      { seed: 'test' }
    )

    expect(result).toMatchSnapshot()
  })
})
