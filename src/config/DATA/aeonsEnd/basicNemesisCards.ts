import { BasicNemesisCard } from 'aer-types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'AgonyField',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Agony Field',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br />
        <br />
        <b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.
      </p>
    `,
  },
  {
    id: 'BaneSire',
    expansion: 'AE',
    tier: 1,
    type: 'Minion',
    name: 'Bane Sire',
    hp: 6,
    effect: `
      <p>
        <b>Persistent:</b> Unleash.
      </p>
    `,
  },
  {
    id: 'BleedStatic',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Bleed Static',
    power: 3,
    effect: `
      <p>
        <b>Power 3:</b> The player with the most prepped spells suffers 2 damage for each of their prepped spells.
      </p>
    `,
  },
  {
    id: 'EyeofNothing',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Eye of Nothing',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice.
      </p>
    `,
  },
  {
    id: 'HazeSpewer',
    expansion: 'AE',
    tier: 1,
    type: 'Minion',
    name: 'Haze Spewer',
    hp: 5,
    effect: `
      <p>
        <b>Persistent:</b> Gravehold suffers damage equal to this minion's current life. Then, this minion suffers 1 damage.
      </p>
    `,
  },
  {
    id: 'Skewer',
    expansion: 'AE',
    tier: 1,
    type: 'Attack',
    name: 'Skewer',
    effect: `
      <p>
        Unleash. Any player suffers 3 damage and draws a card.
      </p>
    `,
  },
  {
    id: 'Slaughter',
    expansion: 'AE',
    tier: 1,
    type: 'Attack',
    name: 'Slaughter',
    effect: `
      <p>
        Unleash. Gravehold suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'WovenSky',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Woven Sky',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Discard three cards.<br />
        <br />
        <b>Power 2:</b> Unleash. Any player suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'Awaken',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Awaken',
    effect: `
      <p>
        Unleash twice and Gravehold suffers 3 damage. 
        <span class="or">OR</span>
        Place the most recently discarded minion in the nemesis discard pile back into play.
      </p>
    `,
  },
  {
    id: 'Cauterizer',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Cauterizer',
    shields: 3,
    hp: 0,
    effect: `
      <p>
        When damage is dealt to this minion, reduce that damage to 1.<br />
        <br />
        <b>Persistent:</b> Any player suffers damage equal to this minion's current life.
      </p>
    `,
  },
  {
    id: 'Dispel',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Dispel',
    effect: `
      <p>
        Unleash twice. The player with the most prepped spells discards their most expensive prepped spell.
      </p>
    `,
  },
  {
    id: 'Needlemaw',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Needlemaw',
    hp: 11,
    effect: `
      <p>
        <b>Persistent:</b> Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'LayWaste',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Lay Waste',
    effect: `
      <p>
        Unleash twice. Any player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'PulverizingRay',
    expansion: 'AE',
    tier: 2,
    type: 'Power',
    name: 'Pulverizing Ray',
    power: 1,
    effect: `
      <p>
        <b>Power 1:</b> Gravehold suffers 18 damage. The players may collectively discard up to 6 gems. For each gem discarded this way, prevent 3 of that damage.
      </p>
    `,
  },
  {
    id: 'Venomite',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Venomite',
    hp: 9,
    effect: `
      <p>
        <b>Persistent:</b> The player with the lowest life suffers 2 damage. 
        <span class="or">OR</span>
        Any player discards a prepped spell that costs 3 <span class="aether">&AElig;</span> or more.
      </p>
    `,
  },
  {
    id: 'DoomAegis',
    expansion: 'AE',
    tier: 3,
    type: 'Power',
    name: 'Doom Aegis',
    power: 1,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 1:</b> The player with the most charges suffers 4 damage and loses all of their charges.
      </p>
    `,
  },
  {
    id: 'GatherDarkness',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Gather Darkness',
    effect: `
      <p>
        Any player places their discard pile on top of their deck, shuffles it, and then destroys the top four cards of their deck. Then, Unleash twice.
      </p>
    `,
  },
  {
    id: 'JaggedOne',
    expansion: 'AE',
    tier: 3,
    type: 'Minion',
    name: 'Jagged One',
    hp: 14,
    effect: `
      <p>
        <b>Persistent:</b> Unleash twice.
      </p>
    `,
  },
  {
    id: 'Obliterate',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Obliterate',
    effect: `
      <p>
        Unleash twice. The player with the most opened breaches destroys four cards in hand or suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'RealityRupture',
    expansion: 'AE',
    tier: 3,
    type: 'Power',
    name: 'Reality Rupture',
    power: 1,
    effect: `
      <p>
        <b>To Discard:</b> Destroy two prepped spells that each cost 3 <span class="aether">&AElig;</span> or more.<br />
        <br />
        <b>Power 1:</b> Unleash three times.
      </p>
    `,
  },
  {
    id: 'Sunder',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Sunder',
    effect: `
      <p>
        Gravehold suffers 4 damage and the player with the lowest life suffers 4 damage.
        <span class="or">OR</span>
        Shuffle all of the nemesis turn order cards into the turn order deck.
      </p>
    `,
  },
  {
    id: 'Topple',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Topple',
    effect: `
      <p>
        Unleash twice. Gravehold suffers 4 damage.
      </p>
    `,
  },
]
