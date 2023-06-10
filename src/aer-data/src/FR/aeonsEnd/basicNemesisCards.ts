import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'AgonyField-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: "Champs d'agonie",
    power: 2,
    effect: `
      <p>
        <b>Pour Défausser:</b> Détruisez une carte coûtant 2 <span class="aether">&AElig;</span> ou plus.<br />
        <br />
        <b>Puissance 2:</b> Déchaîné. Un joueur défausse trois cartes de sa main puis pioche une carte.
      </p>
    `,
  },
  {
    id: 'BaneSire-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Minion',
    name: 'Seigneur du Fléau',
    hp: 6,
    effect: `
      <p>
        <b>Durable:</b> Déchaîné.
      </p>
    `,
  },
  {
    id: 'BleedStatic-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Saignement Statique',
    power: 3,
    effect: `
      <p>
        <b>Puissance 3:</b> Le joueur ayant le plus grand nombre de sorts préparés subit 2 dégâts par sort préparé.
      </p>
    `,
  },
  {
    id: 'EyeofNothing-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Œil du Néant',
    power: 2,
    effect: `
      <p>
        <b>Pour défausser:</b> Dépensez 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Puissance 2:</b> Déchaîné, deux fois.
      </p>
    `,
  },
  {
    id: 'HazeSpewer-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Minion',
    name: 'Cracheur de Brouillard',
    hp: 5,
    effect: `
      <p>
        <b>Durable:</b> Gravehold subit autant de dégâts que le nombre de points de vie actuel de ce Serviteur. Puis, ce Serviteur subit 1 dégâts.
      </p>
    `,
  },
  {
    id: 'Skewer-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Attack',
    name: 'Embrocher',
    effect: `
      <p>
        Déchaîné. Un joueur subit 3 dégâts puis pioche une carte.
      </p>
    `,
  },
  {
    id: 'Slaughter-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Attack',
    name: 'Massacre',
    effect: `
      <p>
        Déchaîné. Gravehold subit 3 dégâts.
      </p>
    `,
  },
  {
    id: 'WovenSky-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Ciel Tissé',
    power: 2,
    effect: `
      <p>
        <b>Pour défausser:</b> Défaussez trois cartes de votre main.<br />
        <br />
        <b>Puissance 2:</b> Déchaîné. Un joueur subit 4 dégâts.
      </p>
    `,
  },
  {
    id: 'Awaken-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Réveil',
    effect: `
      <p>
        Déchaîné, deux fois. Puis Gravehold subit 3 dégâts.
        <span class="or">OU</span>
        Remettez en jeu le serviteur ayant été défaussé le plus récemment.
      </p>
    `,
  },
  {
    id: 'Cauterizer-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Cautériseur',
    shields: 3,
    hp: 0,
    effect: `
      <p>
        Lorsque ce serviteur subit des dégâts, ils sont réduits à 1.<br />
        <br />
        <b>Durable:</b> Un joueur subit autant de dégâts que la vie actuelle de ce serviteur.
      </p>
    `,
  },
  {
    id: 'Dispel-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Dissiper',
    effect: `
      <p>
        Déchaîné, deux fois. Le joueur ayant le plus grand nombre de sorts préparés défausse son sort préparé le plus cher.
      </p>
    `,
  },
  {
    id: 'Needlemaw-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Mâchoire-Acérée',
    hp: 11,
    effect: `
      <p>
        <b>Durable:</b> Gravehold subit 2 dégâts.
      </p>
    `,
  },
  {
    id: 'LayWaste-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Dévaster',
    effect: `
      <p>
        Déchaîné, deux fois. Un joueur subit 2 dégâts.
      </p>
    `,
  },
  {
    id: 'PulverizingRay-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Power',
    name: 'Rayon Pulvérisant',
    power: 1,
    effect: `
      <p>
        <b>Puissance 1:</b> Gravehold subit 3 dégâts sauf si un joueur défausse une gemme de sa main. Répétez ceci 5 fois de plus.
      </p>
    `,
  },
  {
    id: 'Venomite-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Porte-Venin',
    hp: 9,
    effect: `
      <p>
        <b>Durable:</b> Le joueur ayant le moins de vie subit 2 dégâts.
        <span class="or">OU</span>
        Un joueur défausse un sort préparé coûtant 3 <span class="aether">&AElig;</span> ou plus.
      </p>
    `,
  },
  {
    id: 'DoomAegis-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Power',
    name: 'Égide de la Ruine',
    power: 1,
    effect: `
      <p>
        <b>Pour défausser:</b> Dépensez 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Puissance 1:</b> Le joueur ayant le plus grand nombre de charges subit 4 dégâts et perd toutes ses charges.
      </p>
    `,
  },
  {
    id: 'GatherDarkness-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Rassembler les Ombres',
    effect: `
      <p>
        Un joueur place sa défausse sur sa pioche, mélange le tout, puis détruit les quatre premières cartes de son paquet. Puis, Déchaîné, deux fois.
      </p>
    `,
  },
  {
    id: 'JaggedOne-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Minion',
    name: 'Le Déchiqueté',
    hp: 14,
    effect: `
      <p>
        <b>Durable:</b> Déchaîné, deux fois.
      </p>
    `,
  },
  {
    id: 'Obliterate-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Anéantir',
    effect: `
      <p>
        Déchaîné, deux fois. Le joueur ayant le plus grand nombre de brèches ouvertes doit détruire quatre cartes de sa main ou subit 4 dégâts.
      </p>
    `,
  },
  {
    id: 'RealityRupture-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Power',
    name: 'Rupture de la Réalité',
    power: 1,
    effect: `
      <p>
        <b>Pour défausser:</b> Détruisez deux sorts préparés coûtant chacun 3 <span class="aether">&AElig;</span> ou plus.<br />
        <br />
        <b>Puissance 1:</b> Déchaîné, trois fois.
      </p>
    `,
  },
  {
    id: 'Sunder-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Fracture',
    effect: `
      <p>
        Gravehold subit 4 dégâts et le joueur ayant le moins de vie subit 4 dégâts.
        <span class="or">OU</span>
        Mélangez toutes les cartes Ordre du tour de la némésis dans le paquet d'ordre du tour.
      </p>
    `,
  },
  {
    id: 'Topple-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Renverser',
    effect: `
      <p>
        Déchaîné, deux fois. Gravehold subit 4 dégâts.
      </p>
    `,
  },
]
