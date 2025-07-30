import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'SV',
    name: 'Lucien',
    id: 'Lucien',
    mageTitle: '',
    abilityName: `Magnetyzm`,
    abilityActivation: `Użyj podczas swojej fazy aktywacji:`,
    abilityEffect: `
      <p>
        Otwórz wszystkie swoje Bramy. Przygotuj dowolną liczbę Zaklęć z ręki na swoich otwartych Bramach.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Odłamek Słońca',
        expansion: 'SV',
        id: 'SunShard',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.
            <span class="or">ALBO</span>
            Otrzymujesz 3 <span class="aether">&AElig;</span>, które mogą zostać wykorzystane wyłącznie do otwarcia Bramy.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
  {
    expansion: 'SV',
    name: 'Reth',
    id: 'Reth',
    mageTitle: '',
    abilityName: `Brakująca Połówka`,
    abilityActivation: `Aktywuj podczas swojej fazy głównej:`,
    abilityEffect: `
      <p>
        Odkryj swoją talię. Weź do czterech kart Zaklęć o tej samej nazwie na swoją rękę:
        do dwóch kart ze swojej talii oraz do dwóch kart ze swojego stosu kart odrzuconych.
        Odłóż swoją talię, zachowując kolejność kart.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Skamieniała Róża',
        expansion: 'SV',
        id: 'FossilizedRose',
        cost: 0,
        effect: `
          <p>
            <b>Aktywacja:</b> Odrzuć kartę z ręki. Jeśli to zrobisz, pozyskaj Zaklęcie o koszcie 
            5 <span class="aether">&AElig;</span> lub mniej z dowolnego stosu zasobów.
            <span class="or">ALBO</span>
            <b>Aktywacja:</b> Zadaj 1 obrażenie.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
]
