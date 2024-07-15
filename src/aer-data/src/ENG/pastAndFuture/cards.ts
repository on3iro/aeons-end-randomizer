import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Relic',
    expansion: 'PAF',
    name: 'Tome Of The Ancients',
    id: 'TomeOfTheAncients',
    cost: 2,
    effect: `
      <p>
      If all of your breaches are opened, destroy this and then destroy up to two cards in your hand or discard pile.
      Otherwise, focus your closed breach with the lowest focus cost.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'PAF',
    name: 'Consume Magic',
    id: 'ConsumeMagic',
    cost: 4,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br/>
        If this defeats a minion from the nemesis deck, swap this card for Detonate.
      </p>
      `,
    keywords: ['swap'],
  },
  {
    type: 'Spell',
    expansion: 'PAF',
    name: 'Prismatic Flare',
    id: 'PrismaticFlare',
    cost: 5,
    effect: `
      <p>
        When you prep this,<br/>
        focus your III breach.<br/>
        <b>Cast:</b> Deal 3 damage.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'PAF',
    name: 'Inscrutable Artifact',
    id: 'Inscrutable Artifact',
    cost: 6,
    effect: `
      <p> Cast any player's prepped spell that costs 5 <span class="aether">&AElig;</span> or less without discarding it.
      If you have 3 life or less, swap this card for Aetherrune.
      </p>
      `,
    keywords: ['swap'],
  },
  {
    type: 'Spell',
    expansion: 'PAF',
    name: 'Cavernous Maw',
    id: 'CavernousMaw',
    cost: 3,
    effect: `
      <p>
      <b>Cast:</b> Deal 2 damage.<br/>
      You may destroy a card in your discard pile that costs 4 <span class="aether">&AElig;</span> or more.
      If you do, swap this card for Dragonflare and place it on top of your deck.
      </p>
      `,
    keywords: ['swap'],
  },
  {
    type: 'Gem',
    expansion: 'PAF',
    name: 'Glowstone',
    id: 'Glowstone',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>
      Swap this card for Illuminite.
      </p>
      `,
    keywords: ['swap'],
  },
  {
    type: 'Gem',
    expansion: 'PAF',
    name: 'Encased Fossil',
    id: 'EncasedFossil',
    cost: 4,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      You may spend 6 <span class="aether">&AElig;</span> to swap this card for Diamin.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'PAF',
    name: "Fool's Gold",
    id: 'FoolsGold',
    cost: 5,
    effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
      You may swap this card for Smite.
      </p>
      `,
    keywords: ['swap'],
  },
  {
    type: 'Spell',
    expansion: 'PAF',
    name: 'Harbinger Descent',
    id: 'HarbingerDescent',
    cost: 8,
    effect: `
      <p>
      <b>Cast:</b> Deal 6 damage.<br/>
      You may discard three of your other prepped spells to swap this card for Apocalypse.
      </p>
      `,
    keywords: ['swap'],
  },
  {
    type: 'Gem',
    expansion: 'PAF',
    name: 'Splintered Garnet',
    id: 'SplinteredGarnet',
    cost: 5,
    effect: `
      <p>
      When you Develop this, destroy a gem played this turn.
      Gain 3 <span class="aether">&AElig;</span>.<br/>
      Develop cost: 4
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Spell',
    expansion: 'PAF',
    name: "Seer's Wrath",
    id: 'SeersWrath',
    cost: 5,
    effect: `
      <p>
      When you Develop this, look at the top card of the turn order deck. You may place that card on the bottom or top of the turn order deck.<br/>
      <b>Cast:</b> Deal 3 damage.<br/>
      Develop cost: 3
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Spell',
    expansion: 'PAF',
    name: 'Tethered Smite',
    id: 'TetheredSmite',
    cost: 7,
    effect: `
      <p>
      <b>Cast</b> Deal 5 damage divided however you choose the nemesis and any number of minions.<br/>
      Develop cost: 4
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Relic',
    expansion: 'PAF',
    name: 'Taluna Branch',
    id: 'TalunaBranch',
    cost: 6,
    effect: `
      <p>
      When you Develop this, any ally gains an <span class="aether">&AElig;</span> token.
      Focus any player's breach. <br/>
      Any player may destroy a card in hand or in their discard pile. <br/>
      Develop cost: 4
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Spell',
    expansion: 'PAF',
    name: 'Building Storm',
    id: 'BuildingStorm',
    cost: 3,
    effect: `
      <p>
      <b>Cast:</b> Deal 2 damage. <br/>
      Deal 1 additional damage for every copy of this card in the Develop zone.<br/>
      Develop cost: 2
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Gem',
    expansion: 'PAF',
    name: 'Amplifying Calcite',
    id: 'AmplifyingCalcite',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Gain 3 <span class="aether">&AElig;</span> that can only be used to Develop cards.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'PAF',
    name: 'Imbued Pocketwatch',
    id: 'ImbuedPocketwatch',
    cost: 3,
    effect: `
      <p>
      Any player gains a charge. If there are two or more Imbued Pocketwatches in the Develop zone, any player gains a life.<br/>
      Develop cost: 3
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Gem',
    expansion: 'PAF',
    name: 'Mica Shard',
    id: 'MicaShard',
    cost: 4,
    effect: `
      <p>
      When you gain this, you may <b>Conjure</b> to one of your close or opened breaches.<br/>
      Gain 2 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: ['conjure'],
  },
  {
    type: 'Spell',
    expansion: 'PAF',
    name: 'Thistle Spear',
    id: 'ThistleSpear',
    cost: 8,
    effect: `
      <p>
      <b>Cast:</b> Deal 5 damage.<br/>
      Any ally may gain a card from the Develop zone and place it into their hand.<br/>
      Develop cost: 5
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Spell',
    expansion: 'PAF',
    name: 'Propel',
    id: 'Propel',
    cost: 5,
    effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.<br/>
      If you placed this into your discard pile, swap this card for Gather Force.<br/>
      </p>
      `,
    keywords: ['swap'],
  },
]
