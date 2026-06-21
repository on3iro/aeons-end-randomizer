import { Friend } from '../../../../aer-types/types'

export const friends: Friend[] = [
  {
    name: 'Dai, the Youth',
    id: 'DaiTheYouth',
    expansion: 'BTB',
    charges: 4,
    abilityName: 'Refine',
    abilityEffect: `
      Any player destroys a card in their hand or discard pile. If the card was a relic, that player gains a card from any supply pile that costs up to 3 <span class="aether">&AElig;</span> more than the destroyed card. Otherwise, they gain a card from any supply pile that costs up to 2 <span class="aether">&AElig;</span> more than the destroyed card. Either way, that player places the gained card into their hand.
    `,
    deck: [
      {
        name: 'Buy Time',
        id: 'BuyTime',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Dai gains 1 charge, and any player focuses their closed breach with the lowest focus cost.
          <span class="or">OR</span>
          Any player with no closed breaches gains 2 charges.
          </p>
        `,
      },
      {
        name: 'Prepare for Battle',
        id: 'PrepareForBattle',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Dai gains 2 charges.
          <span class="or">OR</span>
          Any player gains a relic from the supply that costs 4 <span class="aether">&AElig;</span> or less.
          </p>
        `,
      },
      {
        name: 'Quick Recovery',
        id: 'QuickRecovery',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Dai gains 2 charges.
          <span class="or">OR</span>
          Any player discards a relic in hand. If they do,that player gains 5 <span class="aether">&AElig;</span> tokens.
          </p>
        `,
      },
      {
        name: 'Scout Ahead',
        id: 'ScoutAhead',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Any player draws a card.
          <span class="or">OR</span>
          Any player places a relic in their discard pile into their hand.
          </p>
        `,
      },
    ],
  },
  {
    name: 'Lash, the Dreamer',
    id: 'LashTheDreamer',
    expansion: 'BTB',
    charges: 5,
    abilityName: 'Inspiration',
    abilityEffect: `
      <p>Shuffle any player's turn order card in the turn order discard pile into the turn order deck.</p>
	  <span class="or">OR</span>
	  <p>Lash gains 4 charges.</p>
    `,
    deck: [
      {
        name: 'Danger Sense',
        id: 'DangerSense',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Lash gains 1 charge.<br/>Reveal the top card of the nemesis deck.<br/>Reveal the top card of the turn order deck. You may place it on the bottom of the turn order deck.
          </p>
        `,
      },
      {
        name: 'Moment\'s Respite',
        id: 'MomentsRespite',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Any player draws two cards, then places two cards in hand on top of their deck.
          <span class="or">OR</span>
          Any player deals 2 damage.
          </p>
        `,
      },
      {
        name: 'Teamwork',
        id: 'Teamwork',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Lash gains 1 charge.<br/>The players may collectively discard two prepped spells. If they do, Lash gains 2 additional charges.
          </p>
        `,
      },
      {
        name: 'Twist of Fate',
        id: 'TwistOfFate',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Lash gains 2 charges.
          <span class="or">OR</span>
          Any player gains 1 <span class="aether">&AElig;</span> token. Reveal the top card of the turn order deck. You may place it on the bottom of the turn order deck.
          </p>
        `,
      },
    ],
  },
  {
    name: 'Qu, the Rift Walker',
    id: 'QuTheRiftWalker',
    expansion: 'BTB',
    charges: 4,
    abilityName: 'Void Conduction',
    abilityEffect: `
      Any player places the Builder/Destroyer card on their playmat.
    `,
    deck: [
      {
        name: 'Essence Mirror',
        id: 'EssenceMirror',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Qu gains 2 charges.
          <span class="or">OR</span>
		  Any player gains an <span class="aether">&AElig;</span> token. Flip the Builder/Destroyer card.
          </p>
        `,
      },
      {
        name: 'Fate Schism',
        id: 'FateSchism',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Any player draws two cards and then discards two cards in hand.
          <span class="or">OR</span>
          Qu gains 1 charge, and any player preps a spell in hand to an opened or closed breach.
          </p>
        `,
      },
      {
        name: 'Twisted Destiny',
        id: 'TwistedDestiny',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Flip the Builder/Destroyer card, and Qu gains 2 charges.
          <span class="or">OR</span>
          If Qu is in Builder form, any player draws a card. Otherwise, any player returns a spell from their discard pile to their hand.
          </p>
        `,
      },
      {
        name: 'Void Ripple',
        id: 'VoidRipple',
        expansion: 'BTB',
        type: 'Attack',
        effect: `
          <p>
          Any player deals 2 damage.
          <span class="or">OR</span>
          Any player gains a gem from the supply that costs 3 <span class="aether">&AElig;</span> or less.
          </p>
        `,
      },
    ],
  },
]
