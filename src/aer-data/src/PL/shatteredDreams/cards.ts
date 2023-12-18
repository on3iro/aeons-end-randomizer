import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'SD',
    name: 'Oliwenit',
    id: 'Olivinite',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
      Zadaj 1 obrażenie Poplecznikowi.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'SD',
    name: 'Skryte Szkło',
    id: 'CacheGlass',
    cost: 4,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Jeżeli w twoim stosie kart odrzuconych znajduje się Skryte Szkło, możesz zniszczyć kartę z tego stosu.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'SD',
    name: 'Przekaźnik Odbicia',
    id: 'ReflectiveConduit',
    cost: 3,
    effect: `
      <p>
      <b>Przyłącz</b> tę kartę do Bramy dowolnego gracza.
      </p>
      <p>
      Gdy na tej Bramie zostanie aktywowane Zaklęcie, gracz, który je aktywował, może wziąć to Zaklęcie na swoją rękę,
      zamiast umieszczać kartę na stosie kart odrzuconych. Jeżeli to zrobi, odrzuć ten Przekaźnik Odbicia.
      </p>
      `,
    keywords: ['attach'],
  },
  {
    type: 'Relic',
    expansion: 'SD',
    name: 'Makrama Woli',
    id: 'WillWeaver',
    cost: 7,
    effect: `
      <p>
      Otrzymujesz 2 Ładunki.<br/>
      Po następnym aktywowaniu swojej zdolności w tej turze zadaj 3 obrażenia.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Przeszukanie Bram',
    id: 'BreachSeeker',
    cost: 5,
    effect: `
      <p>
      <b>Echo</b>
      </p>
      <p>
      <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
      Wzmocnij Bramę dowolnego sojusznika.
        </p>
      `,
    keywords: ['echo'],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Promień Narastającej Siły',
    id: 'CrescendoRay',
    cost: 4,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
      Otrzymujesz 1 <span class="aether">&AElig;</span> za każde z twoich pozostałych przygotowanych Zaklęć.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Tchnienie Burzy',
    id: 'StormVapors',
    cost: 4,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
      Jeżeli inne Tchnienie Burzy znajduje się w stosie kart odrzuconych dowolnego gracza, wzmocnij Bramę dowolnego gracza.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Mantra Mocy',
    id: 'MantraOfStrength',
    cost: 3,
    effect: `
      <p>
      <b>Aktywacja:</b> Dowolny gracz wzmacnia swoją zamkniętą Bramę o najwyższym koszcie wzmocnienia.<br/>
      Zadaj 1 obrażenie.<br/>
      Możesz zniszczyć tę kartę. Jeżeli to zrobisz, zadaj dodatkowo 2 obrażenia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Ucieleśnienie Ognia',
    id: 'EmbodyFlame',
    cost: 7,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 5 obrażeń.<br/>
      Możesz zniszczyć kartę ze stosu zasobów tej karty. Jeżeli to zrobisz, zadaj dodatkowo 3 obrażenia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Improwizowany Rytuał',
    id: 'SnapRitual',
    cost: 6,
    effect: `
      <p>
      Gdy przygotowane: raz na turę w swojej fazie głównej możesz odrzucić kartę z ręki, by zadać 2 obrażenia.<br/>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.
        </p>
        `,
    keywords: [],
  },
]
