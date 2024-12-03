import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'AurensAluminumInfuser',
    name: "Auren's Aluminum Infuser",
    expansion: 'ATD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      The next time you gain a spell this turn,
      any ally gains a <span class="aether">&AElig;</span> token.
      </p>
      `,
  },
  {
    id: 'AurensCopperStructure',
    name: "Auren's Copper Structure",
    expansion: 'ATD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      If you've cast three or more spells this turn,
      gain 1 charge and 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'NaftirsVorpalKnife',
    name: "Naftir's Vorpal Knife",
    expansion: 'ATD',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Cast:</b> If this was case from a III breach, deal 2 damage.
      Otherwise, deal 1 damage.
      </p>
      `,
  },
  {
    id: 'NadeasSmoothTourmaline',
    name: "Nadea's Smooth Tourmaline",
    expansion: 'ATD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      You may pay 2 <span class="aether">&AElig;</span> to place
      a gem or relic you played this turn on top of your deck.
      </p>
      `,
  },
  {
    id: 'OnasOverwhelmingFlame',
    name: "Ona's Overwhelming Flame",
    expansion: 'ATD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      The next time you use your ability this turn,
      cast any player's prepped spell without discarding it.
      </p>
      `,
  },
  {
    id: 'ShoshanasBottledInk',
    name: "Shoshana's Bottled Ink",
    expansion: 'ATD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      Any ally may discard a gem. If they do, gain 2 <span class="aether">&AElig;</span>
      and the next card you gain this turn goes on top of their deck.
      </p>
      `,
  },
  {
    id: 'CorruptedPotion',
    name: 'Corrupted Potion',
    expansion: 'ATD',
    level: 2,
    effect: `
      <p>
      After a player finishes resolving their ability,
      any ally may focus a breach and may prep a spell
      in hand to an opened or closed breach.
      </p>
      `,
  },
  {
    id: 'EssenceMembrane',
    name: 'Essence Membrane',
    expansion: 'ATD',
    level: 2,
    effect: `
      <p>
      After a player finishes resolving their ability,
      that player places an elemental token on any enemy.
      `,
  },
  {
    id: 'GlitteringRubble',
    name: 'Glittering Rubble',
    expansion: 'ATD',
    level: 2,
    effect: `
      <p>
      When a player focuses or opens a III or IV breach, deal 1 damage.
      </p>
      `,
  },
  {
    id: 'InfusedAether',
    name: 'Infused Aether',
    expansion: 'ATD',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a spell supply
      pile that costs 7 <span class="aether">&AElig;</span> or more.</p>
      <p>
      When a player casts a spell gained from this supply pile,
      they may place an elemental token on any enemy.
      </p>
      `,
  },
  {
    id: 'CrownOfTheAbyss',
    name: 'Crown of the Abyss',
    expansion: 'ATD',
    level: 3,
    effect: `
      <p>
      At the start of your first turn of the game, destroy up to three cards in hand.
      </p>
      `,
  },
  {
    id: 'FeatherweaveSatchel',
    name: 'Featherweave Satchel',
    expansion: 'ATD',
    level: 3,
    effect: `
      <p>
      You may prep one additional spell to your III breach.
      </p>
      <p>
      You may prep one additional spell to your IV breach.
      </p>
      `,
  },
  {
    id: 'GuildedCuirass',
    name: 'Guilded Cuirass',
    expansion: 'ATD',
    level: 3,
    effect: `
      <p>
      At the start of your main phase, if you have four or more cards in hand
      that cost 1 <span class="aether">&AElig;</span> or more, deal 3 damage.
      </p>
      `,
  },
  {
    id: 'HengePendant',
    name: 'Henge Pendant',
    expansion: 'ATD',
    level: 3,
    effect: `
      <p>
      At the end of your casting phase,
      if you cast no spells this turn,
      place an elemental token on any enemy.
      </p>
      `,
  },
  {
    id: 'KnittedIron',
    name: 'Knitted Iron',
    expansion: 'ATD',
    level: 3,
    effect: `
      <p>
      Whenever you suffer damage, gain 1 charge.
      </p>
      `,
  },
  {
    id: 'SiphonRing',
    name: 'Siphon Ring',
    expansion: 'ATD',
    level: 3,
    effect: `
      <p>
      Once per turn during your main phase, you may discard a card in hand.
      If you do, place an elemental token on any enemy.
      </p>
      `,
  },
]
