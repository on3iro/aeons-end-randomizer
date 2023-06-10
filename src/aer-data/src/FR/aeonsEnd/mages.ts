import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'AE',
    name: 'Adelheim',
    id: 'Adelheim',
    mageTitle: 'Armurier',
    ability:
      '<h2>Gardien étherien</h2>\n<p class="ability-activation">S\'active durant la phase de pioche de la némésis :</p>\n<p>Après qu\'une carte Attaque ou Pouvoir a été piochée, mais avant qu\'elle soit résolue, vous pouvez la défausser sans appliquer son effet.\n<span class="hint">La némésis ne pioche pas de nouvelle carte à la place</span></p>',
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        expansion: 'AE',
        name: "Éclat d'améthyste",
        id: 'AmethystShard',
        cost: 0,
        effect:
          '<p>\nGagnez 1 <span class="aether">&AElig;</span>.<br/>\nUn allié peut piocher une carte, puis défausser une carte de sa main.\n</p>',
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Brama',
    id: 'Brama',
    mageTitle: 'Ancienne',
    ability:
      '<h2>Siphon de la bordure</h2>\n<p class="ability-activation">S\'active durant votre phase principale :</p>\n<p>Un joueur gagne 4 Vie.</p>',
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        expansion: 'AE',
        name: 'Lumière enterrée',
        id: 'BuriedLight',
        cost: 0,
        effect:
          '<p>\n<b>Lancer :</b> Infligez 1 dégât. Gagnez 1 <span class="aether">&AElig;</span>.\n</p>',
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Jian',
    id: 'Jian',
    mageTitle: 'Orpheline',
    ability:
      '<h2>Miroir noir</h2>\n<p class="ability-activation">S\'active durant votre phase principale :</p>\n<p>Lancez le sort préparer d\'un joueur sans le défausser. Puis lancer ce sort à nouveau.\n<span class="hint">Défaussez-le ensuite.</span></p>',
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        expansion: 'AE',
        name: 'Éclat de pierre de lune',
        id: 'MoonstoneShard',
        cost: 0,
        effect:
          '<p>\nGagnez 1 <span class="aether">&AElig;</span>.<br/>\nGagnez 1 <span class="aether">&AElig;</span> additionnel qui ne peut être utilisé que pour acquérir une Gemme.\n</p>',
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Kadir',
    id: 'Kadir',
    mageTitle: 'Chercheuse',
    ability:
      "<h2>Porte vers l'autre-monde</h2>\n<p class=\"ability-activation\">S'active durant la phase principale d'un joueur :</p>\n<p>Ce joueur peut reprendre en main jusqu'à trois sorts de sa défausse. Durant ce tour, ce joueur peut préparer jusqu'à deux sorts sur chacune de ses brèches ouvertes.</p>",
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        expansion: 'AE',
        name: "Éclat d'émeraude",
        id: 'EmeraldShard',
        cost: 0,
        effect:
          '<p>\nGagnez 1 <span class="aether">&AElig;</span>.\n<span class="or">OU</span>\nUn joueur gagne 1 point de vie.\n</p>',
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Lash',
    id: 'Lash',
    mageTitle: 'Éclaireur',
    ability:
      '<h2>Accélération mentale</h2>\n<p class="ability-activation">S\'active durant la phase principale d\'un joueur :</p>\n<p>Mélangez la carte Ordre du tour d\'un joueur dans le paquet d\'ordre du tour. Ce joueur subit 1 dégât.\n<span class="hint">Vous ne pouvez pas choisir la carte Ordre du jour Joker.</span></p>',
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        expansion: 'AE',
        name: 'Éclat de quartz',
        id: 'QuartzShard',
        cost: 0,
        effect:
          '<p>\nGagnez 1 <span class="aether">&AElig;</span>.<br/>\nRévélez la 1re carte de la pioche d\'ordre du tour. Vous pouvez placer cette carte au-dessus ou en dessous de la pioche d\'ordre du tour.<br/>\nSi vous avez révélé la carte d\'ordre tour d\'un joueur, gagnez 1 <span class="aether">&AElig;</span> supplémentaire.\n</p>',
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Mist',
    id: 'Mist',
    mageTitle: 'Capitaine de la dague',
    ability:
      '<h2>Prédiciton divine</h2>\n<p class="ability-activation">S\'active durant votre phase principale :</p>\n<p>Un allié pioche quatre cartes.</p>',
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        expansion: 'AE',
        name: 'Éclat de grenat',
        id: 'GarnetShard',
        cost: 0,
        effect:
          '<p>\nGagnez 1 <span class="aether">&AElig;</span>.\n<span class="or">OU</span>\nLancez un sort préparé chez n\'importe quel joueur.\n</p>',
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Phaedraxa',
    id: 'Phaedraxa',
    mageTitle: 'Voyante',
    ability:
      '<h2>Rune des oracles</h2>\n<p class="ability-activation">S\'active au moment où une carte Ordre du tour est révélée :</p>\n<p>Tous les dégâts que les joueurs ou Gravehold devraient subir ce tour-ci sont annulés.</p>',
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        expansion: 'AE',
        name: 'Éclat de tourmaline',
        id: 'TourmalineShard',
        cost: 0,
        effect:
          '<p>\nGagnez 1 <span class="aether">&AElig;</span>.<br/>\nUn allié peut subir 1 dégât pour détruire une carte de sa main.\n</p>',
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Xaxos',
    id: 'Xaxos',
    mageTitle: 'Adepte',
    ability:
      "<h2>Lien métaphysique</h2>\n<p class=\"ability-activation\">S'active durant la phase principale d'un joueur :</p>\n<p>Les alliés reçoivent collectivement 4 charges. Révélez puis replacez les cartes de la pioche d'Ordre du tour dans l'ordre de votre choix.</p>",
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        expansion: 'AE',
        name: 'Flash',
        id: 'Flare',
        cost: 0,
        effect:
          "<p>\n<b>Lancer :</b> Révélez la 1re carte de la pioche d'ordre du tour, puis replacez-la au dessus de cette pioche. Si vous avez révélé la carte d'ordre du tour d'un joueur, infligez 3 dégâts. Sinon 1 dégât.\n</p>",
        keywords: [],
      },
    ],
  },
]
