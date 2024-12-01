import { Mage } from '../../../../aer-types/types'
 
export const mages: Mage[] = [
 {
    expansion: 'TC',
    name: 'Quilius',
    id: 'QuiliusTC',
    mageTitle: 'The Initiate',
    ability: `
        <h2>Acquire Target</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Place the top card of the Challenger deck on top of
		the nemesis deck. Then, resolve any effects added
		to your ability by minions in your ability zone.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Backstab',
        expansion: 'TC',
        id: 'Backstab',
        cost: 0,
        effect: `<p>
        <b>Cast:</b> Deal 2 damage to a minion.<br/>
		<span class="or">OR</span><br/>
		<b>Cast:</b> Deal 1 damage.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
   {
    expansion: 'TC',
    name: 'Alcheia',
    id: 'Alcheia',
    mageTitle: 'The Stonecarver',
    ability: `
        <h2>Restabilize</h2>
        <p class="ability-activation">Activate during any ally's casting phase:</p>
        <p>Destroy up to three cards in hand. Draw
		a card for each card destroyed this way.<br/>
		<span class="or">OR</span><br/>
		When a player casts a spell this turn, it
		deals 1 additional damage for each card
		that costs 1 <span class="aether">&AElig;</span> or more in your hand.
		</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Geode',
        expansion: 'TC',
        id: 'Geode',
        cost: 0,
        effect: `<p>
       Gain 1 <span class="aether">&AElig;</span>.<br/>
	   <span class="or">OR</span><br/>
	   Draw a facet from the facet deck and place it into your hand.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
 ]