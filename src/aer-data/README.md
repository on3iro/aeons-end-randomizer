# aer-data

Data for https://github.com/on3iro/aeons-end-randomizer

## Installation

```bash
yarn add aer-data
```

## Contribution Guidelines

### Fork & clone repository

First you need to fork the repository to have your own copy.

Then you can clone your repository:

```
With HTTPS:
git clone https://github.com/<your-user-name>/aer-data.git

With SSH:
git clone git@github.com:<your-user-name>/aer-data.git
```

To install the required dependencies run `yarn` inside the _src-folder_.

### Add new language

> The best way to translate the content into your target language is to copy the ENG-Folder and translate the expansions that are available in your language.

The ENG-folder is a good reference for your own language package. Simply copy the whole folder and rename it into your language key, e.g. DE.

A language folder contains an `index.ts` and folders for all the available expansions in your language. If expansions are not (yet) available in your language you can remove the corresponding folders (optional).

Let's say, we have 3 available expansions in our target language: _Aeons End_, _The New Age_ and _The Depths_.

Our language-folder e.g. _DE_ should have at least 3 sub-folders:

- aeonsEnd
- theNewAge
- theDepths

The `index.ts` contains all of the expansion imports. In our example we need 3 imports:

```javascript
import { aeonsEndData } from './aeonsEnd'
import { newAgeData } from './theNewAge'
import { theDepthsData } from './theDepths'
```

Now we need to configure the language object. We have to change the variable name and add our expansions:

```javascript
const DE: IExpansionData = {
  AE: aeonsEndData,
  Depths: theDepthsData,
  NA: newAgeData,
}

export default DE
```

> It's important that the keys, in our case AE, Depths and NA, are the same as in the english version.

### Translate expansion

> The best way to translate an expansion into your target language is to copy the expansion folder from the ENG-Folder into your language folder and translate the content.

An expansion folder contains an `index.ts` and files for the expansion content.

The `index.ts` is like the one of the language package. We import the available data files for the expansion and configure the data object. When we copied the expansion from the ENG folder we just need to change the name into the target language, e.g. for _The Depths_ the `index.ts` in DE would look like this:

```javascript
import { IExpansion } from 'aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theDepthsData: IExpansion = {
  id: 'Depths',
  name: 'Aus den Tiefen',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
```

The different files for the expansion content could be:

| File name                      | Description                                                          |
| :----------------------------- | :------------------------------------------------------------------- |
| `nemeses.ts`                   | Contains the nemeses                                                 |
| `mages.ts`                     | Contains the mages                                                   |
| `cards.ts`                     | Contains the supply cards (gems, relics, spells)                     |
| `treasures.ts`                 | Contains the treasures                                               |
| `basicNemesisCards.ts`         | Contains the basic nemesis cards (minions, attacks, powers)          |
| `upgradedBasicNemesisCards.ts` | Contains the upgraded basic nemesis cards (minions, attacks, powers) |

Not every expansion has all the different files. Just include the file when content of this type exists, e.g you don't need to include the treasures.ts when the expansion has no treasures.

#### HTML-Tags

While translating the content you will see some HTML-tags. We need those to style the content for the Aeons-End-Randomizer.

Some template-snippets which are used throughout the data:
Snippet / Card Info | Description
:--- | :---
`<span class="hint">(The nemesis does not draw a replacement card)</span>` | Used for information in parentesis or when printed in smaller Text.
`<span class="aether">&AElig;</span>` | That's the symbol for &AElig;ther.
`<span class="or">OR</span>` | Used when there is an OR-Condition in the text.
`<b>Cast:</b>`, `<b>Power 2:</b>`, etc | All keywords which are bold on the card look like this. E.g. Cast, Persistant, Power, Attach, ...
`<br/>` | Sometimes lines end with a line-break &lt;br /&gt;. That's when on a card the sentence begins on a new line, althought there is still enough space on the line before, e.g. `<b>Cast:</b> Some text<br />`
&lt;p&gt;...&lt;/p&gt;<br/>&lt;p&gt;...&lt;/p&gt; | Multiple &lt;p&gt;-Tags are used when there are visible paragraphs (whitespace between text lines) on the card / mage / nemesis.

#### Translate nemeses

> It's important that the **id** and **expansion** always are the same as in the english version. Please never change them while translating.

Nemesis example:

```javascript
{
  expansion: 'AE',
  name: 'Rageborne',
  id: 'Rageborne',
  health: 70,
  difficulty: 2,
  expeditionRating: 1,
  additionalInfo: '',
},
```

For the nemeses we just need to translate the `name` and (when available) the `additionalInfo`.

When we add `additionalInfo` the template should look like this:

```javascript
additionalInfo: `
  <p>
    When Gate Witch accelerates time, it loses five nemesis tokens
    instead of four nemesis tokens.
  </p>
`,
```

#### Translate mages

> It's important that the **id**, **expansion** and **type** (unique starters) always are the same as in the english version. Please never change them while translating.

Mage example:

