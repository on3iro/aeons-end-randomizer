import { Treasure } from 'aer-types'

export const treasures: Treasure[] = [
  {
    id: 'RemnantsVoidShard',
    name: "Remnant's Void Shard",
    expansion: 'TA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Gain an additional 1 <span class="aether">&AElig;</span> that can only 
      be used to focus or open a breach.
      </p>
      `,
  },
  {
    id: 'QuiliussErasure',
    name: "Quilius's Erasure",
    expansion: 'TA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      If this damages a minion, deal 1 additional damage.
      </p>
      `,
  },
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
      When the last card in a supply pile is gained or destroyed, any player 
      gains 3 life.
      </p>
      `,
  },
  {
    id: 'PetrifiedWitchFinger',
    name: 'Petrified Witch Finger',
    expansion: 'TA',
    level: 2,
    effect: `
      <p>
      When the last card in a supply pile is gained or destroyed, any player 
      gains 3 charges.
      </p>
      `,
  },
  {
    id: 'WaywardScraps',
    name: 'Wayward Scraps',
    expansion: 'TA',
    level: 2,
    effect: `
      <p>
      Once per turn during any player's main phase that player may spend 
      4 <span class="aether">&AElig;</span> to focus each player's IV breach.
      </p>
      `,
  },
  {
    id: 'TrueSightMonocle',
    name: 'True Sight Monocle',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      At the start of your main phase, if there are six or more cards in 
      your discard pile, gain 2 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'EntwinedAetherStrands',
    name: 'Entwined Aether Strands',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      At the end of your draw phase, you may discard one card in hand and 
      draw a card.
      </p>
      `,
  },
  {
    id: 'SiphoningBlade',
    name: 'Siphoning Blade',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      Once per turn when you focus or open a breach, gain 1 charge.
      </p>
      `,
  },
  {
    id: 'GemEncrustedAnklet',
    name: 'Gem Encrusted Anklet',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      At the start of your first turn of the game, gain 3 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
]
