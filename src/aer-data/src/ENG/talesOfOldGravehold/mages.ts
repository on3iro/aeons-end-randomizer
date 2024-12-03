import { Mage } from '../../../../aer-types/types'
 
export const mages: Mage[] = [
 {
    expansion: 'TOG',
    name: 'Kain',
    id: 'Kain',
    mageTitle: 'The Dancer',
    ability: `
        <h2>Voild Waltz</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>If Gravehold has 15 life or more, Gravehold
		suffers 2 damage and any player gains 6 <span class="aether">&AElig;</span>
		tokens. Otherwise, Gravehold gains 5 life.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Spilt Light',
        expansion: 'TOG',
        id: 'SpiltLight',
        cost: 0,
        effect: `<p>
        <b>Cast:</b> Deal 1 damage.
		Any player may discard a
		card in hand. If they do,
		that player gains an <span class="aether">&AElig;</span> token.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 2,
  },
 ]