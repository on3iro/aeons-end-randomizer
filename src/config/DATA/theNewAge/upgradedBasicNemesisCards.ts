import { UpgradedBasicNemesisCard } from 'aer-types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'HissingAcid',
    name: 'Hissing Acid',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />
        <br /> 
        <b>Power 3:</b> Reveal the top card of the turn order deck. If it's a player turn order card, Unleash three times. Otherwise, any player suffers 5 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Wreck',
    name: 'Wreck',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice. Gravehold suffers 1 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'BaneCommander',
    name: 'Bane Commander',
    expansion: 'NA',
    tier: 1,
    type: 'Minion',
    hp: 6,
    effect: `
      <p>
        <b>Persistent:</b> Unleash. Any player suffers 1 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'SkyTremor',
    name: 'Sky Tremor',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 1:</b> Unleash twice. Gravehold suffers 4 damage.	
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'EngulfingMadness',
    name: 'Engulfing Madness',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. Any player suffers 4 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Separate',
    name: 'Separate',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice. Gravehold suffers 2 damage. The player with the most expensive prepped spell discards that spell.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'NeedleDoom',
    name: 'Needle Doom',
    expansion: 'NA',
    tier: 2,
    type: 'Minion',
    hp: 12,
    effect: `
      <p>
        <b>Persistent:</b> Unleash. Gravehold suffers 2 damage.	
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Marked',
    name: 'Marked',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice. The player with the lowest life suffers 3 damage.	
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Eradicate',
    name: 'Eradicate',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice. Any player discards their three most expensive cards in hand.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'FlashOfDecay',
    name: 'Flash Of Decay',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash twice. The player with the most expensive prepped spell destroys it. If that spell costs 4 <span class="aether">&AElig;</span> or less, or no spell was destroyed, Unleash.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Terrify',
    name: 'Terrify',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Unleash three times. Gravehold suffers 2 damage. Any player destroys two cards in hand.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'RayOfDesolation',
    name: 'Ray Of Desolation',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>Power 1:</b> Unleash twice. The players collectively destroy the two most expensive prepped spells.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'ThunderousTempest',
    name: 'Thunderous Tempest',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 9 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash. If there are two nemesis turn order cards in the turn order discard pile, any player suffers 8 damage. Otherwise, any player suffers 5 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Sacrifice',
    name: 'Sacrifice',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Unleash four times. 
        <span class="or">OR</span> 
        Gravehold suffers 4 damage and any player suffers 4 damage.	
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Burialskulk',
    name: 'Burialskulk',
    expansion: 'NA',
    tier: 3,
    type: 'Minion',
    hp: 18,
    effect: `
      <p>
        <b>Persistent:</b> Unleash twice.	
      </p>
    `,
    upgraded: true,
  },
]
