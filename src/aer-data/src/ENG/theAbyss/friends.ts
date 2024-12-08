import { Friend } from '../../../../aer-types/types'

export const friends: Friend[] = [
  {
    name: 'Xaxos, the Arcane Researcher',
    id: 'XaxosTheArcaneResearcher',
    expansion: 'AB',
    charges: 4,
	rules: 'When a player with a shield token would be dealt damage, prevent that damage and that player discards a shield token.',
    abilityName: 'Experimental Success',
    abilityEffect: `
      Draw two cards from Xaxos's boon deck.
	  Resolve those cards in any order and place
	  them on the bottom of the boon deck.
    `,
    deck: [
      {
        name: 'Inspire',
        id: 'Inspire',
        expansion: 'AB',
        type: 'Attack',
        effect: `
          <p>
          Xaxos, the Arcane Researcher gains 2 charges.
          <span class="or">OR</span>
          Deal 3 damage to a minion.
          </p>
        `,
      },
      {
        name: 'Ritual',
        id: 'Ritual',
        expansion: 'AB',
        type: 'Attack',
        effect: `
          <p>
		  Xaxos, the Arcane Researcher gains 2 charges.
          <span class="or">OR</span>
          Any player returns a card from their discard pile to their hand.
          </p>
        `,
      },
      {
        name: 'Slipstream',
        id: 'Slipstream',
        expansion: 'AB',
        type: 'Attack',
        effect: `
          <p>
          Any player reveals the top three
		  cards of their deck, places one
		  of the revealed cards into their
		  hand, and then places a card
		  in hand on top of their deck.
          </p>
        `,
      },
      {
        name: 'Void Bubble',
        id: 'VoidBubble',
        expansion: 'AB',
        type: 'Attack',
        effect: `
          <p>
          Xaxos, the Arcane Researcher gains
		  1 charge. Reveal the top card of
		  the boon deck. You may place that
		  card on the bottom of that deck.
		  <span class="or">OR</span>
		  The players collectively prep up
		  to two spells in hand to their
		  opened or closed breaches.
          </p>
        `,
      },
    ],
  },
]