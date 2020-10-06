import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'ReevesRavenShard',
    name: "Reeve's Raven Shard",
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
        <b>Cast:</b> Deal 1 damage.<br />
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
        <b>Cast:</b> Deal 1 damage.<br />
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
        When a player becomes exhausted, do not resolve any on-exhaust effects.<br />
        <br />
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
        Any number of Sparks may be prepped to your I breach.
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
  {
    id: 'SahalasBlackMeteorite',
    name: "Sahala's Black Meteorite",
    expansion: 'promos',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
        Gain 3 <span class="aether">&AElig;</span> that can only be used to focus 
        or open your IV breach.
      </p>
    `,
  },
  {
    id: 'NooksMysticFlourish',
    name: "Nook's Mystic Flourish",
    expansion: 'promos',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.<br />
        Cast a spell in your hand. If that spell costs 1 <span class="aether">&AElig;</span> 
        or more, return that spell to its supply pile, gain a spell from any supply pile that 
        costs less than the cast spell, and gain 1 charge.
      </p>
    `,
  },
  {
    id: 'RitualStaff',
    name: 'Ritual Staff',
    expansion: 'promos',
    level: 2,
    effect: `
      <p>
        When a player gains a card that costs 7 <span class="aether">&AElig;</span> or more, 
        add a power token to this card.<br />
        <br />
        At the start of the nemesis turn if the nemesis has exactly one turn order card 
        in the turn order discard pile, the nemesis suffers damage equal to the number 
        of tokens on this card.
      </p>
    `,
  },
  {
    id: 'CrownOfFangs',
    name: 'Crown Of Fangs',
    expansion: 'promos',
    level: 2,
    effect: `
      <p>
        At the start of the game, set this next to a spell supply pile that costs 
        6 <span class="aether">&AElig;</span> or more. These cards cost player's 1 less 
        <span class="aether">&AElig;</span> to gain.
      </p>
    `,
  },
  {
    id: 'EverfullPurse',
    name: 'Everfull Purse',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
        At the end of your draw phase, if the total cost of gems and relics in your hand 
        is 7 <span class="aether">&AElig;</span> or more, draw a card.
      </p>
    `,
  },
  {
    id: 'ArcaneTimepiece',
    name: 'Arcane Timepiece',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
        At the start of your first turn of the game, gain 2 charges.<br />
        <br />
        Once per game when the nemesis turn order card is drawn, you may lose 4 charges. 
        If you do, skip the nemesis turn.
      </p>
    `,
  },
  {
    id: 'BootsOfArcaneQuickening',
    name: 'Boots Of Arcane Quickening',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
        At the start of your first turn of the game, gain 4 <span class="aether">&AElig;</span> 
        that can only be used to gain a spell.
      </p>
    `,
  },
]
