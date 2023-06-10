import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'CarriodeRaiders',
    name: 'Carriode Raiders',
    expansion: 'LOG',
    tier: 1,
    type: 'Minion',
    hp: 3,
    shields: 3,
    effect: `
      <p>
        <b>Persistent:</b> Gravehold suffers 2 damage. Add a fire token to your location on the map.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Incense',
    name: 'Incense',
    expansion: 'LOG',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice. Any player suffers 1 damage.
        <span class="or">OR</span>
        Gravehold suffers 5 damage. Add 2 fire tokens to your location on the map.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'SpreadingBrushfire',
    name: 'Spreading Brushfire',
    expansion: 'LOG',
    tier: 1,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br/>
        <b>Power 2:</b> Unleash twice. Gravehold suffers 3 damage.
        Add a fire token to your location on the map.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Blacken',
    name: 'Blacken',
    expansion: 'LOG',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice.<br/>
        Gravehold suffers 5 damage.<br/>
        If there are 4 or less fire tokens on your location of the map,
        add 2 fire tokens to your location on the map.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'BreachShatter',
    name: 'Breach Shatter',
    expansion: 'LOG',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To discard:</b> Spend 8 <span class="aether">&AElig;</span>.<br/>
        <b>Power 2:</b> Unleash twice. The player with the lowest life suffers 4 damage.<br/>
        If that player becomes exhausted because of this, that mage is severed and cross out this sentence.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'ChitinKiller',
    name: 'Chitin Killer',
    expansion: 'LOG',
    tier: 2,
    type: 'Minion',
    hp: 13,
    effect: `
      <p>
        <b>Persistent:</b> The player with the most prepped spells suffers 3 damage.
        If that player becomes exhausted because of this, that mage is severed and cross out this sentence.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'MagmaLordZala',
    name: 'Magma Lord Zala',
    expansion: 'LOG',
    tier: 2,
    type: 'Minion',
    hp: 10,
    shields: 2,
    effect: `
      <p>
        <b>Persistent:</b> Gravehold and any player each suffer 2 damage.
        Add a fire token to your location of the map.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'SoulRend',
    name: 'Soul Rend',
    expansion: 'LOG',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To discard:</b> Spend 9 <span class="aether">&AElig;</span>.<br/>
        <b>Power 2:</b> Unleash three times, and add 2 fire tokens to your location on the map.
        <span class="or">OR</span>
        Unleash twice, the player with the lowest life suffers 1 damage, their mage becomes severed,
        and cross out this sentence.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Stifle',
    name: 'Stifle',
    expansion: 'LOG',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice. The player with the lowest life suffers 3 damage.<br/>
        If that player becomes exhausted because of this, that mage is severed and cross out this sentence.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'DreadIgnition',
    name: 'Dread Ignition',
    expansion: 'LOG',
    tier: 3,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>Power 1:</b> Unleash twice, and the player with the most charges suffers 3 damage
        and loses all of their charges.
        <span class="or">OR</span>
        Gravehold suffers 5 damage, and add 2 fire tokens to your location on the map.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Explosion',
    name: 'Explosion',
    expansion: 'LOG',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Unleash three times.<br/>
        The players collectively discard the two most expensive cards in hand.<br/>
        Add 2 fire tokens to your location on the map.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'InescapableTorment',
    name: 'InescapableTorment',
    expansion: 'LOG',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> The player with the highest life suffers damage equal to their life.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'NyxOfBurningBones',
    name: 'Nyx of Burning Bones',
    expansion: 'LOG',
    tier: 3,
    type: 'Minion',
    hp: 15,
    effect: `
      <p>
        <b>Persistent:</b> Unleash twice. Gravehold suffers 2 damage.
        Add a fire token to your location on the map.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Ravage',
    name: 'Ravage',
    expansion: 'LOG',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Unleash four times.
        <span class="or">OR</span>
        Add three fire tokens to your location on the map.
        <span class="or">OR</span>
        Gravehold suffers 7 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Revive',
    name: 'Revive',
    expansion: 'LOG',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice.<br/>
        Place the most recently discarded minion in the nemesis discard pile into play.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'TheCeaselessObserver',
    name: 'The Ceaseless Observer',
    expansion: 'LOG',
    tier: 3,
    type: 'Minion',
    hp: 7,
    shields: 3,
    effect: `
      <p>
        <b>Persistent:</b> Gravehold suffers 3 damage. Add fire tokens
        to your location on the map equal to the number of shield tokens on this minion.
      </p>
    `,
    upgraded: true,
  },
]
