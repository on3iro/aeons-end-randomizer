import { UpgradedBasicNemesisCard } from 'aer-types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'Rupture',
    name: 'Rupture',
    expansion: 'TA',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
        Unleash. Any player suffers 4 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'FurrowOfDestruction',
    name: 'Furrow Of Destruction',
    expansion: 'TA',
    tier: 1,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. Gravehold suffers 3 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Mangle',
    name: 'Mangle',
    expansion: 'TA',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        The player with the most charges loses 3 charges and suffers 3 damage. A different player discards three cards in hand.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'HowlingSlayer',
    name: 'Howling Slayer',
    expansion: 'TA',
    tier: 2,
    type: 'Minion',
    hp: 14,
    effect: `
      <p>
        <b>Persistent:</b> Any player suffers 2 damage. Any player discards a card in hand.
      </p>
    `,
    upgraded: true,
  },
]
