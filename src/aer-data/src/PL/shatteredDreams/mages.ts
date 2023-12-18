import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'SD',
    name: 'Nook',
    id: 'Nook',
    mageTitle: 'Zaklinacz Sfer',
    ability: `
        <h2>Eteryczna Kumulacja</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Możesz zniszczyć kartę z ręki albo twojego stosu kart odrzuconych.
        Otrzymujesz 4 <span class="aether">&AElig;</span>.<br/>
        Możesz wziąć na rękę następne Zaklęcie, które pozyskasz w tej turze.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Mistyczna Sfera',
        expansion: 'SD',
        id: 'MysticOrb',
        cost: 0,
        effect: `<p>Otrzymujesz 1 Ładunek.<br/>
          Aktywuj Zaklęcie z ręki. Jeśli to możliwe, odłóż to Zaklęcie
          na jego stos zasobów. Możesz odrzucić 1 Ładunek, by z dowolnego
          stosu zasobów pozyskać Zaklęcie o koszcie niższym niż aktywowane Zaklęcie.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 9,
  },
]
