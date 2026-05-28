import { Mage } from '../../../../aer-types/types'
 
export const mages: Mage[] = [
 {
    expansion: 'TS',
    name: 'Inco',
    id: 'IncoTS',
    mageTitle: 'The Outsider',
    abilityName: `Void Touch`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Cast any player's prepped spell. Two different players reveal their decks. They each place up to two Firethorns from their deck and discard pile into their hand. They return their decks in the same order. </p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Genesis Emerald',
        expansion: 'TS',
        id: 'GenesisEmerald',
        cost: 0,
        effect: `
		<p>
			Gain 1 <span class="aether">&AElig;</span>.
			<span class="or">OR</span>
			Discard two cards in hand. If you do, gain the top card of the Firethorn deck. Place that card on top of any player's discard pile. 
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
   {
    expansion: 'TS',
    name: 'Qu',
    id: 'QuTS',
    mageTitle: 'The Changeling',
    abilityName: `Twinned Retrieval`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>
			If you are in Giver Form, allies collectively draw three cards. Flip over the Form card.
			<p>Otherwise, cast any ally's prepped spell and place it into your hand. Flip over the Form card.
		</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Molded Valite',
        expansion: 'TS',
        id: 'MoldedValite',
        cost: 0,
        effect: `
		<p>
			Gain 1 <span class="aether">&AElig;</span>.</p>
			<p>You may flip over Qu's Form card.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
 ]
 