```javascript
{
  expansion: 'AE',
  name: 'Adelheim',
  id: 'Adelheim',
  mageTitle: 'Breach Mage Weaponsmith',
  ability: `
      <h2>Aethereal Ward</h2>
      <p class="ability-activation">Activate during the nemesis draw phase:</p>
      <p>When a nemesis attack or power card is drawn but before it is resolved,
      you may discard it. It has no effect.
      <span class="hint">(The nemesis does not draw a replacement card)</span></p>
    `,
  numberOfCharges: 5,
  uniqueStarters: [
    {
      type: 'Gem',
      name: 'Amethyst Shard',
      expansion: 'AE',
      id: 'AmethystShard',
      cost: 0,
      effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            Any ally may draw a card and then discard a card in hand.
          </p>
        `,
      keywords: [],
    },
  ],
},
```

For mages we translate the `name`, `mageTitle`, `ability` and the `uniqueStarters`. For the unique starters you can consult the card section.

The template for the `ability` should look like this:

```javascript
ability: `
  <h2>Aethereal Ward</h2>
  <p class="ability-activation">Activate during the nemesis draw phase:</p>
  <p>When a nemesis attack or power card is drawn but before it is resolved,
  you may discard it. It has no effect.
  <span class="hint">(The nemesis does not draw a replacement card)</span></p>
`,
```

In general we have a headline `<h2>...</h2>`, a paragraph for the ability activation text `<p class="ability-activation">...</p>` and a paragraph for the ability description `<p>...</p>` which can contain some of the template snipptes described above.

Another example with multiple ability description paragraphs:

```javascript
ability: `
  <h2>Quelling Blade</h2>
  <p class="ability-activation">Activate during your main phase:</p>
  <p>Deal 5 damage to a minion.</p>
  <p>Deal 3 damage to a different minion.</p>
`,
```

#### Translate cards (supply cards)

> It's important that the **id**, **expansion** and **type** always are the same as in the english version. Please never change them while translating.

Example for gem, relic and spell:

```javascript
{
  type: 'Gem',
  expansion: 'AE',
  name: 'Diamond Cluster',
  id: 'DiamondCluster',
  cost: 4,
  effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br/>
        If this is the second time you have played Diamond Cluster this turn
        gain an additional 2 <span class="aether">&AElig;</span>.
      </p>
    `,
  keywords: [],
},
{
  type: 'Spell',
  expansion: 'AE',
  name: 'Chaos Arc',
  id: 'ChaosArc',
  cost: 6,
  effect: `
    <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      Deal 2 additional damage for each prepped spell in an adjacent breach.
    </p>
  `,
  keywords: [],
},
{
  type: 'Relic',
  expansion: 'AE',
  name: 'Unstable Prism',
  id: 'UnstablePrism',
  cost: 3,
  effect: `
    <p>
      Play a gem in hand twice and destroy it.
      <span class="or">OR</span>
      Gain 2 <span class="aether">&AElig;</span>.
    </p>
      `,
  keywords: [],
},
```

For supply cards we translate the `name`, `effect` and `keywords` (if available).

The template for the `effect` should look something like this:

```javascript
effect: `
  <p>
    Play a gem in hand twice and destroy it.
    <span class="or">OR</span>
    Gain 2 <span class="aether">&AElig;</span>.
  </p>
`,
```

It can contain some of the template snipptes described above.

#### Translate treasures

> It's important that the **id**, **expansion** and **subtype** (if available) always are the same as in the english version. Please never change them while translating.

Example for treasures with and without subtype:

```javascript
{
  id: 'ZhanasFleetingEmber',
  name: "Z'hana's Fleeting Ember",
  expansion: 'TA',
  level: 1,
  subtype: 'Spell',
  effect: `
    <p>
      <b>Cast:</b> Deal 1 damage.
      <span class="or">OR</span>
      <b>Cast:</b> Cast one of your prepped spells that costs 4
      <span class="aether">&AElig;</span> or less without discarding it.
    </p>
  `,
},
{
  id: 'BlightedRootClump',
  name: 'Blighted Root Clump',
  expansion: 'TA',
  level: 2,
  effect: `
    <p>
      When the last card in a supply pile is gained or destroyed, any player gains 3 life.
    </p>
  `,
},
```

For treasure cards we translate the `name` and `effect`.

The template for the `effect` should look something like this:

```javascript
effect: `
  <p>
    <b>Cast:</b> Deal 1 damage.
    <span class="or">OR</span>
    <b>Cast:</b> Cast one of your prepped spells that costs 4
    <span class="aether">&AElig;</span> or less without discarding it.
  </p>
`,
```

It can contain some of the template snipptes described above.

#### Translate basic and upgraded basic nemesis cards

> It's important that the **id**, **expansion** and **type** always are the same as in the english version. Please never change them while translating.

Example minion, attack and power of a basic nemesis card:

```javascript
{
  id: 'AgonyField',
  expansion: 'AE',
  tier: 1,
  type: 'Power',
  name: 'Agony Field',
  power: 2,
  effect: `
    <p>
      <b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br />
      <br />
      <b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.
    </p>
  `,
},
{
  id: 'HazeSpewer',
  expansion: 'AE',
  tier: 1,
  type: 'Minion',
  name: 'Haze Spewer',
  hp: 5,
  effect: `
    <p>
      <b>Persistent:</b> Gravehold suffers damage equal to this minion's current life. Then, this minion suffers 1 damage.
    </p>
  `,
},
{
  id: 'Awaken',
  expansion: 'AE',
  tier: 2,
  type: 'Attack',
  name: 'Awaken',
  effect: `
    <p>
      Unleash twice and Gravehold suffers 3 damage.
      <span class="or">OR</span>
      Place the most recently discarded minion in the nemesis discard pile back into play.
    </p>
  `,
},
```

Upgraded basic nemesis cards are basiclly the same as the normal basic nemesis cards. They just have an additional property called `upgraded`, which should not be changed.

For basic and upgraded basic nemesis cards we translate the `name` and `effect`.

The template for the `effect` should look something like this:

```javascript
effect: `
  <p>
    <b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br />
    <br />
    <b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.
  </p>
`,
```

It can contain some of the template snipptes described above.

## Build

Make sure that you have typescript installed and then run the following command from the project root:

```
yarn tsc
```
