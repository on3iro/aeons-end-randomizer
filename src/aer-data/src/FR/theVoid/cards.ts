import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TV',
    name: 'Scarabée Fossilisé',
    id: 'FossilizedScarab',
    cost: 3,
    effect: `
      <p>
      Gagnez 2 <span class="aether">&AElig;</span>.
        <span class="or">OU</span>
      Détruisez une carte de votre main.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Fléchette Thermique',
    id: 'ThermalDart',
    cost: 4,
    effect: `
      <p>
      <b>Lien</b> <span class="hint">(Deux sorts ayant Lien peuvent être préparés sur la même brêche.)</span>
      </p>
      <p>
      <b>Lancer:</b> Infligez 3 dégâts.<br/>
      Si ce n'est pas la première Fléchette Thermique que vous lancez ce tour-ci, gagnez 1 charge.
        </p>
      `,
    keywords: ['link'],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Résonance',
    id: 'Resonate',
    cost: 6,
    effect: `
      <p>
      <b>Lancer:</b> Infligez 4 dégâts.<br/>
      S'il y a six cartes ou plus dans votre défausse, infligez 3 dégâts supplémentaires.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Embrasement',
    id: 'Conflagration',
    cost: 3,
    effect: `
      <p>
      <b>Lien</b> <span class="hint">(Deux sorts ayant Lien peuvent être préparés sur la même brêche.)</span>
      </p>
      <p>
      <b>Lancer:</b> Infligez 2 dégâts.<br/>
      Gagnez 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['link'],
  },
  {
    type: 'Relic',
    expansion: 'TV',
    name: 'Clé Dimensionnelle',
    id: 'DimensionalKey',
    cost: 8,
    effect: `
      <p>
      Un allié pioche deux cartes.
        <span class="or">OU</span>
      Détruisez cette carte. Subissez 1 dégât. Placez une carte Némésis actuellement en jeu 
	  sur la pioche Némésis.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Feu Intérieur',
    id: 'InnerFire',
    cost: 2,
    effect: `
      <p>
      <b>Lien</b> <span class="hint">(Deux sorts ayant Lien peuvent être préparés sur la même brêche.)</span>
      </p>
      <p>
        <b>Lancer:</b> Infligez 1 dégât.<br/>
        Si le palier de la Némésis est 2 ou plus, infligez 1 dégât supplémentaire.
        </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Fulminer',
    id: 'Fulminate',
    cost: 5,
    effect: `
      <p>
      Lorsque préparés, les autres sorts que vous lancez infligent 1 dégât supplémentaire.
      </p>
      <p>
      <b>Lien</b> <span class="hint">(Deux sorts ayant Lien peuvent être préparés sur la même brêche.)</span>
      </p>  
      <b>Lancer:</b> Infligez 3 dégâts.
        </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Relic',
    expansion: 'TV',
    name: 'Cachet de l\'Éternité',
    id: 'EternityCharm',
    cost: 3,
    effect: `
      <p>
        Stabilisez votre brèche fermée ayant le coût de stabilisation le plus faible. 
		Révélez les trois premières cartes de votre pioche. 
        Vous pouvez préparer un des sorts révélés.
      </p>
        `,
    keywords: [],
  },
]
