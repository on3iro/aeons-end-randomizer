import { BasicNemesisCard } from 'aer-types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Menace',
    expansion: 'promos',
    tier: 1,
    type: 'Attack',
    name: 'Menace',
    effect: `
      <p>
        The players collectively discard two spells that are in hand or prepped. The players collectively place two gems from their hands on top of their decks.
      </p>
    `,
  },
  {
    id: 'GlyphEnigma',
    expansion: 'promos',
    tier: 1,
    type: 'Minion',
    name: 'Glyph Enigma',
    hp: 7,
    effect: `
      <p>
        <b>Persistent:</b> Gravehod suffers 1 damage. If the nemesis tier is 2 or higher, Gravehold suffers 2 additional damage.
      </p>
    `,
  },
  {
    id: 'GravitySplinter',
    expansion: 'promos',
    tier: 2,
    type: 'Power',
    name: 'Gravity Splinter',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. The player with the fewest opened breaches suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'WorldPurge',
    expansion: 'promos',
    tier: 3,
    type: 'Power',
    name: 'World Purge',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 9 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash three times.
        <span class="or">OR</span>
        Gravehold suffers 7 damage.
      </p>
    `,
  },
  {
    id: 'BaneSire',
    expansion: 'promos',
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
    id: 'Decimate',
    expansion: 'promos',
    tier: 1,
    type: 'Attack',
    name: 'Decimate',
    effect: `
      <p>
        Unleash twice and any player gains 2 charges.
        <span class="or">OR</span>
        Gravehold suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'SpiritCage',
    expansion: 'promos',
    tier: 1,
    type: 'Power',
    name: 'Spirit Cage',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Discard a card in hand that costs 5 <span class="aether">&AElig;</span> or more.<br />
        <br />
        <b>Power 3:</b> Unleash twice. Any player discards a spell in hand.
      </p>
    `,
  },
  {
    id: 'BanefulCrux',
    expansion: 'promos',
    tier: 2,
    type: 'Power',
    name: 'Baneful Crux',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Discard two cards in hand that each cost 4 <span class="aether">&AElig;</span> or more.<br />
        <br />
        <b>Power 2:</b> Unleash twice. Gravehold suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'Negate',
    expansion: 'promos',
    tier: 2,
    type: 'Attack',
    name: 'Negate',
    effect: `
      <p>
        Unleash twice. Any player destroys their most expensive card in hand.
        <span class="or">OR</span>
        Unleash twice. Gravehold suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'Gallowskulk',
    expansion: 'promos',
    tier: 3,
    type: 'Minion',
    name: 'Gallowskulk',
    hp: 10,
    effect: `
      <p>
        The player with the lowest life suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'Unmake',
    expansion: 'promos',
    tier: 3,
    type: 'Attack',
    name: 'Unmake',
    effect: `
      <p>
        Unleash twice. Any player destroys the top three cards of their deck and suffers 3 damage.
      </p>
    `,
  },
]
