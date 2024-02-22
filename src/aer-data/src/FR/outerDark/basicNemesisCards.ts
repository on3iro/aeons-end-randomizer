import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'LabyrinthWisp-OD',
    expansion: 'OD',
    tier: 1,
    type: 'Minion',
    name: 'Souffle du Labyrinthe',
    hp: 5,
    effect: `
      <p>
        <b>Durable:</b> Un joueur défausse un sort préparé.
        <span class="or">OU</span>
        Un joueur perd 1 charge.
      </p>
    `,
  },
  {
    id: 'Assail-OD',
    expansion: 'OD',
    tier: 2,
    type: 'Attack',
    name: 'Agression',
    effect: `
      <p>
        Déchaîné, deux fois. Le joueur ayant le sort préparé le plus cher place ce sort au-dessus de sa pioche.
      </p>
    `,
  },
  {
    id: 'DireAbbatoir-OD',
    expansion: 'OD',
    tier: 3,
    type: 'Power',
    name: 'Sinistre Abattoir',
    power: 2,
    effect: `
      <p>
        <b>Pour défausser:</b> Dépensez 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Puissance 2:</b> Le joueur ayant le plus de points de vie subit autant de 
		dégats que son nombre de points de vie actuelle.
      </p>
    `,
  },
]
