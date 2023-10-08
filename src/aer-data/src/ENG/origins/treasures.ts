import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'KadirsAncientEmerald',
    name: "Kadir's Ancient Emerald",
    expansion: 'ORI',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      If you have 3 charges or more,
      any ally gains 1 life.
      </p>
      `,
  },
  {
    id: 'NooksNihilum',
    name: "Nook's Nihilum",
    expansion: 'ORI',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
        <span class="or">OR</span>
      Destroy this. Gain 2 <span class="aether">&AElig;</span>. Silence a minion.
      </p>
      `,
  },
  {
    id: 'SmudgedParchment',
    name: 'Smudged Parchment',
    expansion: 'ORI',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a supply pile.
      When a player gains a card from this supply pile,
      they may place that card on top of their deck.
      </p>
      `,
  },
  {
    id: 'EmberBlade',
    name: 'Ember Blade',
    expansion: 'ORI',
    level: 2,
    effect: `
      <p>
      When the last card in a supply pile is developed, gained, or destroyed,
      Gravehold gains 3 life.
      </p>
      `,
  },
  {
    id: 'WitchsWheel',
    name: "Witch's Wheel",
    expansion: 'ORI',
    level: 3,
    effect: `
      <p>
      The second spell you cast during your casting phase
      deals an additional 2 damage.
      </p>
      `,
  },
]
