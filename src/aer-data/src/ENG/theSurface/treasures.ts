import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'BramasFunneledRage',
    name: "Brama's Funneled Rage",
    expansion: 'TS',
    level: 1,
    subtype: 'Spell',
    effect: `
	<p>
		While prepped, when you suffer damage, gain an <span class="aether">&AElig;</span> token.</p>
		<p>While prepped, when a player would suffer damage, you may suffer that damage instead.</p>
        <p><b>Cast:</b> Deal 1 damage.
    </p>
      `,
  },
  {
    id: 'KainsSpiltLight',
    name: "Kain's Spilt Light",
    expansion: 'TS',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
		  <b>Cast:</b> Deal 1 damage.</p>
		  <p>Any player may discard a card in hand. If they do, that player gains an <span class="aether">&AElig;</span> token.
      </p>
      `,
  },
  {
    id: 'GraviMatrix',
    name: 'Gravi-Matrix',
    expansion: 'TS',
    level: 2,
    effect: `
      <p>
		At the start of the game, set this next to any supply pile that costs 7 <span class="aether">&AElig;</span> or more.</p>
		<p>When a player gains a card from that supply pile, each player may destroy a card in their hand.</p>
		<p>When the last card in this supply pile is gained, developed, or destroyed, Gravehold gains 5 life.
      </p>
      `,
  },
  {
    id: 'VigorSiphon',
    name: 'Vigor Siphon',
    expansion: 'TS',
    level: 2,
    effect: `
      <p>
		At the start of the game, set this next to a relic supply pile.</p>
		<p>When a player gains a card from that supply pile, that player gains 1 life.
      </p>
      `,
  },
  {
    id: 'FeedbackField',
    name: 'Feedback Field',
    expansion: 'TS',
    level: 3,
    effect: `
      <p>
		Once per turn, when you gain a charge, any ally gains a charge.
      </p>
      `,
  },
  {
    id: 'ReliquarysMark',
    name: 'Reliquary\'s Mark',
    expansion: 'TS',
    level: 3,
    effect: `
      <p>
		At the start of the game and whenever you gain a card that costs 5 <span class="aether">&AElig;</span> or more, place a power token on this.</p>
		<p>At the start of any player's casting phase, you may remove a power token from this. If you do, spells cast this turn deal 1 additional damage.
      </p>
      `,
  },
]
