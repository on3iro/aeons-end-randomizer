import { Treasure } from 'aer-types'

export const treasures: Treasure[] = [
  {
    id: 'ReevesRavenShard',
    name: "Reeve's RavenShard",
    expansion: 'promos',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>. You may discard a card in 
      hand. If you do, gain and additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'NymsVision',
    name: "Nym's Vision",
    expansion: 'promos',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      Reveal the top card of the nemesis deck. If you revealed an attack, gain 
      2 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'SparrowsAid',
    name: "Sparrow's Aid",
    expansion: 'promos',
    level: 1,
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      Any ally may prep a spell in hand to their opened or closed breach(es).
      </p>
      `,
  },
  {
    id: 'WraithsEssence',
    name: "Wraith's Essence",
    expansion: 'promos',
    level: 2,
    effect: `
      <p>
      When a player becomse exhausted, do not resolve any on-exhaust effects.<br/>
      <br/>
      The players do not lose when all players are exhausted.
      </p>
      `,
  },
  {
    id: 'VolatileClasp',
    name: 'Volatile Clasp',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
      When you play a relic that costs 4 <span class="aether">&AElig;</span> 
      or more, any ally gains 1 charge.
      </p>
      `,
  },
  {
    id: 'BreachStabilizer',
    name: 'Breach Stabilizer',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
      Any number of Sparks mya be prepped to your I breach.
      </p>
      `,
  },
  {
    id: 'FangedChoker',
    name: 'Fanged Choker',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
      At the end of your draw phase, if the total cost of spells in your hand 
      is 6 <span class="aether">&AElig;</span> or more, draw a card.
      </p>
      `,
  },
  {
    id: 'EndlessBandolier',
    name: 'Endless Bandolier',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
      Once per turn during your main phase you may discard a card in hand. 
      If you do, deal 1 damage and gain 1 charge.
      </p>
      `,
  },
]
