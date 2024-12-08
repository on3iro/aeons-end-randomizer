import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'LillysVoidlingLure',
    name: "Lilly's Voidling Lure",
    expansion: 'TC',
    level: 1,
    subtype: 'Spell',
    effect: `
	<p>
       <b>Cast:</b> Deal 1 damage.<br/>
      If a minion from the nemesis deck
	  is defeated this way, any ally draws
	  a card and gains an <span class="aether">&AElig;</span> token.
      </p>
      `,
  },
  {
    id: 'WillowsInspiration',
    name: "Willow's Inspiration",
    expansion: 'TC',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
	  <span class="or">OR</span><br/>
      Spend 3 <span class="aether">&AElig;</span>. Destroy a card in your hand
	  or discard pile and gain a card of the same type from the supply that costs up to
	  3 <span class="aether">&AElig;</span> more than the destroyed card.
      </p>
      `,
  },
  {
    id: 'OnasSustainedBeacon',
    name: "Ona's Sustained Beacon",
    expansion: 'TC',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
	  When you prep this, if there is a
	  spell that costs 5 <span class="aether">&AElig;</span> or more prepped
	  to an adjacent breach, gain 2 <span class="aether">&AElig;</span>.<br/>
      <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
  {
    id: 'BottledSpine',
    name: 'Bottled Spine',
    expansion: 'TC',
    level: 2,
    effect: `
      <p>
      At the start of the game, set
	  this next to a supply pile
	  that costs 6 <span class="aether">&AElig;</span> or more.
	  <br/>
	  When a player gains a card from this supply pile, they may destroy a card in hand or discard pile.
      </p>
      `,
  },
  {
    id: 'MoltenDiamond',
    name: 'Molten Diamond',
    expansion: 'TC',
    level: 2,
    effect: `
      <p>
      One per turn, during any player's
	  main phase, that player may spend 3 <span class="aether">&AElig;</span>
	  to place an elemental token on any enemy.
      </p>
      `,
  },
  {
    id: 'BrightflameFurnace',
    name: 'Brightflame Furnace',
    expansion: 'TC',
    level: 3,
    effect: `
      <p>
      Sparks you cast deal an
	  additional 1 damage.
      </p>
      `,
  },
  {
    id: 'MagmaHeart',
    name: 'Magma Heart',
    expansion: 'TC',
    level: 3,
    effect: `
      <p>
     When you gain a spell that costs 4 <span class="aether">&AElig;</span>
	 or more, place an elemental token on any enemy.
      </p>
      `,
  },
]