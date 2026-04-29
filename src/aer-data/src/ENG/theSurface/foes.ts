import { Foe } from '../../../../aer-types/types'

export const foes: Foe[] = [
  {
    name: 'The Mask',
    id: 'TheMask',
    expansion: 'TS',
    charges: 5,
	rules: 'Whenever a player would gain a second nemesis token (third in solo), they suffer 10 damage instead.'
    abilityName: 'Pay Your Due',
    abilityEffect: '<p>Any player loses a nemesis token and deals 4 damage to the nemesis. Draw and resolve the top card of the nemesis deck.</p><span class="or">OR</span><p>Any player gains a nemesis token. Repeat this.</p>',
    deck: [
      {
        name: 'Corruption\'s Kiss',
        id: 'CorruptionsKiss',
        expansion: 'TS',
        type: 'Attack',
        effect: `
		<p>Any player gains a nemesis token and gains a card from the supply that costs 4 <span class="aether">&AElig;</span> or less. The Mask gains 1 charge.</p>
		<span class="or">OR</span>
		<p>Any player loses a nemesis token. That player destroys a card in hand that costs 5 <span class="aether">&AElig;</span> or more or suffers 5 damage.
		</p>
		`,
      },
      {
        name: 'Devil\'s Bargain',
        id: 'DevilsBargain',
        expansion: 'TS',
        type: 'Attack',
        effect: `
          <p>
          Any player gains a nemesis token and 2 charges. The Mask gains 1 charge.
		  <span class="or">OR</span>
		  Any player loses a nemesis token. That player loses 4 charges or suffers 5 damage.
          </p>
        `,
      },
      {
        name: 'Pay the Piper',
        id: 'PayThePiper',
        expansion: 'TS',
        type: 'Attack',
        effect: `
          <p>
          The Mask gains 2 charges.
          </p>
        `,
      },
      {
        name: 'Poisonous Promises',
        id: 'PoisonousPromises',
        expansion: 'TS',
        type: 'Attack',
        effect: `
          <p>
          Any player gains a nemesis token and 1 <span class="aether">&AElig;</span> token.
		  <span class="or">OR</span>
		  Any player loses a nemesis token and discards four cards in hand. The Mask gains 1 charge.
          </p>
        `,
      },
    ],
  },
]
