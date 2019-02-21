export default {
  "market1": {
    name: "MARKET SETUP 1",
    tiles: [
      { type: "Gem", operation: "<", threshold: 4 },
      { type: "Gem", operation: "=", threshold: 4 },
      { type: "Gem", operation: "ANY" },
      { type: "Relic", operation: "ANY" },
      { type: "Relic", operation: "ANY" },
      { type: "Spell", operation: "<", threshold: 5 },
      { type: "Spell", operation: "<", threshold: 5 },
      { type: "Spell", operation: ">", threshold: 5 },
      { type: "Spell", operation: ">", threshold: 5 },
    ]
  },
  "market2": {
    name: "MARKET SETUP 2",
    tiles: [
      { type: "Gem", operation: "<", threshold: 3 },
      { type: "Gem", operation: ">", threshold: 3 },
      { type: "Gem", operation: ">", threshold: 3 },
      { type: "Relic", operation: ">", threshold: 4 },
      { type: "Relic", operation: "ANY" },
      { type: "Spell", operation: "<", threshold: 6 },
      { type: "Spell", operation: "<", threshold: 6 },
      { type: "Spell", operation: "<", threshold: 6 },
      { type: "Spell", operation: ">", threshold: 6 },
    ]
  },
  "market3": {
    name: "MARKET SETUP 3",
    tiles: [
      { type: "Gem", operation: "<", threshold: 4 },
      { type: "Gem", operation: "OR", values: [4, 5] },
      { type: "Gem", operation: "OR", values: [4, 5] },
      { type: "Relic", operation: "ANY" },
      { type: "Spell", operation: "=", threshold: 3 },
      { type: "Spell", operation: "=", threshold: 4 },
      { type: "Spell", operation: ">", threshold: 5 },
      { type: "Spell", operation: ">", threshold: 5 },
      { type: "Spell", operation: ">", threshold: 5 },
    ]
  },
  "market4": {
    name: "MARKET SETUP 4",
    tiles: [
      { type: "Gem", operation: ">", threshold: 4 },
      { type: "Gem", operation: "ANY" },
      { type: "Gem", operation: "ANY" },
      { type: "Relic", operation: "<", threshold: 4 },
      { type: "Relic", operation: ">", threshold: 4 },
      { type: "Relic", operation: "ANY" },
      { type: "Spell", operation: "<", threshold: 5 },
      { type: "Spell", operation: ">", threshold: 5 },
      { type: "Spell", operation: "ANY" },
    ]
  },
  "market5": {
    name: "MARKET SETUP 5",
    tiles: [
      { type: "Gem", operation: "=", threshold: 2 },
      { type: "Gem", operation: "=", threshold: 3 },
      { type: "Gem", operation: "=", threshold: 4 },
      { type: "Gem", operation: "=", threshold: 5 },
      { type: "Relic", operation: "ANY" },
      { type: "Spell", operation: "=", threshold: 4 },
      { type: "Spell", operation: "=", threshold: 5 },
      { type: "Spell", operation: "=", threshold: 6 },
      { type: "Spell", operation: ">", threshold: 6 },
    ]
  },
  "market6": {
    name: "MARKET SETUP 6",
    tiles: [
      { type: "Gem", operation: "=", threshold: 3 },
      { type: "Gem", operation: "=", threshold: 4 },
      { type: "Relic", operation: "<", threshold: 4 },
      { type: "Relic", operation: ">", threshold: 4 },
      { type: "Relic", operation: "ANY" },
      { type: "Spell", operation: "OR", values: [3, 4] },
      { type: "Spell", operation: "OR", values: [5, 6] },
      { type: "Spell", operation: "OR", values: [5, 6] },
      { type: "Spell", operation: ">", threshold: 6 },
    ]
  },
  "random": {
    name: "RANDOM SETUP",
    tiles: [
      { type: "Gem", operation: "ANY" },
      { type: "Gem", operation: "ANY" },
      { type: "Gem", operation: "ANY" },
      { type: "Relic", operation: "ANY" },
      { type: "Relic", operation: "ANY" },
      { type: "Spell", operation: "ANY" },
      { type: "Spell", operation: "ANY" },
      { type: "Spell", operation: "ANY" },
      { type: "Spell", operation: "ANY" },
    ]
  },
}

