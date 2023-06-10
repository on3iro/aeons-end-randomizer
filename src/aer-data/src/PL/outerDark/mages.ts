import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'OD',
    name: 'Indira',
    id: 'Indira',
    mageTitle: 'Pomocnik Magów Bram',
    ability: `
        <h2>Podstęp Piromanty</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Aktywuj dowolną liczbę Zaklęć z ręki. Każde z tych Zaklęć zadaje 1 dodatkowe obrażenie.</p>
        <p>Możesz zniszczyć jedną kartę ze swojego stosu kart odrzuconych.</p>
      `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Bliźniaczy opal',
        expansion: 'OD',
        id: 'TwinOpal',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
              Możesz aktywować Zaklęcie z ręki.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'OD',
    name: 'Remnant',
    id: 'Remnant',
    mageTitle: 'Stworzenie z Eteru',
    ability: `
        <h2>Efemeryczna Maska</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Dowolny sojusznik bierze z powrotem na rękę dwie karty ze swojego stosu kart odrzuconych.
        <span class="or">ALBO</span>
        Gravehold otrzymuje 5 żywotności.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Odłamek Otchłani',
        expansion: 'OD',
        id: 'VoidShard',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
              Otrzymujesz dodatkowy 1 <span class="aether">&AElig;</span>, którego możesz użyć tylko do wzmocnienia 
              lub otwarcia Bramy.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
