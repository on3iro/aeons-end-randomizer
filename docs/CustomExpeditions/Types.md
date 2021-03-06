# Types

## Barracks

type: `{ mageIds: string[] supplyIds: string[] treasureIds: string[] }`

Consists of content id lists for mages, supply cards and treasure cards.

##### Example

```json
{
  "mageIds": ["Adelheim"]
  "supplyIds": ["Jade"]
  "treasureIds": ["DezmodiasOblivionShard", "UlgimorsCoalFragment"]
}

```

## Blueprint

A blueprint describes how a single market card should be randomly rolled.

### type

##### Definition

type: `string: "Gem" | "Relic" | "Spell"`

Specifies what kind of card should be rolled.

##### Example

```json
{
  "type": "Gem"
}
```

### operation

##### Definition

type: `string: "<" | ">" | "=" | "<=" | ">=" | "ANY" | "OR"`

Specifies how the _cost_ filtering for the card to be rolled will be applied.
If **ANY** is used, all available cards will be used to draw from.
If **OR** is used you also need to provide the `values` property, so that
the algorithm can pick from multiple costs.
If any of the other operations is used, the `threshold` property needs to be
provided, so that the algorithm knows how to do the filtering.

##### Examples

```json
{
  "operation": "<",
  "threshold": 4
}
```

```json
{
  "operation": "OR",
  "values": [3, 4]
}
```

### threshold **(optional)**

##### Definition

type: `number`

