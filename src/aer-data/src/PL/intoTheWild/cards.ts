import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'IW',
    name: 'Mózgonit',
    id: 'JeweledBrain',
    cost: 3,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>.
          <span class="or">ALBO</span>
          Otrzymujesz 1 <span class="aether">&AElig;</span>. Weź na rękę kartę o koszcie 0 <span class="aether">&AElig;</span>
          ze swojego stosu kart odrzuconych.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'IW',
    name: 'Wybuchalator',
    id: 'BlastSphere',
    cost: 8,
    effect: `
        <p>
          Trzykrotnie aktywuj przygotowane Zaklęcie dowolnego gracza, nie odrzucając jego karty, a następnie zniszcz ją.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'IW',
    name: 'Lecząca Lanca',
    id: 'WoundMender',
    cost: 8,
    effect: `
        <p>
          <b>Echo</b>
        </p>
        <p>
          <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
          Jeśli to Zaklęcie zostało aktywowane z otwartej Bramy III albo IV,
          otrzymujesz 1 punkt życia.
        </p>
      `,
    keywords: ['echo'],
  },
]
