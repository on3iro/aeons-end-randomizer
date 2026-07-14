import { Foe } from '../../../../aer-types/types'

export const foes: Foe[] = [
  {
    name: 'Creeping Dark',
    id: 'CreepingDark',
    expansion: 'BTB',
    charges: 4,
    abilityName: 'Shadows Lengthen',
    abilityEffect: 'Remove a power token from Spreading Shadow. Repeat this. Then, Creeping Dark gains one nemesis token.',
    deck: [
      {
        name: 'Light Drain',
        id: 'LightDrain',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Remove 1 power token from Spreading Shadow. Repeat this twice.
          <span class="or">OR</span>
          Creeping Dark gains 2 charges.
          </p>
        `,
      },
      {
        name: 'Plunge',
        id: 'Plunge',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Add a power token to Spreading Shadow. Any player destroys a card in hand that costs 1 <span class="aether">&AElig;</span> or more.
          <span class="or">OR</span>
          Any player discards two gems.
          </p>
        `,
      },
      {
        name: 'Pooling Black',
        id: 'PoolingBlack',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Creeping Dark gains 3 charges. Add 2 power tokens to Spreading Shadow.
		  <span class="or">OR</span>
		  Any player discards a gem in hand that costs 2 <span class="aether">&AElig;</span> or more.
          </p>
        `,
      },
      {
        name: 'Snuff Out',
        id: 'SnuffOut',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Creeping Dark gains 2 charges.
          <span class="or">OR</span>
          Any player discards a gem. Remove 1 power token from Spreading Shadow.
          </p>
        `,
      },
    ],
  },
  {
    name: 'The Hunger',
    id: 'TheHunger',
    expansion: 'BTB',
    charges: 3,
    abilityName: 'Glutton\'s Feast',
    abilityEffect: 'Destroy a card from the supply pile with the fewest cards. Repeat this twice. Then, draw a tendril.',
    deck: [
      {
        name: 'Bite',
        id: 'Bite',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Any player gains a gem from the supply that costs 4 <span class="aether">&AElig;</span> or less.<br/>Draw a tendril.
          </p>
        `,
      },
      {
        name: 'Chew',
        id: 'Chew',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          If The Hunger is dormant, destroy a card from four different supply piles, and The Hunger gains a charge. Otherwise, draw a tendril.
          </p>
        `,
      },
      {
        name: 'Munch',
        id: 'Munch',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Destroy a card from the least expensive supply pile. The Hunger gains 2 charges.
		  <span class="or">OR</span>
		  Any player discards a card in hand and suffers 3 damage.
          </p>
        `,
      },
      {
        name: 'Swallow',
        id: 'Swallow',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Destroy a card from the most expensive supply pile. The Hunger gains 2 charges.
          <span class="or">OR</span>
          Any player destroys a card in hand that costs 5 <span class="aether">&AElig;</span> or more. That player gains a card from the supply that costs less than the destroyed card.
          </p>
        `,
      },
    ],
  },
  {
    name: 'Creeping Dark',
    id: 'CreepingDark',
    expansion: 'BTB',
    charges: 4,
    abilityName: 'Shadows Lengthen',
    abilityEffect: 'Remove a power token from Spreading Shadow. Repeat this. Then, Creeping Dark gains one nemesis token.',
    deck: [
      {
        name: 'Light Drain',
        id: 'LightDrain',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Remove 1 power token from Spreading Shadow. Repeat this twice.
          <span class="or">OR</span>
          Creeping Dark gains 2 charges.
          </p>
        `,
      },
      {
        name: 'Plunge',
        id: 'Plunge',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Add a power token to Spreading Shadow. Any player destroys a card in hand that costs 1 <span class="aether">&AElig;</span> or more.
          <span class="or">OR</span>
          Any player discards two gems.
          </p>
        `,
      },
      {
        name: 'Pooling Black',
        id: 'PoolingBlack',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Creeping Dark gains 3 charges. Add 2 power tokens to Spreading Shadow.
		  <span class="or">OR</span>
		  Any player discards a gem in hand that costs 2 <span class="aether">&AElig;</span> or more.
          </p>
        `,
      },
      {
        name: 'Snuff Out',
        id: 'SnuffOut',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Creeping Dark gains 2 charges.
          <span class="or">OR</span>
          Any player discards a gem. Remove 1 power token from Spreading Shadow.
          </p>
        `,
      },
    ],
  },
  {
    name: 'The Anomaly',
    id: 'TheAnomaly',
    expansion: 'BTB',
    charges: 6,
    abilityName: 'Shadows Lengthen',
    abilityEffect: 'Reveal the top two cards of the nemesis deck. Put a minion or power revealed this way into play. Return the rest in any order. If no minion or power was revealed, Foe gains 4 charges.',
    deck: [
      {
        name: 'Existence Rupture',
        id: 'Existence Rupture',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Resolve the PERSISTENT: effect of a minion in play and that minion gains 1 life.
          <span class="or">OR</span>
          The Anomaly gains 3 charges and the friend gains 1 charge.
          </p>
        `,
      },
      {
        name: 'Fractured Rift',
        id: 'FracturedRift',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Reveal the top card of the nemesis deck. If it's a minion, The Anomaly gains 2 charges. Otherwise, discard it.
          </p>
        `,
      },
      {
        name: 'Reality Warp',
        id: 'RealityWarp',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          The Anomaly gains 2 charges.
		  <span class="or">OR</span>
		  Any player discards two gems in hand and suffers 1 damage.
          </p>
        `,
      },
      {
        name: 'Time Siphon',
        id: 'TimeSiphon',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
			The Anomaly gains 1 charge.<br/>The players may discard two prepped spells. If they don't, The Anomaly gains an additional 2 charges.
          </p>
        `,
      },
    ],
  },
]
