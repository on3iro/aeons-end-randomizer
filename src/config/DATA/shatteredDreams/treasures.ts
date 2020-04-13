import { Treasure } from 'aer-types'

export const treasures: Treasure[] = [
  {
    id: 'MazahaedronsWorldheartShard',
    name: "Mazahaedron's Worldheart Shard",
    expansion: 'SD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Gain 2 <span class="aether">&AElig;</span> that can only be used to gain 
      a card. Place the next card you gain this turn on top of any ally's discard pile.
      </p>
      `,
  },
  {
    id: 'PhaedraxasTourmalineShard',
    name: "Phaedraxa's Tourmaline Shard",
    expansion: 'SD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Any ally may suffer 1 damage. If they do, they destroy a card in hand.
      </p>
      `,
  },
  {
    id: 'FracturedShell',
    name: 'Fractured Shell',
    expansion: 'SD',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to asupply pile that costs 4 
      <span class="aether">&AElig;</span> or more. When a player gains a card 
      from that supply, that player gains a charge.
      </p>
      `,
  },
  {
    id: 'Extra-DimensionalLens',
    name: 'Extra-Dimensional Lens',
    expansion: 'SD',
    level: 3,
    effect: `
      <p>
      Once per turn during your main phase, you may reveal the top three cards 
      of the nemesis deck. Return them in any order.
      </p>
      `,
  },
  {
    id: 'SeersBracer',
    name: "Seer's Bracer",
    expansion: 'SD',
    level: 3,
    effect: `
      <p>
      Once per turn during your main phase when you gain a charge, any ally 
      draws a card.
      </p>
      `,
  },
]
