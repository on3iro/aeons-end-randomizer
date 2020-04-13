import { BasicNemesisCard } from 'aer-types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Afflict',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Afflict',
    effect: `
      <p>
        Unleash. Any player suffers 3 damage and may place a card in their discard pile into their hand.
      </p>
    `,
  },
  {
    id: 'CatacombDrone',
    expansion: 'WE',
    tier: 1,
    type: 'Minion',
    name: 'Catacomb Drone',
    hp: 5,
    effect: `
      <p>
        <b>Persistent:</b> Unleash. Gravehold suffers 1 damage.
      </p>
    `,
  },
  {
    id: 'Encroach',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Encroach',
    effect: `
      <p>
        Unleash. Reveal the top card of the turn order deck. If a player turn order card was revealed, that player suffers 2 damage. Otherwise, Gravehold suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'HeartofNothing',
    expansion: 'WE',
    tier: 1,
    type: 'Power',
    name: 'Heart of Nothing',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Discard four cards in hand.<br />
        <br />
        <b>Power 2:</b> Unleash twice.
        <span class="or">OR</span>
        Any player suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'HowlingSpinners',
    expansion: 'WE',
    tier: 1,
    type: 'Minion',
    name: 'Howling Spinners',
    hp: 5,
    effect: `
      <p>
        <b>Persistent:</b> Any player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'NightUnending',
    expansion: 'WE',
    tier: 1,
    type: 'Power',
    name: 'Night Unending',
    power: 3,
    effect: `
      <p>
        <b>Power 3:</b> Gravehold suffers 2 damage for each spell prepped by the player with the most prepped spells.
      </p>
    `,
  },
  {
    id: 'Nix',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Nix',
    effect: `
      <p>
        Unleash. Any player suffers 1 damage and discards their most expensive card in hand.
      </p>
    `,
  },
  {
    id: 'PlanarCollision',
    expansion: 'WE',
    tier: 1,
    type: 'Power',
    name: 'Planar Collision',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Discard two prepped spells.<br />
        <br />
        <b>Power 2:</b> Unleash twice.
      </p>
    `,
  },
  {
    id: 'Thrash',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Thrash',
    effect: `
      <p>
        Unleash. The players collectively discard two cards in hand.
      </p>
    `,
  },
  {
    id: 'AphoticSun',
    expansion: 'WE',
    tier: 2,
    type: 'Power',
    name: 'Aphotic Sun',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash. The player with the most charges suffers 3 damage and loses all of their charges.
      </p>
    `,
  },
  {
    id: 'ChaosFlail',
    expansion: 'WE',
    tier: 2,
    type: 'Power',
    name: 'Chaos Flail',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. Any player places their discard pile on top of their deck and shuffles it. Then, that player reveals the top two cards of their deck and destroys the most expensive card revealed.
      </p>
    `,
  },
  {
    id: 'MageEnder',
    expansion: 'WE',
    tier: 2,
    type: 'Minion',
    name: 'Mage Ender',
    hp: 9,
    effect: `
      <p>
        <b>Persistent:</b> The player with the most opened breaches suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'Mangleroot',
    expansion: 'WE',
    tier: 2,
    type: 'Minion',
    name: 'Mangleroot',
    hp: 12,
    effect: `
      <p>
        <b>Persistent:</b> Gravehold suffers 3 damage. This minon suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'MorbidGyre',
    expansion: 'WE',
    tier: 2,
    type: 'Power',
    name: 'Morbid Gyre',
    power: 1,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 1:</b> Unleash twice. The players collectively discard three cards in hand.
      </p>
    `,
  },
  {
    id: 'Mutilate',
    expansion: 'WE',
    tier: 2,
    type: 'Attack',
    name: 'Mutilate',
    effect: `
      <p>
        Unleash. The players collectively discard two prepped spells. Any player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'NullScion',
    expansion: 'WE',
    tier: 2,
    type: 'Minion',
    name: 'Null Scion',
    hp: 11,
    effect: `
      <p>
        <b>Persistent:</b> Unleash.
      </p>
    `,
  },
  {
    id: 'Smite',
    expansion: 'WE',
    tier: 2,
    type: 'Attack',
    name: 'Smite',
    effect: `
      <p>
        Unleash twice. Gravehold suffers 2 damage.
      </p>
    `,
  },

  {
    id: 'ApocalypseRitual',
    expansion: 'WE',
    tier: 3,
    type: 'Power',
    name: 'Apocalypse Ritual',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Gravehold suffers 5 damage for each nemesis turn order card in the turn order discard pile.
      </p>
    `,
  },
  {
    id: 'Banish',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Banish',
    effect: `
      <p>
        Unleash twice. The player with the most prepped spells suffers 1 damage for each of their prepped spells.
      </p>
    `,
  },
  {
    id: 'CataclysmicFate',
    expansion: 'WE',
    tier: 3,
    type: 'Power',
    name: 'Cataclysmic Fate',
    power: 1,
    effect: `
      <p>
        <b>To Discard:</b> Destroy a prepped spell that costs 5 <span class="aether">&AElig;</span> or more and a breach in which it was prepped.<br />
        <br />
        <b>Power 1:</b> The player with the lowest life suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'MonstrosityofOmens',
    expansion: 'WE',
    tier: 3,
    type: 'Minion',
    name: 'Monstrosity of Omens',
    shields: 5,
    hp: 0,
    effect: `
      <p>
        When damage is dealt to this minion, reduce that damage to 1.<br />
        <br />
        <b>Persistent:</b> Gravehold suffers damage equal to this minion's current life.
      </p>
    `,
  },
  {
    id: 'Engulf',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Engulf',
    effect: `
      <p>
        Resolve the most recently discarded attack card in the nemesis discard pile.
      </p>
    `,
  },
  {
    id: 'Quell',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Quell',
    effect: `
      <p>
        Gravehold Suffers 7 damage.
        <span class="or">OR</span>
        Unleash three times.
      </p>
    `,
  },
  {
    id: 'Throttle',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Throttle',
    effect: `
      <p>
        Unleash twice. Any player destorys their three most expensive cards in hand.
      </p>
    `,
  },
  {
    id: 'WitheringBeam',
    expansion: 'WE',
    tier: 3,
    type: 'Power',
    name: 'Withering Beam',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash twice. The players collectively destroy the two most expensive prepped spells.
      </p>
    `,
  },
]
