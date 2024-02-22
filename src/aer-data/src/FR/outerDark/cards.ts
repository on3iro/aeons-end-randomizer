import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Carboniser',
    id: 'Char',
    cost: 8,
    effect: `
        <p>
          <b>Lancer:</b> Infligez 6 dégâts.<br/>
          Si ces dégâts permettent de défausser un serviteur, un joueur gagne 2 points de vie.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'OD',
    name: 'Élément Extraterrestre',
    id: 'AlienElement',
    cost: 4,
    effect: `
        <p>
          Gagnez 1 <span class="aether">&AElig;</span>.<br/>
          Gagnez 1 <span class="aether">&AElig;</span> supplémentaire pour 
		  chacune de vos brèches ayant un sort préparé.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Calciner',
    id: 'Scorch',
    cost: 5,
    effect: `
        <p>
          <b>Lancer:</b> Infligez 4 dégâts.<br/>
          Si ces dégâts permettent de défausser un serviteur du paquet Némésis, 
		  un allié gagne 2 charges.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Pyromancie',
    id: 'Pyromancy',
    cost: 7,
    effect: `
        <b>Lancer:</b> infigez 1 dégât.<br/>
        Les alliés peuvent collectivement défausser jusqu'à deux cartes. 
		Pour chaque carte ainsi défaussée, infligez 3 dégâts supplémentaires.
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Aura de Réaction',
    id: 'FeedbackAura',
    cost: 5,
    effect: `
        <p>
          <b>Lancer:</b> Infligez 3 dégâts.<br/>
          Si vous possédez 4 charges ou plus, infligez 3 dégâts supplémentaires.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Catalyseur',
    id: 'Catalyst',
    cost: 6,
    effect: `
        <p>
          <b>Lancer:</b> Infligez 2 dégâts.<br/>
          Si vous avez 2 points de vie ou moins, infligez 5 dégâts supplémentaires.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'OD',
    name: 'Pierre de Douleur',
    id: 'PainStone',
    cost: 6,
    effect: `
        <p>
          Gagnez 3 <span class="aether">&AElig;</span>.
          <span class="or">OU</span>
          Gagnez 2 <span class="aether">&AElig;</span> et infigez 1 dégât.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'OD',
    name: 'Cube Astral',
    id: 'AstralCube',
    cost: 5,
    effect: `
        <p>
          Reprenez en main une gemme que vous avez jouée ce tour-ci.<br/>
          Révélez la première carte du paquet d'ordre du tour. 
		  S'il sagit d'un joueur, ce dernier gagne un point de vie.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'OD',
    name: 'Sphère des Secrets',
    id: 'RiddleSphere',
    cost: 3,
    effect: `
        <p>
          Gagnez 1 charge.
          <span class="or">OU</span>
          Vous pouvez perdre 2 charges. Si vous le faites, gagnez 5 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Conduit du Néant',
    id: 'NetherConduit',
    cost: 7,
    effect: `
        <b>Lancer:</b> Révélez une carte de votre main coûtant 2 <span class="aether">&AElig;</span> 
        ou plus.<br/>
        Si vous le faites, infligez autant de dégâts que le nombre de cartes manquantes dans la 
		pile de cette carte dans la réserve. Puis un allié peut gagner une carte de cette pile.<br/>
        <span class="hint">(Au départ, les piles de gemmes contiennent 7 cartes, et les piles 
		de sorts et de reliques 5 cartes.)</span>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'OD',
    name: 'Berylite Hantée',
    id: 'HauntedBerylite',
    cost: 3,
    effect: `
        <p>
          Gagnez 2 <span class="aether">&AElig;</span>.
          <span class="or">OU</span>
          Défaussez une carte de votre main. Si vous le faites, gagnez 2 charges.
        </p>
      `,
    keywords: [],
  },
]
