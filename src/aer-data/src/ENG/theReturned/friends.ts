import { Friend } from '../../../../aer-types/types'

export const friends: Friend[] = [
  {
    name: 'Grimoire, the Archive',
    id: 'GrimoireTheArchive',
    expansion: 'TR',
    charges: 6,
	rules: 'Players can develop the top card of the Incantation deck. The Incantation deck is not the supply. Players cannot gain cards from the Incantation deck directly.',
    abilityName: 'Flame Up',
    abilityEffect: `
      Any player develops an Incantation. Then, any player
	  returns a spell in their discard pile to hand. Then, any
	  player preps a spell in hand to one of their opened or closed breaches.
    `,
    deck: [
      {
        name: 'Ancient Knowledge',
        id: 'AncientKnowledge',
        expansion: 'TR',
        type: 'Attack',
        effect: `
          <p>
          Grimoire gains 2 charges.
          <span class="or">OR</span>
          Any player loses 1 charge. If
		  they do, they Develop a card
		  in the Develop zone and place
		  that card on top of their deck.
          </p>
        `,
      },
      {
        name: 'Arcane Wisdom',
        id: 'ArcaneWisdom',
        expansion: 'TR',
        type: 'Attack',
        effect: `
          <p>
          Any player draws two cards and discards two cards.
          <span class="or">OR</span>
          Any player gains 2 <span class="aether">&AElig;</span> tokens.
          </p>
        `,
      },
      {
        name: 'Study',
        id: 'Study',
        expansion: 'TR',
        type: 'Attack',
        effect: `
          <p>
          Grimoire gains 2 charges.
          <span class="or">OR</span>
          Any player discards a card in
		  hand. If they do,, that player
		  develops an Incantation.
          </p>
        `,
      },
      {
        name: 'Turn the Page',
        id: 'TurnThePage',
        expansion: 'TR',
        type: 'Attack',
        effect: `
          <p>
          Place the top card of the Incantation deck on the bottom. Grimoire gains 2 charges.
          <span class="or">OR</span>
          Any player casts a spell in hand. Grimoire gains 1 charge.
          </p>
        `,
      },
    ],
  },
]
