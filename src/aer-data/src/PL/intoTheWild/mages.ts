import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'IW',
    name: 'Inco',
    id: 'Inco',
    mageTitle: 'Dziecię Zieleni',
    ability: `
        <h2>Nagły Rozrost</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Aktywuj dowolną liczbę Cierni Róży przygotowanych przez dowolną liczbę graczy.
        Każde z tych Zaklęć zadaje dodatkowo 2 obrażenia</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Szmaragd Bujności',
        expansion: 'IW',
        id: 'VerdantEmerald',
        cost: 0,
        effect: `<p>Otrzymujesz 1 <span class="aether">&AElig;</span>.
            <span class="or">ALBO</span>
            Pozyskujesz kartę z talii Cierni Róży.
            Umieść ją na wierzchu stosu kart odrzuconych dowolnego gracza.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'IW',
    name: 'Razra',
    id: 'Razra',
    mageTitle: 'Trenerka',
    ability: `
        <h2>Szkolenie Rip</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Zniszcz z ręki kartę z "Rip" w nazwie. Z osobistej talii
        Ulepszeń dobierz na rękę kartę z "Rip" w nazwie, której koszt wynosi o 3 <span class="aether">&AElig;</span>
        więcej niż zniszczona karta.
        <span class="or">ALBO</span>
        Weź na rękę wszystkie karty z "Rip" w nazwie, które zostały przez ciebie zagrane w tej turze
        i/lub te ze swojego stosu kart odrzuconych.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Relic',
        name: 'Rip, pomóż!',
        expansion: 'IW',
        id: 'RipHelp',
        cost: 0,
        effect: `<p>Otrzymujesz 1 Ładunek.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
]
