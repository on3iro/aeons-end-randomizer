import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'RTG',
    name: 'Ohat i Ulgimor',
    id: 'OhatAndUlgimor',
    aliases: ['Ulgimor'],
    mageTitle: '',
    abilityName: `Oczarowanie`,
    abilityActivation: `Użyj podczas swojej fazy głównej:`,
    abilityEffect: `
      <p>
        Postać Ohata: Otrzymujesz 2 obrażenia. Dowolny sojusznik dobiera pięć kart i odrzuca dwie karty z ręki.<br />
        Postać Ulgimora: Aktywuj Zaklęcie przygotowane na Bramie IV, bez jego odrzucania.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Deszcz Odkłamków',
        expansion: 'RTG',
        id: 'ShowerOfCoals',
        cost: 0,
        effect: `
          <p>
            Postać Ohata:<br />
            <b>Aktywacja:</b> Otrzymujesz 2 <span class="aether">&AElig;</span> i 1 obrażenie<br />
            Postać Ulgimora:<br />
            <b>Aktywacja:</b> Zadaj 3 obrażenia.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'RTG',
    name: 'Cairna',
    id: 'Cairna',
    mageTitle: '',
    abilityName: `Napełnienie Energią`,
    abilityActivation: `Użyj podczas swojej fazy głównej:`,
    abilityEffect: `
      <p>
        Pozyskaj Zaklęcie ze stosu zasobów, o koszcie 5 <span class="aether">&AElig;</span> lub mniej. 
        Zamiast tego możesz odrzucić dwa Ładunki, aby pozyskać dowolne Zaklęcie ze stosu zasobów. Możesz odrzucić Ładunek, 
        aby przygotować Zaklęcie ze swojego stosu kart odrzuconych na jednej ze swoich otwartych Bram.
      </p>
    `,
    numberOfCharges: 3,
    numberOfOvercharges: 3,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Pokrzepienie',
        expansion: 'RTG',
        id: 'Invigorate',
        cost: 0,
        effect: `
          <p>
            <b>Aktywacja:</b> Zadaj 1 obrażenie.
            <span class="or">ALBO</span>
            <b>Aktywacja:</b> Weź Zaklęcie ze swojego stosu kart odrzuconych na rękę.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
]
