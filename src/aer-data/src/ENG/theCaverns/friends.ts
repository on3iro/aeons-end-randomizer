import { Friend } from '../../../../aer-types/types'

export const friends: Friend[] = [
  {
    name: 'Joanna, the Merchant',
    id: 'JoannatheMerchant',
    expansion: 'TC',
    charges: 4,
	rules: 'The Market is a zone above this mat.',
    abilityName: 'Barter',
    abilityEffect: `
      Destroy any number of cards from the Market.
	  Any player gains a card from the supply that
	  costs up to three times the number of cards
	  destroyed this way and places it into their hand.
    `,
    deck: [
      {
        name: 'Collect',
        id: 'Collect',
        expansion: 'TC',
        type: 'Attack',
        effect: `
          <p>
          Any player draws two cards and then discards two cards in hand.
          <span class="or">OR</span>
          Any player may place up to two gems from their hand into the Market.
          </p>
        `,
      },
      {
        name: 'Exchange',
        id: 'Exchange',
        expansion: 'TC',
        type: 'Attack',
        effect: `
          <p>
          Joanna, the Merchant gains
		  1 charge. Any player may
		  lose 1 charge. If they do,
		  Joanna the Merchant gains
		  an additional 2 charges.
          <span class="or">OR</span>
          Any player may place a gem in hand or discard pile into the Market.
          </p>
        `,
      },
      {
        name: 'Inspect Wares',
        id: 'InspectWares',
        expansion: 'TC',
        type: 'Attack',
        effect: `
          <p>
          Joanna, the Merchant
		  gains 2 charges.
          <span class="or">OR</span>
          Any player may place a card
		  from their hand or discard
		  pile into the Market.
          </p>
        `,
      },
      {
        name: 'Salvaged Baubles',
        id: 'SalvagedBaubles',
        expansion: 'TC',
        type: 'Attack',
        effect: `
          <p>
          Joanna, the Merchant gains 1 charge.
		  
		  Any player may place a spell from their hand or discard pile into the Market.
          </p>
        `,
      },
    ],
  },
]