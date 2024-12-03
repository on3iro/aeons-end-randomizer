import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Banesire-ATD',
    expansion: 'ATD',
    tier: 1,
    type: 'Minion',
    name: 'Banesire',
    hp: 6,
    effect: `
      <p>
        <b>Persistent:</b> Unleash.
      </p>
    `,
  },
  {
    id: 'BoneTitan-ATD',
    expansion: 'ATD',
    tier: 1,
    type: 'Minion',
    name: 'Bone Titan',
    hp: 5,
    effect: `
      <p>
        <b>Defeated:</b> Gain a Scorched Pearl from the Curse deck.
      </p>
      <p>
        <b>Persistent:</b> Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'CeaselessDarkness-ATD',
    expansion: 'ATD',
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
    id: 'ChaosOrb-ATD',
    expansion: 'ATD',
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
    id: 'Contaminate-ATD',
    expansion: 'ATD',
    tier: 1,
    type: 'Attack',
    name: 'Contaminate',
    effect: `
      <p>Any player suffers 2 damage.</p>
      <p>Any player gains a Scorched Pearl from the Curse deck.</p>
    `,
  },
  {
    id: 'Disorient-ATD',
    expansion: 'ATD',
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
    id: 'Rend-ATD',
    expansion: 'ATD',
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
    id: 'MiasmaOfRot-ATD',
    expansion: 'ATD',
    tier: 1,
    type: 'Power',
    power: 2,
    name: 'Miasma of Rot',
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.
      </p>
      <p>
        <b>Power 3:</b> Unleash. Any player gains a Scorched Pearl from the Curse deck.
      </p>
    `,
  },
  {
    id: 'CullingScythe-ATD',
    expansion: 'ATD',
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
    id: 'Decay-ATD',
    expansion: 'ATD',
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
    id: 'Fugue-ATD',
    expansion: 'ATD',
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
    id: 'GatheringDread-ATD',
    expansion: 'ATD',
    tier: 2,
    type: 'Power',
    name: 'Gathering Dread',
    power: 4,
    effect: `
      <p><b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.</p>
      <p><b>Power 4:</b> Unleash three times.</p>
    `,
  },
  {
    id: 'ShriekingHavoc-ATD',
    expansion: 'ATD',
    tier: 2,
    type: 'Minion',
    name: 'Shrieking Havoc',
    hp: 9,
    effect: `
      <p>
        <b>Wandering</b> <span class="hint">(Reduce to 1 all damage that is dealt to this 
        by abilities and player cards. During any player's main phase, that player 
        may spend any amount of <span class="aether">&AElig;</span> to deal an 
        equal amount of damage to this.)</span>
      </p>
      <p>
        <b>Persistent:</b> The player with the lowest life suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'Taint-ATD',
    expansion: 'ATD',
    tier: 2,
    type: 'Attack',
    name: 'Taint',
    effect: `
      <p>Unleash twice.</p>
      <p>Any player gains a Scorched Pearl from the Curse deck and places it on top of their deck.</p>
    `,
  },
  {
    id: 'VolcanicZala-ATD',
    expansion: 'ATD',
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
    id: 'Anguish-ATD',
    expansion: 'ATD',
    tier: 3,
    type: 'Power',
    name: 'Anguish',
    power: 1,
    effect: `
      <p><b>To Discard:</b> Destroy three prepped spells.</p>
      <p><b>Power 1:</b> Unleash twice. Gravehold suffers 5 damage.</p>
    `,
  },
  {
    id: 'Bloodthirst-ATD',
    expansion: 'ATD',
    tier: 3,
    type: 'Attack',
    name: 'Bloodthirst',
    effect: `
      <p>
        Unleash three times.
        <span class="or">OR</span>
        Any player destroys three cards in hand that cost 3 <span class="aether">&AElig;</span> or more.
      </p>
    `,
  },
  {
    id: 'Disperse-ATD',
    expansion: 'ATD',
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
    id: 'Eliminate-ATD',
    expansion: 'ATD',
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
    id: 'GnashingMaw-ATD',
    expansion: 'ATD',
    tier: 3,
    type: 'Power',
    name: 'Gnashing Maw',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash. The player with the most expensive prepped spell destroys it.
        If that spell costs 4 <span class="aether">&AElig;</span> or less, Unleash and any player suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'HexOfDestruction-ATD',
    expansion: 'ATD',
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
    id: 'InfernalScion-ATD',
    expansion: 'ATD',
    tier: 3,
    type: 'Minion',
    name: 'Infernal Scion',
    hp: 15,
    effect: `
      <p>
        <b>Persistent:</b> Unleash. Any player places a card that costs 0 <span class="aether">&AElig;</span>
        in their discard pile on top of their deck. That player destroys a card in hand.
      </p>
    `,
  },
]
