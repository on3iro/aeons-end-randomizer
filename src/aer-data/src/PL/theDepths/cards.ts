import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Więź z Otchłanią',
    id: 'VoidBond',
    cost: 4,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
      Możesz aktywować przygotowane Zaklęcie dowolnego gracza.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Seryjny Zapłon',
    id: 'Combustion',
    cost: 5,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 2 obrażenia Poplecznikowi.<br/>
      Zadaj 2 obrażenia innemu Poplecznikowi albo Nemezis.<br/>
      <span class="hint">Efekty modyfikujące obrażenia, dotyczą obu przypadków obrażeń zadawanych przez to Zaklęcie.
      </span>
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Depths',
    name: 'Dynamo Vim',
    id: 'VimDynamo',
    cost: 4,
    effect: `
      <p>
        Otrzymujesz 1 obrażenie. Dowolny gracz dobiera dwie karty.
          <span class="or">ALBO</span>
        Zniszcz tę kartę. Dowolny gracz otrzymuje 2 punkty życia i 1 Ładunek.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Kosa Dezintegracji',
    id: 'DisintegratingScythe',
    cost: 7,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 8 obrażeń.<br/>
        Otrzymujesz 1 obrażenie. Zamiast odrzucać tę kartę, zniszcz ją albo umieść na wierzchu stosu kart odrzuconych dowolnego gracza.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Piekielna Nawałnica',
    id: 'MonstrousInferno',
    cost: 8,
    effect: `
      <p>
        To Zaklęcie musi być przygotowane na dwóch przylegających Bramach w taki sposób, aby karta dotykała obu Bram.<br/>
        <b>Aktywacja:</b> Zadaj 7 obrażeń podzielonych w dowolny, wybrany przez ciebie sposób, pomiędzy Nemezis i dowolną liczbę Popleczników.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Pożerający Cień',
    id: 'DevouringShadow',
    cost: 6,
    effect: `
      <p>
        Gdy przygotowane: raz na turę w trakcie swojej fazy głównej możesz zniszczyć kartę z ręki.<br/>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'Depths',
    name: 'Wypędzający Topaz',
    id: 'BanishingTopaz',
    cost: 5,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Możesz położyć dowolną kartę z ręki na wierzchu swojej talii. 
      Jeżeli to zrobisz, otrzymujesz dodatkowe 2 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Depths',
    name: 'Transmutator',
    id: 'Transmogrifier',
    cost: 4,
    effect: `
      <p>
        Zniszcz kartę z ręki.<br/>
        Możesz otrzymać kartę z dowolnego stosu zasobów, która kosztuje maksymalnie o 
        3 <span class="aether">&AElig;</span> więcej niż zniszczona karta.
      </p>
        `,
    keywords: [],
  },
]
