import { BasicNemesisCard } from 'aer-types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Ambush',
    expansion: 'Legacy',
    tier: 1,
    type: 'Attack',
    name: 'Ambush',
    effect: `
      <p>
        Unleash. Gravehold suffers 2 damage. Any player suffers 1 damage.
      </p>
    `,
  },
  {
    id: 'Conduct',
    expansion: 'Legacy',
    tier: 1,
    type: 'Attack',
    name: 'Conduct',
    effect: `
      <p>
        Unleash. The player with the most charges suffers 2 damage and gains a charge.
      </p>
    `,
  },
  {
    id: 'CreepingCurse',
    expansion: 'Legacy',
    tier: 1,
    type: 'Power',
    name: 'Creeping Curse',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 3:</b> Unleash. Any player suffers 2 damage. The players collectively discad two cards in hand.
      </p>
    `,
  },
  {
    id: 'Daze',
    expansion: 'Legacy',
    tier: 1,
    type: 'Attack',
    name: 'Daze',
    effect: `
      <p>
        Any player suffers 2 damage and discards a card in hand. If that card costs 0 <span class="aether">&AElig;</span>, Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'EndlessChasm',
    expansion: 'Legacy',
    tier: 1,
    type: 'Power',
    name: 'Endless Chasm',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'AetherExtract',
    expansion: 'Legacy',
    tier: 1,
    type: 'Power',
    name: 'Aether Extract',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash. Any player discards two gems. If both of those gems cost 0 <span class="aether">&AElig;</span>, Unleash.
      </p>
    `,
  },
  {
    id: 'RavenousLeviathan',
    expansion: 'Legacy',
    tier: 1,
    type: 'Minion',
    name: 'Ravenous Leviathan',
    hp: 6,
    effect: `
      <p>
        <b>Persistent:</b> Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'SpineThresher',
    expansion: 'Legacy',
    tier: 1,
    type: 'Minion',
    name: 'Spine Thresher',
    shields: 3,
    hp: 1,
    effect: `
      <p>
        <b>Persistent:</b> Unleash. Any player suffers 1 damage.
      </p>
    `,
  },
  {
    id: 'CausticCocoon',
    expansion: 'Legacy',
    tier: 2,
    type: 'Minion',
    name: 'Caustic Cocoon',
    hp: 9,
    effect: `
      <p>
        <b>Persistent:</b> Unleash. Gravehold suffers 1 damage.
      </p>
    `,
  },
  {
    id: 'Sap',
    expansion: 'Legacy',
    tier: 2,
    type: 'Attack',
    name: 'Sap',
    effect: `
      <p>
        Unleash twice. Any player loses 2 charges.
        <span class="or">OR</span>
        Unleash twice. Any player suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'Tremor',
    expansion: 'Legacy',
    tier: 2,
    type: 'Power',
    name: 'Tremor',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. Gravehold suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'Drain',
    expansion: 'Legacy',
    tier: 2,
    type: 'Attack',
    name: 'Drain',
    effect: `
      <p>
        Unleash. Gravehold suffers 2 damage. The players collectively discard two prepped spells. Then, if any player has a prepped spell that costs 4 <span class="aether">&AElig;</span> or more, Unleash.
      </p>
    `,
  },
  {
    id: 'HummingHive',
    expansion: 'Legacy',
    tier: 2,
    type: 'Minion',
    name: 'Humming Hive',
    shields: 3,
    hp: 5,
    effect: `
      <p>
        <b>Persistent:</b> Any player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'Hunted',
    expansion: 'Legacy',
    tier: 2,
    type: 'Attack',
    name: 'Hunted',
    effect: `
      <p>
        Unleash twice. The player with the lowest life suffers 1 damage.
      </p>
    `,
  },
  {
    id: 'TemptingOffer',
    expansion: 'Legacy',
    tier: 2,
    type: 'Power',
    name: 'Tempting Offer',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 3:</b> Unleash twice. The player with the lowest life suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'Annihilate',
    expansion: 'Legacy',
    tier: 3,
    type: 'Attack',
    name: 'Annihilate',
    effect: `
      <p>
        Unleash twice. The player with the most expensive card in hand discards two cards in hand. Then, for each card in that players hand that costs 2 <span class="aether">&AElig;</span> or more, Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'FacetOgre',
    expansion: 'Legacy',
    tier: 3,
    type: 'Minion',
    name: 'Facet Ogre',
    shields: 4,
    hp: 1,
    effect: `
      <p>
        <b>Persistent:</b> Gravehold suffers damage equal to the number of shield tokens this minion has. If this minion has two or less shield tokens, it gains one shield token.
      </p>
    `,
  },
  {
    id: 'FlashofDecay',
    expansion: 'Legacy',
    tier: 3,
    type: 'Power',
    name: 'Flash of Decay',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash twice. The player with the most expensive prepped spell destroys it. If that spell costs 4 <span class="aether">&AElig;</span> or less, or no spell was destroyed, Unleash.
      </p>
    `,
  },
  {
    id: 'GatheringStorm',
    expansion: 'Legacy',
    tier: 3,
    type: 'Power',
    name: 'Gathering Storm',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. If there are two nemesis turn order cards in the turn order discard pile, any player suffers 4 damage. Otherwise, Gravehold suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'MaddeningSpectre',
    expansion: 'Legacy',
    tier: 3,
    type: 'Minion',
    name: 'Maddening Spectre',
    shields: 2,
    hp: 7,
    effect: `
      <p>
        <b>Persistent:</b> Unleash twice.
      </p>
    `,
  },
  {
    id: 'Scatter',
    expansion: 'Legacy',
    tier: 3,
    type: 'Attack',
    name: 'Scatter',
    effect: `
      <p>
        Unleash twice. Any player destroys their most expensive card in hand.
      </p>
    `,
  },
  {
    id: 'Suffocate',
    expansion: 'Legacy',
    tier: 3,
    type: 'Attack',
    name: 'Suffocate',
    effect: `
      <p>
        Unleash three times.
        <span class="or">OR</span>
        Gravehold suffers 3 damage and any player suffes 3 damage.
      </p>
    `,
  },
]
