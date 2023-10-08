import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'OmniscientOtherling',
    name: 'Omniscient Otherling',
    expansion: 'PFPromo',
    tier: 2,
    type: 'Minion',
    hp: 12,
    effect: `
      <p>
        When this is discarded, if all player have 4 or more life, Gravehold suffers 5 damage.
        <b>Persistent:</b> Any player suffers 3 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'ConsumingEarth',
    name: 'Consuming Earth',
    expansion: 'PFPromo',
    tier: 1,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>To Discard:</b> Discard a prepped spell that costs 6 <span class="aether">&AElig;</span> or more.<br/>
        <br/> 
        <b>Power 1:</b> Unleash twice. Gravehold suffers 2 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Bombard',
    name: 'Bombard',
    expansion: 'PFPromo',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
        Unleash.<br/>
        Any player suffers 2 damage.<br/>
        Gravehold suffers 3 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'CoalBeast',
    name: 'Coal Beast',
    expansion: 'PFPromo',
    tier: 1,
    type: 'Minion',
    shields: 1,
    hp: 5,
    effect: `
      <p>
        <b>Defeated:</b> Discard two cards in hand.
        <b>Persistent:</b> Unleash. Gravehold suffers 1 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Reckoning',
    name: 'Reckoning',
    expansion: 'PFPromo',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> If any player has 4 charges or more, that player suffers 3 damage and players collectively discard four cards in hand.
        Otherwise, Gravehold suffers 6 damage
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Flay',
    name: 'Flay',
    expansion: 'PFPromo',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice.<br/> 
        Any player discards a prepped spell and suffers 3 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Resurrect',
    name: 'Resurrect',
    expansion: 'PFPromo',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Place two minions from the nemesis discard pile into play. Add a shield token to each of them.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'ChainLightning',
    name: 'Chain Lightning',
    expansion: 'PFPromo',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Gravehold or any player suffers 1 damage. Repeat this eight times.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'VoidRevenants',
    name: 'Void Revenants',
    expansion: 'PFPromo',
    tier: 3,
    type: 'Minion',
    hp: 14,
    effect: `
      <p>
        <b>Defeated:</b> Unleash twice.
        <b>Persistent:</b> Gravehold or any player suffers 4 damage	
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Incense',
    name: 'Incense',
    expansion: 'PFPromo',
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
]
