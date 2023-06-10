import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Agrégat de diamants',
    id: 'DiamondCluster',
    cost: 4,
    effect:
      '<p>\nGagnez 2 <span class="aether">&AElig;</span>.<br/>\nSi c\'est le second Agrégat de diamants que vous jouez ce tour, gagnez 2 <span class="aether">&AElig;</span> de plus.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Arc chaotique',
    id: 'ChaosArc',
    cost: 6,
    effect:
      '<p>\n<b>Lancer :</b> Infligez 3 dégâts.<br/>\nInfligez 2 dégâts supplémentaires par sort préparé sur une brèche adjacente.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Mise à feu',
    id: 'Ignite',
    cost: 4,
    effect:
      '<p>\n<b>Lancer :</b> Infligez 2 dégâts.<br/>\nUn allié gagne 1 charge.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: "Vol d'essence",
    id: 'EssenceTheft',
    cost: 5,
    effect:
      '<p>\n<b>Lancer :</b> Infligez 3 dégâts.<br/>\nVous pouvez défausser une carte de votre main. Si vous le faites, un joueur gagne 1 point de vie.\n</p>',
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Rubis fulgurant',
    id: 'SearingRuby',
    cost: 4,
    effect:
      '<p>\nGagnez 2 <span class="aether">&AElig;</span>.<br/>\nGagnez 1 <span class="aether">&AElig;</span> supplémentaire qui ne peut être utilisé que pour acquérir un sort.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Éclair enragé',
    id: 'FeralLightning',
    cost: 5,
    effect:
      "<p>\nCe sort peut être préparé sur une brèche fermée sans qu'elle doive être stabilisée.<br/>\n<br/>\n<b>Lancer :</b> Infligez 3 dégâts.\n</p>",
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Aperçu planaire',
    id: 'PlanarInsight',
    cost: 6,
    effect:
      '<p>\n<b>Lancer :</b> Infligez 2 dégâts.<br/>\nInfligez 1 dégât supplémentaire pour chacune de vos brèches ouvertes.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Écho spectral',
    id: 'SpectralEcho',
    cost: 3,
    effect:
      '<p>\n<b>Lancer :</b> Infligez 2 dégâts.<br/>\nVous pouvez détruire une carte de votre main.\n</p>',
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Opale brûlante',
    id: 'BurningOpal',
    cost: 5,
    effect:
      '<p>\nGagnez 3 <span class="aether">&AElig;</span>.<br/>\nVous pouvez défausser une carte de votre main pour qu\'un allié pioche une carte.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Vide dévorant',
    id: 'ConsumingVoid',
    cost: 7,
    effect:
      "<p>\n<b>Lancer :</b> Détruisez jusqu'à deux cartes de votre main. Infligez 3 dégâts par carte détruite de cette manière.\n</p>",
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Prisme instable',
    id: 'UnstablePrism',
    cost: 3,
    effect:
      '<p>\nAppliquez deux fois l\'effet d\'une gemme de votre main, puis détruisez-la.\n<span class="or">OU</span>\nGagnez 2 <span class="aether">&AElig;</span>.\n</p>',
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Saphir nuageux',
    id: 'CloudedSapphire',
    cost: 6,
    effect:
      '<p>\nGagnez 3 <span class="aether">&AElig;</span>.<br/>\nS\'il s\'agit du premier Saphir nuageux que vous jouez ce tour, un allié gagne 1 charge.\n</p>',
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Talisman de mage',
    id: 'MagesTalisman',
    cost: 5,
    effect: '<p>\nGagnez 1 charge.<br/>\nUn allié gagne 1 charge.\n</p>',
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Dague fléchissante',
    id: 'FlexingDagger',
    cost: 2,
    effect:
      '<p>\nLa prochaine brèche que vous stabilisez ou que vous ouvrez lors de ce tour vous coûte 3 <span class="aether">&AElig;</span> de moins.\n<span class="or">OU</span>\nDétruisez cette carte. Infligez 1 dégât.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Tentacule de lave',
    id: 'LavaTendril',
    cost: 4,
    effect:
      "<p>\nLorsque préparé, à la fin de votre phase d'incantation, infligez 1 dégât.<br/>\n<br/>\n<b>Lancer :</b> Infligez 3 dégâts.\n</p>",
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Vortex en bouteille',
    id: 'BottledVortex',
    cost: 3,
    effect:
      "<p>\nDétruisez cette carte.<br/>\nDétruisez jusqu'à deux cartes de votre ou de votre défausse.<br/>\nPiochez une carte.\n</p>",
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Nexus des arcanes',
    id: 'ArcaneNexus',
    cost: 7,
    effect:
      '<p>\nLorsque préparé, une fois par tour durant votre phase principale, vous pouvez reprendre une gemme jouée ce tour-ci en main.<br/>\n<br/>\n<b>Lancer :</b> Infligez 4 dégâts.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Feu obscur',
    id: 'DarkFire',
    cost: 5,
    effect:
      "<p>\n<b>Lancer :</b> Défaussez jusqu'à deux cartes de votre main.<br/>\nInfligez 3 dégâts par carte que vous avez défaussée de cette manière.\n</p>",
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Flamme du phénix',
    id: 'PhoenixFlame',
    cost: 3,
    effect:
      '<p>\n<b>Lancer :</b> Infligez 2 dégâts.<br/>\nVous pouvez perdre 1 charge pour infliger 2 dégâts supplémentaires.\n</p>',
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Jade',
    id: 'Jade',
    cost: 2,
    effect: '<p>\nGagnez 2 <span class="aether">&AElig;</span>.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Vision amplifiée',
    id: 'AmplifyVision',
    cost: 4,
    effect:
      '<p>\n<b>Lancer :</b> Stabilisez votre brèche ayant le coût le plus faible.<br/>\nInfligez 2 dégâts. Si toutes vos brèches sont ouvertes, infligez 1 dégat de plus.\n</p>',
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: "Ambre de V'risbois",
    id: 'VriswoodAmber',
    cost: 3,
    effect:
      '<p>\nLorsque vous acquérez cette carte, vous pouvez la placer au-dessus de votre pioche.<br/>\nGagnez 2 <span class="aether">&AElig;</span>.\n</p>',
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: "Bâton d'explosion",
    id: 'BlastingStaff',
    cost: 4,
    effect:
      '<p>\nVous pouvez lancer un sort que vous avez préparé ce tour-ci et infliger 2 dégâts supplémentaires avec ce sort.\n</p>',
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Perle filtrante',
    id: 'SiftersPearl',
    cost: 3,
    effect:
      '<p>\nGagnez 2 <span class="aether">&AElig;</span>.<br/>\nChaque joueur révèle la première carte de sa pioche et peut soit la défausser soit la remettre sur le dessus de sa pioche.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Fouet ardent',
    id: 'WildfireWhip',
    cost: 6,
    effect:
      '<p>\nLorsque prépare, vous pouvez dépenser 2 <span class="aether">&AElig;</span> durant votre phase principale, pour lancer un sort préparé chez n\'importe quel joueur.<br/>\n<br/>\n<b>Lancer :</b> Infligez 4 dégâts.\n</p>',
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Orbre de stabilisation',
    id: 'FocusingOrb',
    cost: 4,
    effect:
      '<p>\nStabilisez la brèche d\'un joueur.\n<span class="or">OU</span>\nDétruisez cette carte pour faire gagner 3 points de vie à Gravehold.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: "Vague d'oubli",
    id: 'OblivionSwell',
    cost: 5,
    effect:
      '<p>\nLorsque prépare, une fois par tour, durant votre phase principale, gagnez 1 <span class="aether">&AElig;</span>.<br/>\n<br/>\n<b>Lancer :</b> Infligez 2 dégâts. Vous pouvez défausser une gemme pour infliger autant de dégâts supplémentaires que son coût.\n</p>',
    keywords: [],
  },
]
