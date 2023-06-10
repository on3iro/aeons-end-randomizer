import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TV',
    name: 'Skarabeusz w bursztynie',
    id: 'FossilizedScarab',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
      Zniszcz kartę na swojej ręce.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Termiczny Grot',
    id: 'ThermalDart',
    cost: 4,
    effect: `
      <p>
      <b>WIĘŹ</b> <span class="hint">(Dwa Zaklęcia z Więzią mogą być przygotowane na tej samej Bramie.)</span>
      </p>
      <p>
      <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
      Jeżeli nie jest to pierwszy Termiczny Grot aktywowany przez ciebie w tej turze, otrzymujesz 1 Ładunek.
        </p>
      `,
    keywords: ['link'],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Rezonans',
    id: 'Resonate',
    cost: 6,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
      Jeżeli w twoim stosie kart odrzuconych jest co najmniej 6 innych kart, zadaj 3 dodatkowe obrażenia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Pożoga',
    id: 'Conflagration',
    cost: 3,
    effect: `
      <p>
      <b>WIĘŹ</b> <span class="hint">(Dwa Zaklęcia z Więzią mogą być przygotowane na tej samej Bramie.)</span>
      </p>
      <p>
      <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
      Otrzymaj 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['link'],
  },
  {
    type: 'Relic',
    expansion: 'TV',
    name: 'Klucz do Wymiarów',
    id: 'DimensionalKey',
    cost: 8,
    effect: `
      <p>
      Dowolny sojusznik dobiera dwie karty.
        <span class="or">ALBO</span>
      Zniszcz tę kartę. Otrzymujesz 1 obrażenie. Umieść kartę Nemezis, która jest w grze, na wierzchu talii Nemezis.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Wewnętrzny Żar',
    id: 'InnerFire',
    cost: 2,
    effect: `
      <p>
        <b>WIĘŹ</b> <span class="hint">(Dwa Zaklęcia z Więzią mogą być przygotowane na tej samej Bramie.)</span>
      </p>
      <p>
        <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
        Jeżeli rząd kart Nemezis jest wyższy niż 1, zadaj 1 dodatkowe obrażenie.
        </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Ognisty piorun',
    id: 'Fulminate',
    cost: 5,
    effect: `
      <p>
      Gdy przygotowane: pozostałe aktywowane przez ciebie Zaklęcia zadają 1 dodatkowe obrażenie.
      </p>
      <p>
      <b>WIĘŹ</b> <span class="hint">(Dwa Zaklęcia z Więzią mogą być przygotowane na tej samej Bramie.)</span>
      </p>  
      <b>Aktywacja:</b> Zadaj 3 obrażenia.
        </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Relic',
    expansion: 'TV',
    name: 'Powab Wieczności',
    id: 'EternityCharm',
    cost: 3,
    effect: `
      <p>
        Wzmocnij swoją zamkniętą Bramę o najniższym koszcie wzmocnienia. Odkryj trzy karty z wierzchu wojej talii. 
        Możesz przygotować jedno z odkrytych Zaklęć.
      </p>
        `,
    keywords: [],
  },
]
