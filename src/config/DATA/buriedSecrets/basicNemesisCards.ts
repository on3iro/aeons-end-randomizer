import { BasicNemesisCard } from 'aer-types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'BladeStorm',
    expansion: 'BS',
    tier: 1,
    type: 'Attack',
    name: 'Blade Storm',
    effect: `
      <p>
        Gravehold suffers 3 damage. The player with the fewest opened breaches suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'HexofVulnerability',
    expansion: 'BS',
    tier: 1,
    type: 'Power',
    name: 'Hex of Vulnerability',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 3:</b> Place this card next to the player with the most life. For the rest of the game, when that player suffers damage, they suffer 1 additional damage.
      </p>
    `,
  },
  {
    id: 'ThrongCommander',
    expansion: 'BS',
    tier: 1,
    type: 'Minion',
    name: 'Throng Commander',
    shields: 3,
    hp: 1,
    effect: `
      <p>
        <b>Persistent:</b> If there are two or more other minions in play, Gravehold suffers 6 damage and discard this minion. Otherwise, any player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'Divert',
    expansion: 'BS',
    tier: 2,
    type: 'Attack',
    name: 'Divert',
    effect: `
      <p>
        The player with the most expensive prepped spell casts that spell. The damage that spell deals must be dealt to the player who cast it instead of to a minion or the nemesis.
      </p>
    `,
  },
  {
    id: 'Depreciate',
    expansion: 'BS',
    tier: 2,
    type: 'Power',
    name: 'Depreciate',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. The player with the most expensive card in hand destroys that card and then gains a card of the same type that costs less from any supply pile. That player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'ArmoredHaze',
    expansion: 'BS',
    tier: 2,
    type: 'Minion',
    name: 'Armored Haze',
    shields: 4,
    hp: 1,
    effect: `
      <p>
        <b>Persistent:</b> Any player suffers 1 damage for each shield token this minion has. Then, this minion suffers 1 damage.
      </p>
    `,
  },
  {
    id: 'Muster',
    expansion: 'BS',
    tier: 3,
    type: 'Attack',
    name: 'Muster',
    effect: `
      <p>
        Unleash twice. Each minion in plays gains 5 life.
      </p>
    `,
  },
  {
    id: 'BreachTunnel',
    expansion: 'BS',
    tier: 3,
    type: 'Power',
    name: 'Breach Tunnel',
    power: 4,
    effect: `
      <p>
        <b>Power 4:</b> If each player has at least one closed breach, the nemesis overwhelms them and the players lose.
      </p>
    `,
  },
  {
    id: 'MailedShade',
    expansion: 'BS',
    tier: 3,
    type: 'Minion',
    name: 'Mailed Shade',
    shields: 1,
    hp: 8,
    effect: `
      <p>
        This minion can only be dealt damage by spells cast from a III breach.<br />
        <br />
        <b>Persistent:</b> Unleash twice.
      </p>
    `,
  },
]
