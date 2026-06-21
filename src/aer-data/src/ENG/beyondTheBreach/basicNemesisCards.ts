import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'FerrousBrute',
    expansion: 'BTB',
    tier: 1,
    type: 'Minion',
    name: 'Ferrous Brute',
    hp: 4,
    effect: `
      <p>
		When a player deals damage to this minion, reduce that damage by 1, to a minimum of 1.</p>
        <p><b>Persistent:</b> Any player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'GlintingStinger',
    expansion:'BTB',
    tier: 1,
    type: 'Minion',
    name: 'Glinting Stinger',
    hp: 6,
    effect: `
      <p>
        <b>Persistent:</b> If this has two nemesis tokens, any player destroys a breach and this minion loses two nemesis tokens. Otherwise, this gains one nemesis token.
      </p>
    `,
  },
  {
    id: 'VaporWraith',
    expansion:'BTB',
    tier: 1,
    type: 'Minion',
    name: 'Vapor Wraith',
    hp: 4,
    effect: `
      <p>
        When a player deals damage to this minion, that player places a card in hand on top of their deck.</p>
		<p><b>Persistent:</b> Unleash.
      </p>
    `,
  },
  {
    id: 'DarkConclusion',
    expansion:'BTB',
    tier: 1,
    type: 'Power',
    name: 'Dark Conclusion',
    power: 3,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.</p>
        <p><b>Power 3:</b> Unleash twice. Set this next to the turn order deck.<br/>The next time the turn order deck is empty, set aside the nemesis turn order cards. Shuffle the rest of the turn order cards facedown. Then, place the nemesis turn order cards on top of the turn order deck. Finally, discard this.
      </p>
    `,
  },
  {
    id: 'DismalOutcome',
    expansion:'BTB',
    tier: 1,
    type: 'Power',
    name: 'Dismal Outcome',
	power: 2,
    effect: `
      <p>
		<b>To Discard:</b> Spend 5 <span class="aether">&AElig;</span>.</p>
		<p><b>Power 2:</b> Unleash. Any player or Gravehold suffers 5 damage.
	  </p>
    `,
  },
  {
    id: 'RisingTwilight',
    expansion:'BTB',
    tier: 1,
    type: 'Power',
    name: 'Rising Twilight',
	power: 3,
    effect: `
      <p>
        <b>Power 3:</b> Unleash. Any player gains two trinkets and suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'Escalate',
    expansion:'BTB',
    tier: 1,
    type: 'Attack',
    name: 'Escalate',
    effect: `
      <p>
        Unleash twice. Any player gains a charge.
      </p>
    `,
  },
  {
    id: 'TearApart',
    expansion:'BTB',
    tier: 1,
    type: 'Attack',
    name: 'Tear Apart',
    effect: `
      <p>
        Gravehold suffers 5 damage.</p>
		<span class="or">OR</span>
		The players collectively discard five cards.
      </p>
    `,
  },
  {
    id: 'Persist',
    expansion:'BTB',
    tier: 2,
    type: 'Power',
    name: 'Persist',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.</p>
        <p><b>Power 2:</b> Place a nemesis turn order card in the turn order discard pile on top of the turn order deck.</p>
		<span class="or">OR</span>
		<p>Unleash twice. Any player loses 3 charges.
      </p>
    `,
  },
  {
    id: 'DesperateHour',
    expansion:'BTB',
    tier: 2,
    type: 'Attack',
    name: 'Desperate Hour',
    effect: `
      <p>
        Unleash twice.<br/>Any player discards a card in hand. If the discarded cost costs 0 <span class="aether">&AElig;</span>, that player suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'Fragment-BTB',
    expansion:'BTB',
    tier: 2,
    type: 'Attack',
    name: 'Fragment',
    effect: `
      <p>
        Any player gains a trinket and suffers 1 damage. Repeat this twice.
      </p>
    `,
  },
  {
    id: 'ViolentDetonation',
    expansion:'BTB',
    tier: 2,
    type: 'Power',
    name: 'Violent Detonation',
    power: 2,
    effect: `
      <p><b>To Discard:</b>  Destroy a prepped spell that costs 6 <span class="aether">&AElig;</span> or more.</p>
      <p><b>Power 2:</b> Unleash twice. Gravehold suffers 3 damage.</p>
    `,
  },
  {
    id: 'Flailer',
    expansion:'BTB',
    tier: 2,
    type: 'Minion',
    name: 'Flailer',
    hp: 10,
    effect: `
      <p>
        <b>Persistent:</b> Unleash. Any player places a card in hand on top of an ally's deck.
      </p>
    `,
  },
  {
    id: 'Suffering',
    expansion:'BTB',
    tier: 2,
    type: 'Attack',
    name: 'Suffering',
    effect: `
      <p>Unleash.<br/>Gravehold suffers 3 damage.<br/>Any player gains two trinkets and places them on top of their deck.</p>
    `,
  },
  {
    id: 'PortalFright',
    expansion:'BTB',
    tier: 2,
    type: 'Minion',
    name: 'Portal Fright',
    hp: 10,
    effect: `
      <p>
        <b>Persistent:</b> Any player suffers 2 damage and gains a trinket.
      </p>
    `,
  },
  {
    id: 'Bury',
    expansion:'BTB',
    tier: 3,
    type: 'Attack',
    name: 'Bury',
    effect: `
      <p>Any player suffers 4 damage.<br/>That player gains five trinkets and places them on top of their deck.</p>
    `,
  },
  {
    id: 'Cosmodium',
    expansion:'BTB',
    tier: 3,
    type: 'Minion',
    name: 'Cosmodium',
	hp: 14,
    effect: `
      <p>
        <b>Persistent:</b> Any player suffers 2 damage and discards two cards in hand. Then, they gain two trinkets and place them on top of their deck.
      </p>
    `,
  },
  {
    id: 'DevouringWave',
    expansion:'BTB',
    tier: 3,
    type: 'Power',
    name: 'Devouring Wave',
	power: 1,
    effect: `
      <p>
        <b>Power 1:<b> Unleash three times.<br/>The players collectively discard two cards in hand that cost 2 <span class="aether">&AElig;</span> or more. For each card discarded this way, that player gains a trinket and places it into their hand.
      </p>
    `,
  },
  {
    id: 'ElsewhereInvocation',
    expansion:'BTB',
    tier: 3,
    type: 'Power',
    name: 'Elsewhere Invocation',
	power: 1,
    effect: `
      <p>
        <b>Power 1:<b> If there are two or fewer minions in the nemesis discard pile, Unleash three times.<br/>Otherwise, place three minions from the nemesis discard pile into play. Do not resolve their PERSISTENT: effects this turn.
      </p>
    `,
  },
  {
    id: 'Masticate',
    expansion:'BTB',
    tier: 3,
    type: 'Attack',
    name: 'Masticate',
    effect: `
      <p>
        Any player places their hand on top of their deck, shuffles it, draws five cards, and then destroys the top three cards of their deck.</p>
		<p>Then, Unleash twice.</p>
		<p>Gravehold suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'Obliterate',
    expansion:'BTB',
    tier: 3,
    type: 'Attack',
    name: 'Obliterate',
    effect: `
      <p>
        Unleash twice.<br/>The player with the most opened breaches destroys four cards in hand or suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'Punish',
    expansion:'BTB',
    tier: 3,
    type: 'Attack',
    name: 'Punish',
    effect: `
      <p>
        Unleash four times.</p>
		<span class="or">OR</span>
		<p>Resolve the bottommost attack in the nemesis discard pile twice.
      </p>
    `,
  },
]
