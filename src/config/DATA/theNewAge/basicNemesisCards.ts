import { BasicNemesisCard } from 'aer-types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'DrillbeakWurm',
    expansion: 'NA',
    tier: 1,
    type: 'Minion',
    name: 'Drillbeak Wurm',
    hp: 6,
    effect: `
      <p>
        <b>Persistent:</b> Any player suffers 1 damage. Gravehold suffers 1 damage.
      </p>
    `,
  },
  {
    id: 'CarriodeColony',
    expansion: 'NA',
    tier: 1,
    type: 'Minion',
    name: 'Carriode Colony',
    hp: 4,
    effect: `
      <p>
        <b>Immediately:</b> This minion suffers damage equal to the number of players in the game.<br />
        <b>Persistent:</b> Unleash.
      </p>
    `,
  },
  {
    id: 'ChaosOrb',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    name: 'Chaos Orb',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 3:</b> Unleash. Gravehold suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'Disorient',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    name: 'Disorient',
    effect: `
      <p>
        Unleash. Any player suffers 1 damage and discards a card in hand. If that card is a gem, Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'Rend',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    name: 'Rend',
    effect: `
      <p>
        Unleash. Gravehold suffers 1 damage. Any player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'UnnervingHowl',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    name: 'Unnerving Howl',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash. Any player discards two gems in hand.
      </p>
    `,
  },
  {
    id: 'CeaselessDarkness',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    name: 'Ceaseless Darkness',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 5 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash. Any player suffers 3 damage. Any player discards a card in hand.
      </p>
    `,
  },
  {
    id: 'AetherShock',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    name: 'Aether Shock',
    effect: `
      <p>
        Unleash. The player with the most prepped spells suffers 1 damage and discards a prepped spell.
      </p>
    `,
  },
  {
    id: 'Decimate',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    name: 'Decimate',
    effect: `
      <p>
        Unleash twice and any players gains 2 charges.
        <span class="or">OR</span>
        Gravehold suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'BlindEnigma',
    expansion: 'NA',
    tier: 1,
    type: 'Minion',
    name: 'Blind Enigma',
    hp: 7,
    effect: `
      <p>
        <b>Persistent:</b> Any player suffers 1 damage. If the nemesis tier is 2 or higher, that player suffers 2 additional damage.
      </p>
    `,
  },
  {
    id: 'PlanarCollision',
    expansion: 'NA',
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
    id: 'SpiritSnare',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    name: 'Spirit Snare',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Discard a card in hand that costs 5 <span class="aether">&AElig;</span> or more.<br />
        <br />
        <b>Power 3:</b> Unleash. Any player discards a spell in hand and suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'Dement',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    name: 'Dement',
    effect: `
      <p>
        Unleash twice. Any player suffers 1 damage and places their most expensive card in hand on top of their deck.
      </p>
    `,
  },
  {
    id: 'Decay',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    name: 'Decay',
    effect: `
      <p>
        Unleash twice. Any player or Gravehold suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'CullingScythe',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    name: 'Culling Scythe',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash. The player with the lowest life suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'Fugue',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    name: 'Fugue',
    effect: `
      <p>
        Any player discards three cards in hand and suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'VolcanicZala',
    expansion: 'NA',
    tier: 2,
    type: 'Minion',
    name: 'Volcanic Zala',
    hp: 10,
    effect: `
      <p>
        <b>Persistent:</b> Gravehold suffers 3 damage.
        <span class="or">OR</span>
        Any player loses 2 charges.
      </p>
    `,
  },
  {
    id: 'PortalGuardian',
    expansion: 'NA',
    tier: 2,
    type: 'Minion',
    name: 'Portal Guardian',
    hp: 8,
    effect: `
      <p>
        <b>Persistent:</b> Unleash. Any player suffers 1 damage.
      </p>
    `,
  },
  {
    id: 'ObliteratingMeteor',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    name: 'Obliterating Meteor',
    power: 1,
    effect: `
      <p>
        <b>To Discard:</b> Discard four cards in hand.<br />
        <br />
        <b>Power 1:</b> Unleash twice. Gravehold suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'Mutilate',
    expansion: 'NA',
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
    id: 'Needlemaw',
    expansion: 'NA',
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
    id: 'MorbidGyre',
    expansion: 'NA',
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
    id: 'GravitySplinter',
    expansion: 'NA',
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
    id: 'Eliminate',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    name: 'Eliminate',
    effect: `
      <p>
        Unleash three times.
        <span class="or">OR</span>
        Gravehold suffers 6 damage.
        <span class="or">OR</span>
        Any player suffers 5 damage.
      </p>
    `,
  },
  {
    id: 'CrushingStorm',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    name: 'Crushing Storm',
    power: 1,
    effect: `
      <p>
        <b>To Discard:</b> Destroy two opened breaches.<br />
        <br />
        <b>Power 1:</b> Unleash three times.
      </p>
    `,
  },
  {
    id: 'GnashingMaw',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    name: 'Gnashing Maw',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash. The player with the most expensive prepped spell destroys it. If that spell costs 4 <span class="aether">&AElig;</span> or less, Unleash and any player suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'Disperse',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    name: 'Disperse',
    effect: `
      <p>
        Unleash twice. Any player suffers 2 damage and destroys their most expensive card in hand.
      </p>
    `,
  },
  {
    id: 'Gore',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    name: 'Gore',
    effect: `
      <p>
        Unleash twice. The player with the most expensive card in hand discards three cards in hand. Then, for each card in that player's hand that costs 2 <span class="aether">&AElig;</span> or more, that player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'HexofDestruction',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    name: 'Hex of Destruction',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. Gravehold suffers 4 damage. Any player destroys the top four cards of their deck.
      </p>
    `,
  },
  {
    id: 'EternalWatcher',
    expansion: 'NA',
    tier: 3,
    type: 'Minion',
    name: 'Eternal Watcher',
    hp: 10,
    effect: `
      <p>
        <b>Persistent:</b> Any player suffers 3 damage. If this minion has 6 or less life, it gains 3 life.
      </p>
    `,
  },
  {
    id: 'Sunder',
    expansion: 'NA',
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
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    name: 'Topple',
    effect: `
      <p>
        Unleash twice. Gravehold suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'MonstrosityofOmens',
    expansion: 'NA',
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
    id: 'DoomAegis',
    expansion: 'NA',
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
]
