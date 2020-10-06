import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'ClaudiasAetherscope',
    name: "Claudia's Aetherscope",
    expansion: 'RTG',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
        Any ally may lose 1 charge. If they do, gain 2 charges.
      </p>
    `,
  },
  {
    id: 'SoskelsLuckyCoin',
    name: "Soskel's Lucky Coin",
    expansion: 'RTG',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.<br />
        You may lose 1 charge. If you do, gain an additional 2 <span class="aether">&AElig;</span>.
      </p>
    `,
  },
  {
    id: 'QusVoidRadite',
    name: "Qu's Void Radite",
    expansion: 'RTG',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.<br />
        You may cast any player's prepped spell. That spell deals 1 less damage, minimum 1.
      </p>
    `,
  },
  {
    id: 'TaqrensGiftOfSpirit',
    name: "Taqren's Gift Of Spirit",
    expansion: 'RTG',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
        <b>Cast:</b> Deal 1 damage.
        <span class="or">OR</span>
        <b>Cast:</b> Any ally draws a card.
      </p>
    `,
  },
  {
    id: 'GygarsTsunami',
    name: "Gygar's Tsunami",
    expansion: 'RTG',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
        <b>Cast:</b> Deal 1 damage.<br />
        >ou may lose 1 charge. If you do, deal 3 additional damage.
      </p>
    `,
  },
  {
    id: 'EnergizedHusk',
    name: 'Energized Husk',
    expansion: 'RTG',
    level: 2,
    effect: `
      <p>
        After a player finishes resolving their ability, any ally draws a card.
      </p>
    `,
  },
  {
    id: 'SparkingShards',
    name: 'Sparking Shards',
    expansion: 'RTG',
    level: 2,
    effect: `
      <p>
        At the start of the game, set this next to a gem supply pile. When a player gains 
        a card from that supply pile, that player gains 1 charge.
      </p>
    `,
  },
  {
    id: 'SigilPendant',
    name: 'Sigil Pendant',
    expansion: 'RTG',
    level: 2,
    effect: `
      <p>
        Once per turn during any player's main phase that player may spend 3 <span class="aether">&AElig;</span> 
        to have each player gain a charge.
      </p>
    `,
  },
  {
    id: 'HornOfPlenty',
    name: 'Horn Of Plenty',
    expansion: 'RTG',
    level: 3,
    effect: `
      <p>
        Draw two cards from level 1 treasure deck and add them to the Barracks.<br />
        <br />
        Add two additional level 1 treasures to your starting deck using the level 1 
        treasure rules.
      </p>
    `,
  },
  {
    id: 'ImbuedCirclet',
    name: 'Imbued Circlet',
    expansion: 'RTG',
    level: 3,
    effect: `
      <p>
        When you gain a gem, Gravehold gains 1 life.<br />
        <br />
        This can cause Gravehold to have more than its maximum life.
      </p>
    `,
  },
  {
    id: 'BurstingBracelet',
    name: 'Bursting Bracelet',
    expansion: 'RTG',
    level: 3,
    effect: `
      <p>
        When you focus or open a breach, you may cast any player's prepped spell. 
        That spell deals 1 additional damage.
      </p>
    `,
  },
]
