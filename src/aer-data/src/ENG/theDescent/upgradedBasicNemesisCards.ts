import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'CrumblingEarth',
    name: 'Crumbling Earth',
    expansion: 'ATD',
    tier: 1,
    type: 'Power',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.
      </p>
      <p>
        <b>Power 3:</b> Unleash twice. Any player discards a card in hand that
        costs 1 <span class="aether">&AElig;</span> or more and suffers 1 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Portalsworn',
    name: 'Portalsworn',
    expansion: 'ATD',
    tier: 1,
    type: 'Minion',
    hp: 5,
    effect: `
      <p>
        <b>Persistent:</b> Gravehold suffers 3 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Surge',
    name: 'Surge',
    expansion: 'ATD',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>Unleash twice.</p>
      <p>Any player loses 1 charge.</p>
    `,
    upgraded: true,
  },
  {
    id: 'AcidBreath',
    name: 'Acid Breath',
    expansion: 'ATD',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.
      </p>
      <p>
        <b>Power 2:</b> If any player has a prepped spell that costs
        5 <span class="aether">&AElig;</span> or more, Unleash three times.
        Otherwise, Gravehold suffers 7 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Bleed',
    name: 'Bleed',
    expansion: 'ATD',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>Unleash twice.</p>
      <p>The players collectively discard three prepped spells.</p>
    `,
    upgraded: true,
  },
  {
    id: 'DescendingSkies',
    name: 'Descending Skies',
    expansion: 'ATD',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 8 <span class="aether">&AElig;</span>.
      </p>
      <p>
        <b>Power 2:</b> Unleash twice. Any player suffers 2 damage.
        A different player discards their two most expensive cards in hand.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'MoondrunkMongrel',
    name: 'Moondrunk Mongrel',
    expansion: 'ATD',
    tier: 2,
    type: 'Minion',
    shields: 2,
    hp: 6,
    effect: `
      <p>
        <b>Persistent:</b> Unleash twice.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'WintersBite',
    name: "Winter's Bite",
    expansion: 'ATD',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Unleash. Discard the top card of the nemesis deck.
        <span class="or">OR</span>
        The player with the lowest life suffers 5 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Assassinate',
    name: 'Assassinate',
    expansion: 'ATD',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        The player with the most charges loses all their charges and suffers 5 damage.
        <span class="or">OR</span>
        Unleash. Shuffle a nemesis turn order card in the turn order discard pile into the turn order deck.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'BroodqueenDrillbeak',
    name: 'Broodqueen Drillbeak',
    expansion: 'ATD',
    tier: 3,
    type: 'Minion',
    shields: 2,
    hp: 7,
    effect: `
      <p>
        When a player removes a shield from this minion, that player suffers 2 damage.
      </p>
      <p>
        <b>Persistent:</b> Unleash. Gravehold suffers 3 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'EntropysKiss',
    name: "Entropy's Kiss",
    expansion: 'ATD',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash. The player with the most expensive gem in
        hand destroys all gems in hand. A different player suffers 3 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'LightningSurge',
    name: 'Lightning Surge',
    expansion: 'ATD',
    tier: 3,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>Power 1:</b> Unleash twice. The player with the most charges suffers 2 damage for each charge they have.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'MagicSiphon',
    name: 'Magic Siphon',
    expansion: 'ATD',
    tier: 3,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>Power 1:</b> Unleash. The player with the most expensive prepped spell destroys it.
        Then, any player destroys an opened breach.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'RustAway',
    name: 'Rust Away',
    expansion: 'ATD',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Gravehold suffers 7 damage.
        <span class="or">OR</span>
        The player with the most cards that cost 2 <span class="aether">&AElig;</span>
        or more in hand destroys all their cards in hand.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Whirlwind',
    name: 'Whirlwind',
    expansion: 'ATD',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Unleash four times.
        <span class="or">OR</span>
        Any player destroys three cards in hand and suffers 4 damage.
      </p>
    `,
    upgraded: true,
  },
]
