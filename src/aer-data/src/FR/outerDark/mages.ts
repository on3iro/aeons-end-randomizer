import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'OD',
    name: 'Indira',
    id: 'Indira',
    mageTitle: 'Apprentie de la Brèche',
    abilityName: `Ruse du pyromancien`,
    abilityActivation: `S'active durant votre phase principale:`,
    abilityEffect: `
        <p>Lancez autant de sorts que vous le voulez de votre main. Chacun de 
		ces sorts inflige 1 de dégât supplémentaire.</p>
        <p>Vous pouvez détuire une carte de votre défausse.</p>
      `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Twin Opal',
        expansion: 'OD',
        id: 'Opales Jumelles',
        cost: 0,
        effect: `
            <p>
              Gagnez 1 <span class="aether">&AElig;</span>.<br/>
              Vous pouvez lancer un sort de votre main.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'OD',
    name: 'Vestige',
    id: 'Remnant',
    mageTitle: 'Entité Étherienne',
    abilityName: `Masque éphémère`,
    abilityActivation: `S'active durant votre phase principale:`,
    abilityEffect: `
        <p>Un allié choisit deux cartes de sa défausse qu'il reprend en main.
        <span class="or">OU</span>
        Gravehold gagne 5 Vie.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Éclat de Vide',
        expansion: 'OD',
        id: 'VoidShard',
        cost: 0,
        effect: `
            <p>
              Gagnez 1 <span class="aether">&AElig;</span>.<br/>
              Gagnez 1 <span class="aether">&AElig;</span> supplémentaire 
			  qui ne peut être utilisé que pour stabiliser ou ouvrir une brèche.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
