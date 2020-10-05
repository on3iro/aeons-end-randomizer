import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Lien du vide',
    id: 'VoidBond',
    cost: 4,
    effect:
      "<p>\n<b>Lancer :</b> Infligez 3 dégâts.<br/>\nVous pouvez lancer un sort préparé de n'importe quel joueur.\n</p>",
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Combustion',
    id: 'Combustion',
    cost: 5,
    effect:
      "<p>\n<b>Lancer :</b> Infligez 2 dégâts à un serviteur.<br/>\nInfligez 2 dégâts à un autre serviteur ou à la Némésis.<br/>\n(Les effets modifiant les dégâts s'appliquent aux dégâts de chacun des deux effets de cette carte)\n</p>",
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Depths',
    name: 'Dynamo de vigueur',
    id: 'VimDynamo',
    cost: 4,
    effect:
      '<p>\nSubissez 1 dégât. Un joueur pioche deux cartes.<br/>\nou<br/>\nDétruisez cette carte. Un joueur gagne 2 points de vie et 1 charge.\n</p>',
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Faux de désintégration',
    id: 'DisintegratingScythe',
    cost: 7,
    effect:
      "<p>\n<b>Lancer :</b> Infligez 8 dégâts. Subissez 1 dégât.<br/>\nPlutôt que de défausser cette carte, détruisez-la, ou placez-la sur la défausse d'un joueur.\n</p>",
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Brasier monstrueux',
    id: 'MonstrousInferno',
    cost: 8,
    effect:
      "<p>\nCe sort doit être préparé sur deux brèches adjacentes, de manière à ce qu'il touche les deux brèches.<br/>\nLes deux brèches sont occupées par ce sort.<br/>\n<br/>\n<b>Lancer :</b> Infligez 7 dégâts répartis librement entre la Némésis et autant de serviteurs que souhaité.\n</p>",
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Ombre dévorante',
    id: 'DevouringShadow',
    cost: 6,
    effect:
      '<p>\nLorsque péparé, une fois par tour, durant votre phase principale, vous pouvez détruire une carte de votre main.<br/>\n<br/>\n<b>Lancer :</b> Infligez 3 dégâts.\n</p>',
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'Depths',
    name: 'Topaze de bannissement',
    id: 'BanishingTopaz',
    cost: 5,
    effect:
      '<p>\nGagnez 2 <span class="aether">&AElig;</span><br/>\nVous pouvez placer une carte de votre main sur votre pioche. Si vous le faites, gagnez 2 <span class="aether">&AElig;</span> supplémentaires\n</p>',
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Depths',
    name: 'Transmogriffeur',
    id: 'Transmogrifier',
    cost: 4,
    effect:
      '<p>\nDétruisez une carte de votre main.<br/>\nVous pouvez gagner une carte d\'une pile de la réserve qui coûte jusqu\'à 3 <span class="aether">&AElig;</span> de plus que la carte détruite.\n</p>',
    keywords: [],
  },
]