Threshold which combined with an [operation](#operation) determines, how a
market card will be randomly rolled.

##### Example

```json
{
  "operation": "<",
  "threshold": 4
}
```

### values **(optional)**

##### Defintion

type: `number[]`

List of numbers which combined with the `OR` [operation](#operation) will determine,
how a market card will be randomly rolled.

##### Example

```json
{
  "operation": "OR",
  "values": [3, 4]
}
```

## MarketSetup

### id

##### Definition

type: `string` **unique**

This should be a unique string to identify the market setup.
Make sure that the id does not collide with any of the predifined setups.
Custom setups which where created inside the **Settings** section of **AER** will
always have a unique id.

##### Example

```json
{
  "id": "XYZ123"
}
```

### name

##### Definition

type: `string`

Name of the supply setup which will be displayed under some circumstances (e.g.
during the expedition creation)

##### Example

```json
{
  "name": "My Supply"
}
```

### tiles

##### Definition

type: [`Blueprint[]`](#Blueprint)

Consists of a list of blueprints. Each blueprint defines how a certain market card
should be randomly rolled.

##### Example

```json
{
  "tiles": [
    // This will roll a single 4 cost gem
    {
      "type": "Gem",
      "operation": "=",
      "threshold": "4"
    }
  ]
}
```

## SettingsSnapshotConfig

Defines the content which will be used for all random rolls inside an expedition. This makes each expedition completely independent from the settings users have selected.

### supplySetup

##### Definition

type: [`MarketSetup`](#MarketSetup)

This supply setup is used to roll the inital market for an expedition.

##### Example

For further details see [`MarketSetup`](#MarketSetup)

```json
{
  "supplySetup": { ... }
}
```

### availableCardIds

##### Definition

type: `string[]`

List of supply card ids.

### availableMageIds

##### Definition

type: `string[]`

List of mage ids.

### availableNemesisIds

##### Definition

type: `string[]`

List of nemesis ids.

### availableTreasureIds

##### Definition

type: `string[]`

List of treasure ids.

### availableUpgradedBasicNemesisCardIds

##### Definition

type: `string[]`

List of upgraded basic nemesis card ids.

## BattleConfig

### tier

##### Definition

type: `number: 1 | 2 | 3 | 4`

Sets from which tier the nemesis and new upgraded basic nemesis cards are rolled.

##### Example

```json
{
  "tier": 1
}
```

### nemesisId **(optional)**

##### Definition

type: `string`

Id of a specific nemesis. If this is provided, the specified nemesis will be taken and no nemesis will be rolled randomly.
If ommitted the nemesis for this battle will be rolled regularily.

> **NOTE:** Currently we do not filter out specified nemeses. So if you specify a nemesisId,
> you need to make sure, that it is not part of the `availableNemesisIds` inside
> the [`settingsSnapshotConfig`](#SettingsSnapshotConfig)!
> Otherwise it might happen, that you get nemesis twice, e.g. if the players already rolled the nemesis you specified randomly before!
>
> However you can of course specify the same nemesisId for two different battles if you want.
> That way you can create something like a follow up battle with special rules. ('stage 2' of the fight, if you will ;) )

##### Example

```json
{
  "nemesisId": "CarapaceQueen"
}
```

### newUBNCards

##### Definition

type: `{ type: "custom", ids: string[] }` | `{ type: "regular", addRandom: boolean}`

This specifies what upgraded basic nemesis cards are added to the players pool.

If `type: "custom"` is used and a set of ids of upgraded basic nemesis cards is provided,
these cards will be added to the pool.

> **NOTE:** Currently we do not filter out custom UBNCardIds. So if you specify a UBNCardId,
> you need to make sure, that it is not part of the `availableUpgradedBasicNemesisCardIds` inside
> the [`settingsSnapshotConfig`](#SettingsSnapshotConfig)!
> Otherwise it might happen, that you get a card twice, e.g. if the players already rolled the card you specified randomly before!

If `type: "regular"` is used, `addRandom` will determine if any cards will be added at all.
If set to `true` random cards will be added according to the battles `config.tier`.

##### Examples

```json
{
  "newUBNCards": { "type": "regular", "addRandom": true }
}
```

```json
{
  "newUBNCards": { "type": "custom", "ids": ["Wreck"] }
}
```

### specialRules **(optional)**

##### Definition

type: `string`

Allows to specify some rules text, which will be shown before the battle.

##### Example

```json
{
  "specialRules": "All players start the battle with two damage."
}
```

### lossRewards **(optional)**

##### Definition

type: [`RewardsConfig`](#RewardsConfig)[] | 'skip'

List of [`RewardsConfig`](#RewardsConfig)s.
If specified defines what rewards are being generated each time the battle is lost.
If nothing is specified, the rewards will be rolled regularily.
If `'skip'` is set, the reward screen will be skipped altogether.

#### Example

For further details see [`RewardsConfig`](#RewardsConfig).

```json
{
  "lossRewards": [....]
}
```

### winRewards **(optional)**

##### Definition

type: [`RewardsConfig`](#RewardsConfig) | 'skip'

A single reward configuration, which determines what rewards the players get upon winning
the current battle.
If nothing is specified, the rewards will be rolled regularily.
If `'skip'` is set, the reward screen will be skipped altogether.

#### Example

For further details see [`RewardsConfig`](#RewardsConfig).

```json
{
  "winRewards": {...}
}
```

### treasure

##### Definition

type: `{ level: 1 | 2 | 3, hasTreasure: boolean }`

This property has multiple purposes.
If the expedition starts with a battle which also has a higher tier than 1 and
`hasTreasure` is set to `true`, treasures according to the specified `level` will be rolled.

The same goes for when a battle has been won and treasures should be rolled.

##### Example

```json
{
  "treasure": { "level": 1, "hasTreasure": true }
}
```

### onLoss **(optional)**

##### Defintion

type: `string: "skip"`

If `"skip"` is being specified, the battle cannot be repeated and the expedition will instead continue with the next branch.

##### Example

```json
{
  "onLoss": "skip"
}
```

## NarrativeConfig

### text

##### Definition

type: `string`

The `text` property defines the content the players see, when the narrative screen opens.

##### Examples

```json
{
  "decisions": ["look closer", "leave"]
}
```

### decisions

##### Definition

type: `string[]`

The `decisions` property can either be a list of decisions or `false`.
If the latter is used, this will be the last screen of the expedition.

If a list of decisions is beeing specified, the order of decisions has to match
the order of `nextBranchId`s in the parent [`NarrativeBranch`](#NarrativeBranch). Each decision maps to a respective `nextBranchId`. So if the players make a decision, this determines which branch will be unlocked next.

##### Examples

```json
{
  "text": "Something interesting happens...",
  "decisions": ["look closer", "leave"]
}
```

```json
{
  "text": "This is the end!",
  "decisions": false
}
```

## RewardsConfig

> **NOTE:** This property is not yet fully supported and might not work in the current Beta-build

### type

##### Defintion

type: `string: "custom" | "regular"`

If `regular` is set, rewards will be rolled as usual on a win/loss of a battle.
This does only work in the context of a [`BattleBranch`](#BattleBranch).
In this case all other properties of the config do nothing.

The type `custom` can be specified for [`BattleBranches`](#BattleBranch) as well as [`RewardBranches`](#RewardBranch).

> **NOTE:** Currently we do not filter out custom rewards. So if you use a specific mage, card or treasure as custom reward,
> you need to make sure, that it is not part of the `availableCardIds/availableMageIds/availableTreasureIds` inside
> the [`settingsSnapshotConfig`](#SettingsSnapshotConfig)!
> Otherwise it might happen, that you get an entity twice, e.g. if the players already rolled a mage you specified randomly before!

##### Examples

```json
{
  type: "custom",
  treasure: { ... }
}
```

```json
{
  "type": "regular"
}
```

### treasure **(optional)**

##### Defintion

type: `{ ids: (string | { random: true, level: 1 | 2 | 3 })[] }`

The treasure config consists of one property `ids`. `ids` is a list, which may
consist of two different types:

1. simple treasureIds
2. random roll definitions

A random roll definition consists of the key `random: true` as well as a specifed treasure level.

You can mix and match cases **1** and **2** inside one list.

##### Examples

```json
{
  // This example will add "DezmodiasOblivionShard" as well as a random level 2 treasure
  "type": "custom",
  "treasure": {
    "ids": ["DezmodiasOblivionShard", { "random": true, "level": 2 }]
  }
}
```

### mage **(optional)**

##### Defintion

type: `{ ids: (string | { random: true })[] }`

The mage config consists of one property `ids`. `ids` is a list, which may
consist of two different types:

1. simple mageIds
2. random roll definitions

A random roll definition consists just of the key `random: true`.

You can mix and match cases **1** and **2** inside one list.

##### Examples

```json
{
  // This example will add "Adelheim" as well as a random other mage
  "type": "custom",
  "mage": {
    "ids": ["Adelheim", { "random": true }]
  }
}
```

### supply **(optional)**

##### Defintion

type: `{ ids: (string | Blueprint)[], bigPocket?: boolean }`

The supply config consists of two properties `ids` and the optional `bigPocket`.

`ids` is a list, which may
consist of two different types:

1. simple supplyIds
2. random roll [`Blueprints`](#Blueprint)

You can mix and match cases **1** and **2** inside one list.

If `bigPocket` is set to `true`, these treasures will be added to the barracks without the selection for players to banish any cards. Otherwise the same amount of newly added cards will have to be banished by the players.

##### Examples

```json
{
  // This will add "Jade" as well as any other gem. No cards will have to be banished
  "type": "custom",
  "supply": {
    "ids": [
      "Jade",
      {
        "type": "Gem",
        "operation": "ANY"
      }
    ],
    "bigPocket": true
  }
}
```

## BattleBranch

### type

##### Definition

type: `string: "battle"`

Defines that this is a battle branch.

##### Example

```json
{
  "type": "battle"
}
```

### config

##### Definition

type: [`BattleConfig`](#BattleConfig)

Defines the resulting battle, e.g. what nemesis will appear or be rolled, what.

##### Example

For further details see [`BattleConfig`](#BattleConfig)

```json
{
  "config": { ... }
}
```

### nextBranchId **(optional)**

##### Definition

type: `string`

Identifier of the branch which should follow after the current one.
If ommitted, the score screen will be shown after this battle, and the expedition is finished.

##### Example

```json
{
  "nextBranchId": "NextBattle"
}
```

## NarrativeBranch

### type

##### Definition

type: `string: "narrative"`

Defines that this is a narrative branch.

##### Example

```json
{
  "type": "narrative"
}
```

### config

##### Definition

type: [`NarrativeConfig`](#NarrativeConfig)

Defines the resulting narrative and the decision the players can make.

##### Example

For further details see [`NarrativeConfig`](#NarrativeConfig)

```json
{
  "config": {
    "text": "Once upon a time...",
    "decisions": ["Go left", "Go right"]
  }
}
```

### nextBranchId **(optional)**

##### Definition

type: `string[]`

List of identifiers of branches which might follow after the current one.
Each identifier should have a corresponding `decision` inside `config.decisions`. Which branch follows depends on the decision the players make.
If this property is ommitted, the expedition will end after this branch.

##### Example

```json
{
  "config": {
    ...,
    "decisions": [
      "Go left",
      "Go right"
    ]
  },
  "nextBranchId": [
    "GoingLeftBranch",
    "GoingRightBranch"
  ]
}
```

## RewardBranch

### type

##### Definition

type: `string: "reward"`

Defines that this is a reward branch.

##### Example

```json
{
  "type": "reward"
}
```

### config

##### Definition

type: [`RewardsConfig`](#RewardsConfig)

Defines the resulting narrative and the decision the players can make.

##### Example

For further details see [`RewardsConfig`](#RewardsConfig)

```json
{
  "config": { ... }
}
```

### nextBranchId

##### Definition

type: `string`

Identifier of the branch that follows after the current one.
For RewardBranches this is mandatory as the expedition should not end with a eward.

##### Example

```json
{
  "nextBranchId": "AnotherBranch"
}
```

## SequenceConfig

### firstBranchId

##### Definition

type: `string`

Defines which branch will be used to start off the expedition.
This will be the first unlocked branch.

##### Example

```json
{
  "firstBranchId": "Battle1",
  "branches": {
    "Battle1": { ... },
    ...
  }
}
```

### branches

##### Definition

type: `{ [identifier]: branch }`
where identifier is a `string` and `branch` either a [`BattleBranch`](#BattleBranch),
[`NarrativeBranch`](#NarrativeBranch) or a [`RewardBranch`](#RewardBranch)

Defines all expedition branches and how these are connected with each other.

##### Example

```json
{
  "firstBranchId": "SomeNarrative",
  "branches": {
    "SomeNarrative": {
      "type": "narrative",
      ...
    }
  }
}
```
