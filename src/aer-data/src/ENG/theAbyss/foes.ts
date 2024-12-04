import { Foe } from '../../../../aer-types/types'

export const foes: Foe[] = [
  {
    name: 'The Traitor',
    id: 'TheTraitor',
    expansion: 'AB',
    charges: 5,
	rules: 'If the nemesis would draw a card and cannot, the players lose the game.'
	abilityName: 'Bloody Conduit',
    abilityEffect: 'If the turn order discard pile contains a nemesis turn order card, shuffle it into the turn order deck. Otherwise, Unleash three times.',
    deck: [
      {
        name: 'Dark Bargain',
        id: 'DarkBargain',
        expansion: 'AB',
        type: 'Attack',
        effect: `
		<p>
		The Traitor gains 1 charge.
		The players may discard the
		top card of the nemesis deck.
		If they don't, The Traitor gains
		an additional 2 charges.
		</p>
		`,
      },
      {
        name: 'Growing Shadow',
        id: 'GrowingShadow',
        expansion: 'AB',
        type: 'Attack',
        effect: `
          <p>
		  Place the bottom card
		  of the nemesis deck on
		  top of the nemesis deck.
		  <span class="or">OR</span>
          The Traitor gains 3 charges and any player gains 1 charge.
          </p>
        `,
      },
      {
        name: 'Twisting Tendrils',
        id: 'TwistingTendrils',
        expansion: 'AB',
        type: 'Attack',
        effect: `
          <p>
          The Traitor gains 2 charges.
          <span class="or">OR</span>
          Unleash.
          </p>
        `,
      },
      {
        name: 'Wraithtouch',
        id: 'Wraithtouch',
        expansion: 'AB',
        type: 'Attack',
        effect: `
          <p>
          A minion in play from the nemesis deck gains 4 life.
		  This may cuase it to have more than its maximum life.
		  <span class="or">OR</span>
		  Unleash.
          </p>
        `,
      },
    ],
]