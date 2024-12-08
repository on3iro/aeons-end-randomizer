import { Mage } from '../../../../aer-types/types'
 
export const mages: Mage[] = [
 {
    expansion: 'AB',
    name: 'Xaxos',
    id: 'XaxosAB',
    mageTitle: 'The Fledgeling',
    ability: `
        <h2>Leech Power</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Gain 3 <span class="aether">&AElig;</span>. You may place any cards
		you gain this turn into your hand.<br/>
		You may place a nemesis turn order card in the
		turn order discard pile on the bottom of the turn
		order deck. If you do, gain an additional 7 <span class="aether">&AElig;</span>.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Siphonite',
        expansion: 'AB',
        id: 'Siphonite',
        cost: 0,
        effect: `<p>
        Gain 1 <span class="aether">&AElig;</span>. You may have an enemy gain
		1 life. If you do, gain an additional 1 <span class="aether">&AElig;</span>.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 9,
  },
 ]