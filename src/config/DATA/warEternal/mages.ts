import { Mage } from 'aer-types'

export const mages: Mage[] = [
  {
    expansion: 'WE',
    name: 'Dezmodia',
    id: 'Dezmodia',
    mageTitle: 'Voidborn Prodigy',
    ability: `
        <h2>Tempest Sigil</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Any player destroys an opened I or II breach and 
        returns any spells prepped to that breach to their hand. 
        That player gains a Sigil breach and places it where the destroyed 
        breach was. Then, that player may prep a spell from their hand 
        to a breach.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Oblivion Shared',
        expansion: 'WE',
        id: 'OblivionShared',
        cost: 0,
        effect: `
            <p>
              Gain 2 <span class="aether">&AElig;</span> that cannot be used 
              to gain a relic or spell.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Garu',
    id: 'Garu',
    mageTitle: 'Oathsworn Protector',
    ability: `
        <h2>Colossal Force</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Discard up to four of your prepped spells.</p>
        <p>Deal 2 damage plus 4 additional damage for each spell you 
        discarded divided however you choose to the nemesis or any 
        number of minions.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Torch',
        expansion: 'WE',
        id: 'Torch',
        cost: 0,
        effect: `
            <p>
              <b>Cast:</b> Deal 1 damage.
              <span class="or">OR</span>
              <b>Cast:</b> Focus any player's breach.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Gex',
    id: 'Gex',
    mageTitle: 'Breach Mage Adviser',
    ability: `
        <h2>Vimcraft Oath</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Destroy up to two cards in your discard pile that cost 
        0 <span class="aether">&AElig;</span>.</p>
        <p>Any ally draws one card and gains 2 life.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Shattered Geode',
        expansion: 'WE',
        id: 'ShatteredGeode',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              You may place the top card of any ally's discard pile into your hand.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Mazahaedron',
    id: 'Mazahaedron',
    mageTitle: 'Henge Mystic',
    ability: `
        <h2>Underearth Mantra</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>You may gain a gem that costs 4 <span class="aether">&AElig;</span> or 
        less from any supply pile.</p>
        <p>Gravehold gains 4 life.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Worldheart Shard',
        expansion: 'WE',
        id: 'WorldheartShard',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.
              <span class="or">OR</span>
              Gain 2 <span class="aether">&AElig;</span> that can only be used 
              to gain a card. Place the next card you gain this turn on top of 
              any ally's discard pile.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'MistWE',
    id: 'MistWE',
    mageTitle: 'Voidwalker',
    ability: `
        <h2>Exalted Brand</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Cast up to three different spells prepped by any number of players. 
        For each spell cast this way, place that spell into any ally's hand.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Amethyst Paragon',
        expansion: 'WE',
        id: 'AmethystParagon',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              Any ally may prep a spell in hand to their opened or closed 
              breach(es).
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Quilius',
    id: 'Quilius',
    mageTitle: 'Breach Mage Assassin',
    ability: `
        <h2>Quietus Vow</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Deal 2 damage for each Trophy token you have.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Extinguish',
        expansion: 'WE',
        id: 'Extinguish',
        cost: 0,
        effect: `
            <p>
              <b>Cast:</b> Deal 1 damage.<br/>
              If this damage causes a minion from the nemesis deck to be 
              discarded, Quilius gains a Trophy token.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Ulgimor',
    id: 'Ulgimor',
    mageTitle: 'Shadowkin Beast',
    ability: `
        <h2>Eidolon Shroud</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Gain 6 life.</p>
        <p>If you are exhausted, any ally gains 5 life instead.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Coal Shard',
        expansion: 'WE',
        id: 'CoalShard',
        cost: 0,
        effect: `
            <p>
              If you have 2 life or less, destroy this. Otherwise, gain 
              3 <span class="aether">&AElig;</span>, gain 1 charge, and 
              suffer 2 damage.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Yan Magda',
    id: 'YanMagda',
    mageTitle: 'Enlightened Exile',
    ability: `
        <h2>Imperium Ritual</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Gain a card from any supply pile. If you have four 
        opened breaches, any ally gains a card from any supply pile and 
        places it on top of their deck.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Illuminate',
        expansion: 'WE',
        id: 'Illuminate',
        cost: 0,
        effect: `
            <p>
              While prepped, when you focus or open one of your breaches 
              during your turn, deal 1 damage.<br/>
              <b>Cast:</b> Deal 1 damage.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
