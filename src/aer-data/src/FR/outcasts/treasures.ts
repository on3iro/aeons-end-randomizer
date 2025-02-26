import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'RhiasPlanarPocket',
    name: "Rhia's Planar Pocket",
    expansion: 'O',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.<br />
        Gain an additional <span class="aether">&AElig;</span> that can only be used 
        to gain a relic.
      </p>
    `,
  },
  {
    id: 'TalixsEverburn',
    name: "Talix's Everburn",
    expansion: 'O',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.<br />
        Discard up to three spells in hand. Gain 1 <span class="aether">&AElig;</span> 
        for each spell discarded this way.
      </p>
    `,
  },
  {
    id: 'LostsForgedSpark',
    name: "Lost's Forged Spark",
    expansion: 'O',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
        <span class="hint">(When the game starts, add a Crystal to your discard pile.)</span><br />
        <b>Cast:</br> Deal 2 damage.
      </p>
    `,
  },
  {
    id: 'MazrasThesis',
    name: "Mazra's Thesis",
    expansion: 'O',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
        <b>Cast:</br> Deal 1 damage.<br />
        Focus any player's III breach.
      </p>
    `,
  },
  {
    id: 'RazrasTrainingWhistle',
    name: "Razra's Training Whistle",
    expansion: 'O',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>. 
        <span class="or">OR</span>
        Gain 1 charge.
      </p>
    `,
  },
  {
    id: 'RejuvenatingDiamond',
    name: 'Rejuvenating Diamond',
    expansion: 'O',
    level: 2,
    effect: `
      <p>
        When Gravehold gains life, Gravehold gains an additional 1 life.
      </p>
    `,
  },
  {
    id: 'BrokenTooth',
    name: 'Broken Tooth',
    expansion: 'O',
    level: 2,
    effect: `
      <p>
        When a player opens a breach, any ally draws a card.
      </p>
    `,
  },
  {
    id: 'PoisonHeart',
    name: 'Poison Heart',
    expansion: 'O',
    level: 2,
    effect: `
      <p>
        At the start of the game, set this next to a spell supply pile that 
        costs 5 <span class="aether">&AElig;</span> or less. Those spells deal 
        1 additional damage when cast.
      </p>
    `,
  },
  {
    id: 'WorldMarble',
    name: 'World Marble',
    expansion: 'O',
    level: 3,
    effect: `
      <p>
        At the start of your first turn of the game, focus one of your breaches 
        three times.
      </p>
    `,
  },
  {
    id: 'ArmoredPauldrons',
    name: 'Armored Pauldrons',
    expansion: 'O',
    level: 3,
    effect: `
      <p>
        When you play a relic that costs 3 <span class="aether">&AElig;</span> 
        or more, deal 1 damage.
      </p>
    `,
  },
  {
    id: 'BloodshotGeode',
    name: 'Bloodshot Geode',
    expansion: 'O',
    level: 3,
    effect: `
      <p>
        When you play a gem that costs 5 <span class="aether">&AElig;</span> 
        or more, deal 2 damage.
      </p>
    `,
  },
  {
    id: 'TreasuredStone',
    name: 'Treasured Stone',
    expansion: 'O',
    level: 3,
    effect: `
      <p>
        At the start of your first turn of the game, gain a gem from any supply pile.
      </p>
    `,
  },
  {
    id: 'ReboundGauntlet',
    name: 'Rebound Gauntlet',
    expansion: 'O',
    level: 3,
    effect: `
      <p>
        Once per turn, when you cast a spell that costs 5 <span class="aether">&AElig;</span> 
        or less, you may discard a spell in hand to return the cast spell to your hand.
      </p>
    `,
  },
]
