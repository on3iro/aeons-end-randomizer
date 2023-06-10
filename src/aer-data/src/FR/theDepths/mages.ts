import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'Depths',
    name: 'Nym',
    id: 'Nym',
    mageTitle: 'Apprenti',
    ability:
      '<h2>Barrière définitive</h2>\n<p class="ability-activation">S\'active durant votre phase principale :</p>\n<p>Défaussez la première carte de la pioche Némésis\n<span class="hint">S\'il s\'agit d\'une carte Attaque, défaussez une carte supplémentaire de la pioche Némésis</span></p>',
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        expansion: 'Depths',
        name: 'Cendre',
        id: 'Cinder',
        cost: 0,
        effect:
          '<p>\n<b>Lancer :</b> Infligez 1 dégât.\n<span class="or">OU</span>\n<b>Lancer :</b> Gagnez 2 <span class="aether">&AElig;</span>\n</p>',
        keywords: [],
      },
    ],
  },
  {
    expansion: 'Depths',
    name: 'Reeve',
    id: 'Reeve',
    mageTitle: "Mage de la Brèche d'élite",
    ability:
      '<h2>Lame de répression</h2>\n<p class="ability-activation">S\'active durant votre phase principale :</p>\n<p>Infligez 5 dégâts à un serviteur\n<span class="hint">Infligez 3 dégâts à un autre serviteur</span></p>',
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        expansion: 'Depths',
        name: "Eclat d'obsidienne",
        id: 'ObsidianShard',
        cost: 0,
        effect:
          '<p>\nGagnez 1 <span class="aether">&AElig;</span><br/>\nVous pouvez subir 1 dégât. Si vous le faites, gagnez 2 <span class="aether">&AElig;</span> supplémentaires\n</p>',
        keywords: [],
      },
    ],
  },
  {
    expansion: 'Depths',
    name: "Z'hana",
    id: 'Zhana',
    mageTitle: 'Renégate',
    ability:
      '<h2>Glyphe du Sanctum</h2>\n<p class="ability-activation">S\'active durant votre phase principale :</p>\n<p>Gravehold gagne 7 points de vie</p>',
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        expansion: 'Depths',
        name: 'Braise éternelle',
        id: 'EternalEmber',
        cost: 0,
        effect:
          '<p>\n<b>Lancer :</b> Infligez 1 dégât.\n<span class="or">OU</span>\n<b>Lancer :</b> Lancez un de vos sorts préparés sans le défausser\n</p>',
        keywords: [],
      },
    ],
  },
]
