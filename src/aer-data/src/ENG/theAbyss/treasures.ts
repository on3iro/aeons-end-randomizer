import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'KavocsDarkFlame',
    name: "Kavoc's Dark Flame",
    expansion: 'AB',
    level: 1,
    subtype: 'Spell',
    effect: `
	<p>
       <b>Cast:</b> Deal 1 damage. You may
	   suffer 1 damage. If you do, deal
	   an additional 2 damage.
      </p>
      `,
  },
  {
    id: 'KavocsSoulstone',
    name: "Kavoc's Soulstone",
    expansion: 'AB',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>. You may discard a prepped
	  spell to gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'KavocsForgottenRitual',
    name: "Kavoc's Forgotten Ritual",
    expansion: 'AB',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
	  While prepped, once per turn
	  during your main phase, you may
	  suffer 1 damage to gain 1 charge.
      <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
  {
    id: 'Bloodjelly',
    name: 'Bloodjelly',
    expansion: 'AB',
    level: 2,
    effect: `
      <p>
      When the last card in a supply
	  pile is developed, gained, or
	  destroyed, place 2 elemental
	  tokens on any enemy.
      </p>
      `,
  },
  {
    id: 'CrackedFang',
    name: 'Cracked Fang',
    expansion: 'AB',
    level: 2,
    effect: `
      <p>
      At the start of the game, set
	  this next to a supply pile
	  that costs 6 <span class="aether">&AElig;</span> or more.<br/>
	  When a player gains a card
	  from this supply pile,
	  each ally gains a charge.
      </p>
      `,
  },
  {
    id: 'AncientScimitar',
    name: 'Ancient Scimitar',
    expansion: 'AB',
    level: 3,
    effect: `
      <p>
      When you play a relic that
	  costs 6 <span class="aether">&AElig;</span> or more, reveal the
	  top card of your deck. You
	  may destroy that card.
      </p>
      `,
  },
  {
    id: 'ThunderstrikeSigil',
    name: 'Thunderstrike Sigil',
    expansion: 'AB',
    level: 3,
    effect: `
      <p>
     The third spell you cast during
	 your casting phase deals an
	 additional 4 damage.
      </p>
      `,
  },
]