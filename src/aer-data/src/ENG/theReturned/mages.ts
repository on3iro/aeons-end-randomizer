import { Mage } from '../../../../aer-types/types'
 
export const mages: Mage[] = [
 {
    expansion: 'TR',
    name: 'Yan Magda',
    id: 'YanMagdaTR',
    mageTitle: 'The Leader',
    abilityName: `Void Touch`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Gain a card from any supply pile. Any ally may reset one of their opened III or IV breaches to its starting position. If they do, that ally gains a card from any supply pile and places that card on top of their deck.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Foretold Flame',
        expansion: 'TR',
        id: 'ForetoldFlame',
        cost: 0,
        effect: `<p>
		While this is prepped, when any player opens a breach, deal 2 damage.</p>
        <p><b>Cast:</b> Deal 2 damage to a minion.<br/>
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
   {
    expansion: 'TR',
    name: 'Tressa',
    id: 'Tressa',
    mageTitle: 'The Collector',
    abilityName: `Reconnect Tissue`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Any ally gains 2 charges and may destroy a card in hand or discard pile.</p>
		<p>You may place one of your level 3 treasures in play on the bottom of Tressa's Vault. If you do, place the top card of Tressa's Vault into play. If the new card has an effect that resolves "At the start of your first turn of the game," resolve that effect now.
		</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Transmaterium',
        expansion: 'TR',
        id: 'Transmaterium',
        cost: 0,
        effect: `<p>
			Gain a charge.
		</p>`,
        keywords: [],
      },
	  {
        type: 'Spell',
        name: 'Translocate',
        expansion: 'TR',
        id: 'Translocate',
        cost: 0,
        effect: `<p>
			<b>Cast:</b> Deal 1 damage. You may place the top card of Tressa's Vault on the bottom of that deck.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 9,
  },
 ]
