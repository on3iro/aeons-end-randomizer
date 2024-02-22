import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'TV',
    name: 'Moineau',
    id: 'Sparrow',
    mageTitle: 'Mage de la Brèche, Soldat',
    ability: `
        <h2>Entrave fantomatique</h2>
        <p class="ability-activation">S'active durant votre phase principale:</p>
        <p>Stabilisez la brèche de n'importe quel joueur. Répétez ceci trois fois.
        <span class="or">OU</span>
        Un allié n'ayant aucune brèche fermée pioche trois  
        cartes et prépare jusqu'à trois sorts de sa main.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Consumer',
        expansion: 'TV',
        id: 'Smolder',
        cost: 0,
        effect: `
            <p>
              Ce sort peut être préparé sur une brèche fermée 
			  sans qu'il faille la stabiliser.<br/>
              <b>Lancer:</b> Infligez 1 dégât.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'TV',
    name: 'Xaxos',
    id: 'XaxosTV',
    mageTitle: 'Héraut du Vide',
    ability: `
        <h2>Halo prétorien</h2>
        <p class="ability-activation">S'active durant votre phase principale:</p>
        <p>Un allié gagne 1 charge et défausse au hasard une carte de sa main. 
        Stabilisez une de vos brèches. Gagnez 1 Vie. Détruisez une carte de 
        votre main ou de votre défausse.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Bûcher',
        expansion: 'TV',
        id: 'Pyre',
        cost: 0,
        effect: `
            <p>
              <b>Lancer:</b> Infligez 1 dégât.<br/>
              Un allié peut défausser une carte de sa main. S'il le fait, 
              infligez 2 dégâts supplémentaires.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
