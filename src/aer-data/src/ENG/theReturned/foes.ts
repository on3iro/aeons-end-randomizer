import { Foe } from '../../../../aer-types/types'

export const foes: Foe[] = [
  {
    name: 'Jeweled Wrath',
    id: 'JeweledWrath',
    expansion: 'TR',
    charges: 5,
    abilityName: 'Jeweled Rot',
    abilityEffect: 'Any player suffers 2 damage, gains two Cursed Shards from the Curse deck, and places them on top of their deck.',
    deck: [
      {
        name: 'Corrode',
        id: 'Corrode',
        expansion: 'TR',
        type: 'Attack',
        effect: `
		<p>The players collectively discard
		three non-gem cards in hand.
		</p>
		`,
      },
      {
        name: 'Encrust',
        id: 'Encrust',
        expansion: 'TR',
        type: 'Attack',
        effect: `
          <p>
          Jeweled Wrath gains 2 charges.
		  <span class="or">OR</span>
		  Any player places three cards
		  that cost 0 <span class="aether">&AElig;</span> in their discard
		  pile on top of their deck.
          </p>
        `,
      },
      {
        name: 'Rust',
        id: 'Rust',
        expansion: 'TR',
        type: 'Attack',
        effect: `
          <p>
          Jeweled Wrath gains 1 charge.
		  Any player destroys a gem in hand
		  or discard pile that costs 1 <span class="aether">&AElig;</span> or
		  more. If they can't, Jeweled Wrath
		  gains an additional 2 charges.
          </p>
        `,
      },
      {
        name: 'Splinter',
        id: 'Splinter',
        expansion: 'TR',
        type: 'Attack',
        effect: `
          <p>
          Any player discards three cards in hand. A different player gains 1 <span class="aether">&AElig;</span> token.
		  <span class="or">OR</span>
		  Jeweled Wrath gains 4 charges and any player gains 2 charges.
          </p>
        `,
      },
    ],
    extraCards: [
      {
        name: 'Cursed Shard',
        id: 'CursedShardJW',
        expansion: 'TR',
        type: 'Gem',
        cost: 0,
        effect: `
          <p>
           When destoyed, return this
		   card to the Cursed Shard pile.
		   <hr>
		   Gain 1 <span class="aether">&AElig;</span>
		   <span class="or">OR</span>
		   Spend 2<span class="aether">&AElig;</span>. If you do, destroy this.
          </p>
        `,
		keywords:[],
      },
    ],
  },
]
