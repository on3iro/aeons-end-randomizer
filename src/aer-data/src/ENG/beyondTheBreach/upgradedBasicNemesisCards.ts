import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'Butcher',
    name: 'Butcher',
    expansion: 'BTB',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
		Unleash twice.<br/>
		Set this card in front of any player.<br/>
		If that player becomes exhausted, Gravehold suffers 7 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'MorbidDeed',
    name: 'Morbid Deed',
    expansion: 'BTB',
    tier: 1,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash. Any player discards two cards in hand, gains two trinkets, and suffers 2 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'RubbleScuttler',
    name: 'Rubble Scuttler',
    expansion: 'BTB',
    tier: 1,
    type: 'Minion',
	hp: 13,
    effect: `
      <p>When a player deals damage to this, that player deals 1 additional damage.</p>
	  <p><b>Persistent:</b> Unleash.</p>
    `,
    upgraded: true,
  },
  {
    id: 'Doomscape',
    name: 'Doomscape',
    expansion: 'BTB',
    tier: 2,
    type: 'Power',
    power: 4,
    effect: `
      <p>
        <b>To Discard:</b> Spend 8 <span class="aether">&AElig;</span>.
      </p>
      <p>
        <b>Power 4:</b> The player with the most life suffers damage equal to their life.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'GrislyVerdict',
    name: 'Grisly Verdict',
    expansion: 'BTB',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>Unleash twice.</p>
      <p>Gravehold suffers 2 damage.</p>
	  <p>Any player gains three trinkets, and places them on top of their deck.</p>
    `,
    upgraded: true,
  },
  {
    id: 'MutatedCauterizer',
    name: 'Mutated Cauterizer',
    expansion: 'BTB',
    tier: 2,
    type: 'Minion',
    hp: 11,
    effect: `
      <p>
        Spells that cost 0 <span class="aether">&AElig;</span> deal no damage to this minion.
      </p>
      <p>
        <b>Persistent:</b> Any player suffers 3 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Paranoia',
    name: 'Paranoia',
    expansion: 'BTB',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 8 <span class="aether">&AElig;</span>.
      </p>
      <p>
        <b>Power 2:</b> If any player has a prepped spell that costs 5 <span class="aether">&AElig;</span> or more, Unleash three times. Otherwise, Gravehold suffers 7 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Unravel-BTB',
    name: "Unravel",
    expansion: 'BTB',
    tier: 2,
    type: 'Attack',
    effect: `
		<p>Unleash twice.</p>
		<p>Gravehold suffers 2 damage.</p>
		<p>Any player discards their most expensive card in hand.</p>
    `,
    upgraded: true,
  },
  {
    id: 'BalefulVisions',
    name: 'Baleful Visions',
    expansion: 'BTB',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
       Gravehold suffers 10 damage.
        <span class="or">OR</span>
        The player with the most cards that cost 2 <span class="aether">&AElig;</span> or more in hand suffers 3 damage and destroys all of their cards in hand.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Dematerialize',
    name: 'Dematerialize',
    expansion: 'BTB',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>The players collectively destroy three cards in hand that cost 2 Aether.png or more.</p>
	  <p>Players collectively suffer 5 damage.</p>
    `,
    upgraded: true,
  },
  {
    id: 'ExtraplanarTomb',
    name: "Extraplanar Tomb",
    expansion: 'BTB',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
		<p>When a power token is removed from this, any player discards two cards in hand and gains a trinket.</p>
		<p><b>To Discard:</b> Spend 9 <span class="aether">&AElig;</span>.</p>
        <p><b>Power 2:</b> Unleash three times.</p>
    `,
    upgraded: true,
  },
  {
    id: 'FracturedOne',
    name: 'Fractured One',
    expansion: 'BTB',
    tier: 3,
    type: 'Minion',
    hp: 15,
    effect: `
      <p>
        <b>Persistent:</b> Unleash twice. Any player discards two cards and places two cards that cost 0 <span class="aether">&AElig;</span> in their discard pile on top of their deck.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Nullification',
    name: 'Nullification',
    expansion: 'BTB',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash twice. For each supply pile with five or more cards, Gravehold suffers 4 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Sacrifice-BTB',
    name: 'Sacrifice',
    expansion: 'BTB',
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
    id: 'UnblinkingWrath',
    name: 'Unblinking Wrath',
    expansion: 'BTB',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        <b>Power 1:</b> Unleash twice. The player with the most expensive spell destroys it and suffers 2 damage.
      </p>
    `,
    upgraded: true,
  },
]
