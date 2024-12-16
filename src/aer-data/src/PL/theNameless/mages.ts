import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'Nameless',
    name: 'Malastar',
    id: 'Malastar',
    mageTitle: 'Mentor Magów Bram',
    abilityName: `Dar Eteru`,
    abilityActivation: `Użyj podczas swojej fazy głównej:`,
    abilityEffect: `
        <p>Pozyskaj jedno Zaklęcie z dowolnego stosu zasobów. Możesz przygotować to Zaklęcie na otwartej Bramie dowolnego gracza.</p>
      `,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Samospalanie',
        expansion: 'Nameless',
        id: 'Immolate',
        cost: 0,
        effect: `
            <p>
              Gdy przygotowane: gdy otrzymujesz co najmniej 1 obrażenie, otrzymujesz 1 Ładunek.<br/>
              <b>Aktywacja:</b> Zadaj 1 obrażenie.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
