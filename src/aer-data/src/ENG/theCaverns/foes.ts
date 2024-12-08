import { Foe } from '../../../../aer-types/types'

export const foes: Foe[] = [
  {
    name: 'The Storm',
    id: 'TheStorm',
    expansion: 'TC',
    charges: 4,
    abilityName: 'Paralyzing Bolt',
    abilityEffect: 'The player with the most prepped spells gains a Shock, places it into their hand, and suffers 1 damage for each of their prepped spells.',
    deck: [
      {
        name: 'Echoing Thunder',
        id: 'EchoingThunder',
        expansion: 'TC',
        type: 'Attack',
        effect: `
		<p>The Storm gains 2 charges.
		 <span class="or">OR</span>
		 Any player discards a card in
		 hand that costs 4 <span class="aether">&AElig;</span> or more.
		</p>
		`,
      },
      {
        name: 'Forked Lightning',
        id: 'ForkedLightning',
        expansion: 'TC',
        type: 'Attack',
        effect: `
          <p>
          The Storm gains 2 charges.
          <span class="or">OR</span>
          Any player discards a prepped
		  spell, gains a Shock, and places
		  it on top of their deck.
          </p>
        `,
      },
      {
        name: 'Fractalize',
        id: 'Fractalize',
        expansion: 'TC',
        type: 'Attack',
        effect: `
          <p>
          Any player suffers
		  1 damage, gains a Shock,
		  and places it into their hand.
          <span class="or">OR</span>
          Any player suffers 3 damage
		  and may return a Shock in
		  hand to its supply pile.
          </p>
        `,
      },
      {
        name: 'Spreading Clouds',
        id: 'SpreadingClouds',
        expansion: 'TC',
        type: 'Attack',
        effect: `
          <p>
          Any player gains a Shock.
		  
		  Gravehold suffers 2 damage.
          </p>
        `,
      },
    ],
    extraCards: [
      {
        name: 'Shock',
        id: 'Shock',
        expansion: 'TC',
        type: 'Spell',
        cost: 0,
        effect: `
          <p>
           When destoyed, return this
		   card to the Shock supply pile.
		   <hr>
		   <b>Cast:</b> Deal 1 damage. Discard a
		   card in hand. If that card costs
		   3 <span class="aether">&AElig;</span> or more, destroy this.
          </p>
        `,
		keywords:[],
      },
    ],
  },
]