import { createMageList, createSlotList } from './helpers'


describe('createMageList()', () => {
  it('should return same array with getFirst() entity getter', () => {
    const availableMages = [
      { id: "mage1", expansion: "", name: "" },
      { id: "mage2", expansion: "", name: "" },
      { id: "mage3", expansion: "", name: "" }
    ]
    const blueprints = createSlotList(3)
    const getFirst = (available: any[]) => available[0]

    const result = createMageList(availableMages, blueprints, getFirst)

    expect(result).toEqual({
      availableMages: [],
      result: availableMages
    })
  })

  it('should return modified array with getSecond() entity getter', () => {
    const availableMages = [
      { id: "mage1", expansion: "", name: "" },
      { id: "mage2", expansion: "", name: "" },
      { id: "mage3", expansion: "", name: "" },
      { id: "mage4", expansion: "", name: "" }
    ]
    const blueprints = createSlotList(2)
    const getSecond = (available: any[]) => available[1]

    const result = createMageList(availableMages, blueprints, getSecond)

    expect(result).toEqual({
      availableMages: [ { id: "mage1", expansion: "", name: "" }, { id: "mage4", expansion: "", name: "" } ],
      result: [
        { id: "mage2", expansion: "", name: "" },
        { id: "mage3", expansion: "", name: "" }
      ]
    })
  })

  it('should return blueprint if there are more blueprints than entities', () => {
    const availableMages = [
      { id: "mage1", expansion: "", name: "" }
    ]
    const blueprints = createSlotList(2)
    const getFirst = (available: any[]) => available[0]

    const result = createMageList(availableMages, blueprints, getFirst)

    expect(result).toEqual({
      availableMages: [],
      result: [
        { id: "mage1", expansion: "", name: "" },
        { type: "EMPTY", operation: "NoOp" }
      ]
    })
  })
})
