import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Relic',
    expansion: 'Nameless',
    name: 'Marteau en fusion',
    id: 'MoltenHammer',
    cost: 5,
    effect:
      "<p>\nGagnez 1 charge.<br/>\nVous pouvez détruire une carte de votre main ou du dessus de le défausse de n'importe quel joueur.\n</p>",
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Radiance',
    id: 'Radiance',
    cost: 8,
    effect:
      '<p>\n<b>Lancer :</b> Infligez 5 dégâts. Chaque allié pioche une carte.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Flamber',
    id: 'Blaze',
    cost: 4,
    effect:
      "<p>\nLorsque vous gagnez cette carte, vous pouvez la placer sur la défausse de n'importe quel joueur.<br/>\n<br/>\n<b>Lancer :</b> Infligez 2 dégâts. Infligez 1 dégât suplémentaire par Flamber que vous avez lancé ce tour et par autre Flamber préparé  sur vos brèches.\n</p>",
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Eclair de prophétie',
    id: 'ScryingBolt',
    cost: 6,
    effect:
      "<p>\n<b>Lancer :</b> Infligez 5 dégâts. Vous pouvez perdre 1 charge.<br/>\nSi vous le faites, révélez les deux premières cartes de la pioche de la Némésis et replacez les dans l'ordre de votre choix.\n</p>",
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'La marque du sage',
    id: 'SagesBrand',
    cost: 7,
    effect:
      "<p>\nCe sort doit être préparé sur deux brèches adjacentes, de manière à ce qu'il touche les deux brèches.<br/>\nLes deux brèches sont occupées par ce sort.<br/>\nLorsque préparé, piochez une carte de plus lors de votre phase de pioche.<br/>\n<br/>\n<b>Lancer :</b> Infligez 6 dégâts.\n</p>",
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'Nameless',
    name: 'Agate sangsue',
    id: 'LeechingAgate',
    cost: 3,
    effect:
      '<p>\nLorsque vous gagnez cette carte, gagner 1 charge.<br/>\nGagnez 2 <span class="aether">&AElig;</span>.\n</p>',
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Nameless',
    name: 'Spirale temporelle',
    id: 'TemporalHelix',
    cost: 7,
    effect:
      "<p>\nLancez un sort préparé de n'importe quel joueur sans le défausser.\n</p>",
    keywords: [],
  },
]
