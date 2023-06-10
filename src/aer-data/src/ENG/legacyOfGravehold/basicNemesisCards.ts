import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'CeaselessDarkness-LOG',
    expansion: 'LOG',
    tier: 1,
    type: 'Power',
    name: 'Ceaseless Darkness',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 5 <span class="aether">&AElig;</span>.<br />
        <br/>
        <b>Power 2:</b> Unleash. Any player suffers 3 damage. Any player discards a cards in hand.
      </p>
    `,
  },
  {
    id: 'ChaosOrb-LOG',
    expansion: 'LOG',
    tier: 1,
    type: 'Power',
    name: 'Chaos Orb',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />
        <br/>
        <b>Power 3:</b> Unleash. Gravehold suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'CoalWelp-LOG',
    expansion: 'LOG',
    tier: 1,
    type: 'Minion',
    name: 'Coal Welp',
    shields: 2,
    hp: 3,
    effect: `
      <p>
        <b>Persistent:</b> Unleash. Add a fire token to your location on the map.
      </p>
    `,
  },
  {
    id: 'Consume-LOG',
    expansion: 'LOG',
    tier: 1,
    type: 'Attack',
    name: 'Consume',
    effect: `
      <p>
        Unleash.<br/>
        Any player suffers 2 damage and discards a card in hand.<br/>
        If that card costs 2 <span class="aether">&AElig;</span> or less,
        add a fire token to your location on the map.
      </p>
    `,
  },
  {
    id: 'CosmopodHorror-LOG',
    expansion: 'LOG',
    tier: 1,
    type: 'Minion',
    name: 'Cosmopod Horror',
    hp: 8,
    effect: `
      <p>
        When this is discarded, banish it.<br/>
        <b>Immediately:</b> This minion suffers damage equal to the number of
        players in the game.<br/>
        <b>Persistent:</b> Gravehold and any player each suffer 1 damage.
      </p>
    `,
  },
  {
    id: 'Disorient-LOG',
    expansion: 'LOG',
    tier: 1,
    type: 'Attack',
    name: 'Disorient',
    effect: `
      <p>
        Unleash.<br/>
        Any player suffers 1 damage and discards a card in hand.<br/>
        If that card is a gem, Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'ImpendingImmolation-LOG',
    expansion: 'LOG',
    tier: 1,
    type: 'Power',
    name: 'Impending Immolation',
    power: 2,
    effect: `
      <p>
        <b>To discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br/>
        <b>Power 2:</b> Unleash. Gravehold suffers 3 damage. Add a fire token
        to your location on the map.
      </p>
    `,
  },
  {
    id: 'Rend-LOG',
    expansion: 'LOG',
    tier: 1,
    type: 'Attack',
    name: 'Rend',
    effect: `
      <p>
        Unleash.<br/>
        Gravehold suffers 1 damage.<br/>
        Any player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'CollapsingComet',
    expansion: 'LOG',
    tier: 2,
    type: 'Power',
    name: 'CollapsingComet',
    power: 1,
    effect: `
      <p>
        <b>To discard:</b> Discard four cards in hand.<br/>
        <b>Power 1:</b> Unleash twice. Gravehold suffers 3 damage.<br/>
        Banish this.
      </p>
    `,
  },
  {
    id: 'DevilsPact',
    expansion: 'LOG',
    tier: 2,
    type: 'Attack',
    name: `Devil's Pact`,
    effect: `
      <p>
        Gravehold suffers 5 damage.
        <span class="or">OR</span>
        Any player suffers 5 damage.
        <span class="or">OR</span>
        The players discard the three most expensive prepped spells.
        <span class="or">OR</span>
        Unleash twice. The players collectively lose 3 charges.
      </p>
    `,
  },
  {
    id: 'FoggyMiasma',
    expansion: 'LOG',
    tier: 2,
    type: 'Attack',
    name: 'Foggy Miasma',
    effect: `
      <p>
        Any player discards three cards in hand and suffers 2 damage.<br/>
        Banish this.
      </p>
    `,
  },
  {
    id: 'Otherling',
    expansion: 'LOG',
    tier: 2,
    type: 'Minion',
    name: 'Otherling',
    hp: 10,
    effect: `
      <p>
        When this is discarded, banish this.<br/>
        <b>Persistent:</b> Unleash. Any player suffers 1 damage.
      </p>
    `,
  },
  {
    id: 'PaleReckoner',
    expansion: 'LOG',
    tier: 2,
    type: 'Minion',
    name: 'Pale Reckoner',
    shields: 4,
    hp: 8,
    effect: `
      <p>
        <b>Immediately:</b> This minion loses a shield token for each player in the game.<br/>
        <b>Persistent:</b> Any player suffers 2 damage. Add a fire token to your location on the map.
      </p>
    `,
  },
  {
    id: 'SpreadingInferno',
    expansion: 'LOG',
    tier: 2,
    type: 'Power',
    name: 'Spreading Inferno',
    power: 2,
    effect: `
      <p>
        <b>To discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br/>
        <b>Power 2:</b> Unleash twice. If there are 3 or less fire tokens on your
        location of the map, add a fire token to your location on the map.
        Otherwise, Unleash.
      </p>
    `,
  },
  {
    id: 'Ruin',
    expansion: 'LOG',
    tier: 2,
    type: 'Attack',
    name: 'Ruin',
    effect: `
      <p>
        Unleash twice. Gravehold suffers 3 damage.
        <span class="or">OR</span>
        Unleash twice. Add a fire token to your location on the map.
      </p>
    `,
  },
  {
    id: 'CrushingStorm-LOG',
    expansion: 'LOG',
    tier: 3,
    type: 'Power',
    name: 'Crushing Storm',
    power: 1,
    effect: `
      <p>
        <b>To discard:</b> Destroy two opened breaches.<br/>
        <b>Power 1:</b> Unleash three times.<br/>
        Banish this.
      </p>
    `,
  },
  {
    id: 'DemolishingVoid',
    expansion: 'LOG',
    tier: 3,
    type: 'Power',
    name: 'Demolishing Void',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash. The player with the most expensive prepped spell
        destroys it. If that spell costs 4 <span class="aether">&AElig;</span> or less,
        Unleash and any player suffers 3 damage.<br/>
        Banish this.
      </p>
    `,
  },
  {
    id: 'Divide',
    expansion: 'LOG',
    tier: 3,
    type: 'Attack',
    name: 'Divide',
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
    id: 'Eviscerate',
    expansion: 'LOG',
    tier: 3,
    type: 'Attack',
    name: 'Eviscerate',
    effect: `
      <p>
        Unleash twice.<br/>
        Any player suffers 2 damage and destroys their most expensive card in hand.<br/>
        Banish this.
      </p>
    `,
  },
  {
    id: 'HexOfDestruction-LOG',
    expansion: 'LOG',
    tier: 3,
    type: 'Power',
    name: 'Hex of Destruction',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 8 <span class="aether">&AElig;</span>.<br />
        <b>Power 2:</b> Unleash twice. Gravehold suffers 4 damage.
        Any player destroys the top four cards of their deck.
      </p>
    `,
  },
  {
    id: 'Incinerate',
    expansion: 'LOG',
    tier: 3,
    type: 'Attack',
    name: 'Incinerate',
    effect: `
      <p>
        Unleash twice.<br/>
        The player with the most expensive card in hand suffers 2 damage and discards three cards.
        Then, for each card in their hand that costs 2 <span class="aether">&AElig;</span> or more,
        add a fire token to your location on the map.
      </p>
    `,
  },
  {
    id: 'VoidStrays',
    expansion: 'LOG',
    tier: 3,
    type: 'Minion',
    name: 'Void Strays',
    hp: 13,
    effect: `
      <p>
        <b>Persistent:</b> Any player suffers 3 damage.
        <span class="or">OR</span>
        Unleash. Add 2 fire tokens to your location on the map.
      </p>
    `,
  },
]
