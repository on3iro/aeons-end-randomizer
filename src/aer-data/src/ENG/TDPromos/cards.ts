import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TDPromo',
    name: 'Glutton\'s Jewel',
    id: 'GluttonsJewel',
    cost: 6,
    effect: `
      <p>
	  Gain 3 <span class="aether">&AElig;</span>.<br/>
	  If your deck and discard pile contain 15 or
	  more cards combined, place any number
	  of cards from a supply pile other than
	  Glutton's Jewel on top of your deck.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'TDPromo',
    name: 'Rebound Spike',
    id: 'ReboundSpike',
    cost: 6,
    effect: `
      <p>
      Set aside two gems or relics played
	  this turn, excluding this. At the
	  end of your turn after drawing to
	  your maximum hand size, place the
	  set-aside cards into your hand.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TDPromo',
    name: 'Unveil Potential',
    id: 'UnveilPotential',
    cost: 7,
	developCost: 4,
    effect: `
      <p>
	  While prepped, your other spells
	  gain the text "<b>OR Cast:</b> Deal
	  damage equal to this card's cost."
      <b>Cast:</b>Deal 5 damage.
      </p>
      `,
    keywords: ['develop'],
  },
]
