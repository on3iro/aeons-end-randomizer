import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'Nameless',
    name: 'Malastar',
    id: 'Malastar',
    mageTitle: 'Mentor',
    ability:
      "<h2>Don de l'éther</h2>\n<p class=\"ability-activation\">S'active durant votre phase principale :</p>\n<p>Gagnez un sort de n'importe quelle pile de la réserve. Vous pouvez préparer ce sort sur une brèche ouverte de n'importe quel joueur.</p>",
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Spell',
        expansion: 'Nameless',
        name: 'Immolation',
        id: 'Immolate',
        cost: 0,
        effect:
          '<p>\nLorsque préparé, si vous subissez des dégâts, gagnez 1 charge.<br/>\n<br/>\n<b>Lancer :</b> Infligez 1 dégât.\n</p>',
        keywords: [],
      },
    ],
  },
]
