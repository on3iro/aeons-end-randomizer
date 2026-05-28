import { Friend } from '../../../../aer-types/types'

export const friends: Friend[] = [
  {
    name: 'Sahala, the Apprentice',
    id: 'SahalaTheApprentice',
    expansion: 'TS',
    charges: 4,
    abilityName: 'Starlight Infusion',
    abilityEffect: `
      <p>Attach a Temporal Claw to any player's breach that doesn't have one.</p>
	  <span class="or">OR</span>
	  <p>Any player casts a spell to a breach with a relic attached to it twice.</p>
    `,
    deck: [
      {
        name: 'Fission',
        id: 'Fission',
        expansion: 'TS',
        type: 'Attack',
        effect: `
          <p>
          Any player draws a card.
          <span class="or">OR</span>
          Any player destroys a Temporal Claw attached to one of their breaches. If they do, that player draws four cards.
          </p>
        `,
      },
      {
        name: 'Galaxy Warp',
        id: 'GalaxyWarp',
        expansion: 'TS',
        type: 'Attack',
        effect: `
          <p>
          Sahala gains 2 charges.
          <span class="or">OR</span>
          Any player places a spell in their discard pile into their hand.
          </p>
        `,
      },
      {
        name: 'Guiding Star',
        id: 'GuidingStar',
        expansion: 'TS',
        type: 'Attack',
        effect: `
          <p>
          Sahala gains 2 charges.
          <span class="or">OR</span>
          Any player gains a spell from the supply that costs 4 <span class="aether">&AElig;</span> or less.
          </p>
        `,
      },
      {
        name: 'Nova Burst',
        id: 'NovaBurst',
        expansion: 'TS',
        type: 'Attack',
        effect: `
          <p>
          Sahala gains 1 charge. Any player may discard a spell in hand
		  that costs 3 <span class="aether">&AElig;</span> or more.
		  If they do, Sahala gains 2 additional charges.
          </p>
        `,
      },
    ],
  },
]
