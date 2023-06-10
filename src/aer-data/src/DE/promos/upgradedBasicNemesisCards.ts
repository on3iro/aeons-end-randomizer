import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'Writhe',
    name: 'Writhe',
    expansion: 'promos',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice.<br />
        <br />
        Any player suffers 1 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'BubblingRuin',
    name: 'Bubbling Ruin',
    expansion: 'promos',
    tier: 1,
    type: 'Power',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 3:</b> Unleash. Any player discards three cards in hand. 
        Gravehold suffers 2 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'SweepingBlackness',
    name: 'Sweeping Blackness',
    expansion: 'promos',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Gravehold suffers 4 damage.<br />
        <br />
        Any player loses 2 charges and discards two cards in hand.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'TwistingFlesh',
    name: 'Twisting Flesh',
    expansion: 'promos',
    tier: 2,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 1:</b> Unleash twice. Any player suffers 3 damage. That player gains 
        a Cursed Manacles from the Curse deck and places it on top of their deck.
      </p>
    `,
    upgraded: true,
  },
]
