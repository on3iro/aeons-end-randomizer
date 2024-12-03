import { Foe } from '../../../../aer-types/types'

export const foes: Foe[] = [
  {
    name: 'The Corrosion',
    id: 'TheCorrosion',
    expansion: 'ATD',
    charges: 5,
    abilityName: 'Return to Dust',
    abilityEffect: 'Remove 2 power tokens from each power in play. Gravehold suffers 5 damage.',
    deck: [
      {
        name: 'Diminish',
        id: 'Diminish',
        expansion: 'ATD',
        type: 'Attack',
        effect: '<p>Place a Draining Sign into play.</p>',
      },
      {
        name: 'Empower',
        id: 'Empower',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Remove 1 power token from each power in play, and the nemesis gains 6 life.
          <span class="or">OR</span>
          Place a Draining Sign into play.
          </p>
        `,
      },
      {
        name: 'Imbue Inevitability',
        id: 'ImbueInevitability',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          The Corrosion gains 2 charges.
          <span class="or">OR</span>
          Place the bottommost power card from the nemesis discard pile into play.
          Any player gains 2 charges.
          </p>
        `,
      },
      {
        name: 'Leech',
        id: 'Leech',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          The Corrosion gains 2 charges.
          <span class="or">OR</span>
          Any player discards a gem in hand that costs
          3 <span class="aether">&AElig;</span> or more.
          </p>
        `,
      },
    ],
    extraCards: [
      {
        name: 'Draining Sign',
        id: 'DrainingSign',
        expansion: 'ATD',
        type: 'Power',
        power: 3,
        effect: `
          <p>
            <b>To Discard:</b> Spend 5 <span class="aether">&AElig;</span>.
            Return this card to the Draining Sign pile.
          </p>
          <p>
            <b>Power 3:</b> Any player suffers 4 damage.
            Return this to the Draining Sign pile.
          </p>
        `
      },
    ],
  },
  {
    name: 'The Cultist',
    id: 'TheCultist',
    expansion: 'ATD',
    charges: 4,
    abilityName: 'Feed the Ritual',
    abilityEffect: 'Volatile Pylon gains 2 life. Then, remove a power token from Ritual of Flame three times.',
    deck: [
      {
        name: 'Burn Bright',
        id: 'BurnBright',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          The Cultist gains 2 charges.
          <span class="or">OR</span>
          Volatile Pylon gains 4 life.
          </p>
        `,
      },
      {
        name: 'Feed the Flames',
        id: 'FeedTheFlames',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          The Cultist gains 1 charge.
          </p>
          <p>
          Any player may discard a gem in hand that costs
          3 <span class="aether">&AElig;</span> or more.
          If they don't, Volatile Pylon gains 3 life.
          </p>
        `,
      },
      {
        name: 'Melt',
        id: 'Melt',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          If Volatile Pylon has 5 or more life, any player discards two cards in hand.
          Otherwise, Volatile Pylon gains 4 life.
          </p>
        `,
      },
      {
        name: 'Smothering Smog',
        id: 'SmotheringSmog',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Volatile Pylon gains 2 life and any player loses 1 charge.
          <span class="or">OR</span>
          The Cultist gains 3 charges and the friend gains 1 charge.
          </p>
        `,
      },
    ],
    extraCards: [
      {
        name: 'Ritual of Flame',
        id: 'RitualOfFlame',
        expansion: 'ATD',
        type: 'Power',
        power: 5,
        effect: `
          <p>
            <b>Power 5:</b> Any player suffers damage equal to the life of Volatile Pylon minus 1.
          </p>
          <p>
            Place 5 power tokens on this instead of discarding it.
          </p>
        `,
      },
      {
        name: 'Volatile Pylon',
        id: 'VolatilePylon',
        expansion: 'ATD',
        type: 'Minion',
        hp: '*',
        effect: `
          <p>
           This enters play with 4 life.<br/>
           This minion has no maximum life.<br/>
           This minion's life cannot be reduced below 1.
          </p>
        `,
      },
    ],
  },
  {
    name: 'The Scavenger',
    id: 'TheScavenger',
    expansion: 'ATD',
    charges: 4,
    abilityName: 'Cull the Stragglers',
    abilityEffect: 'The player with the lowest life suffers 4 damage.',
    deck: [
      {
        name: 'Carrion Claw',
        id: 'CarrionClaw',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          The Scavenger gains 2 charges.
          <span class="or">OR</span>
          Any player loses 2 charges.
          </p>
        `,
      },
      {
        name: 'Reclaim',
        id: 'Reclaim',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Any player discards their two most expensive cards in hand and then draws a card.
          </p>
          <p>
          Gravehold suffers 3 damage.
          </p>
        `,
      },
      {
        name: 'Screeching Wail',
        id: 'ScreechingWail',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          The Scavenger gains 1 charge. Any player may discard a prepped spell
          that costs 3 <span class="aether">&AElig;</span> or more.
          If they don't, the Scavenger gains an additional 2 charges.
          </p>
        `,
      },
      {
        name: 'Shadow Slash',
        id: 'ShadowSlash',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Gravehold suffers 3 damage.
          <span class="or">OR</span>
          The Scavenger gains 3 charges and the friend gains 1 charge.
          </p>
        `,
      },
    ],
  },
  {
    name: 'The Swarm',
    id: 'TheSwarm',
    expansion: 'ATD',
    charges: 5,
    abilityName: 'Call the Hive',
    abilityEffect: `
      Place the bottommost minion from the nemesis discard pile back into play.
      If there are no minions in the nemesis discard pile, place two Broodlings into play instead.
    `,
    deck: [
      {
        name: 'Blistered Flesh',
        id: 'BlisteredFlesh',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Place a Broodling into play and Gravehold suffers 2 damage.
          <span class="or">OR</span>
          The Swarm gains 3 charges and the friend gains 1 charge.
          </p>
        `,
      },
      {
        name: 'Descend and Devour',
        id: 'DescendAndDevour',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>Place a Broodling into play.</p>
          <p>The Swarm gains 1 charge.</p>
        `,
      },
      {
        name: 'Summoning Screech',
        id: 'SummoningScreech',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Place a Broodling into play with 4 life.
          <span class="or">OR</span>
          Any player discards a relic in hand that costs
          2 <span class="aether">&AElig;</span> or more.
          </p>
        `,
      },
      {
        name: 'Wriggle',
        id: 'Wriggle',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          The Swarm gains 2 charges.
          <span class="or">OR</span>
          Gravehold suffers 3 damage.
          </p>
        `,
      },
    ],
    extraCards: [
      {
        name: 'Broodling',
        id: 'Broodling',
        expansion: 'ATD',
        type: 'Minion',
        hp: 3,
        effect: `
          <p>When this is discarded, return it to the Broodling deck.</p>
          <p><b>Persistent:</b> Any player siffers 1 damage and discards a card.</p>
        `,
      },
    ],
  },
]
