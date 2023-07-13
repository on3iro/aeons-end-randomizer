import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TA',
    name: 'Połyskujący Fluoryt',
    id: 'ShiningFluorite',
    cost: 7,
    effect: `
      <p>
      Otrzymujesz 3 <span class="aether">&AElig;</span>.<br/>
      Umieść na ręce następne Zaklęcie, które pozyskasz w tej turze.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'TA',
    name: 'Turbina Polifazowa',
    id: 'PolyphaseTurbine',
    cost: 3,
    effect: `
      <p>
        Jeśli w tej turze zagrywasz Turbinę Polifazową po raz pierwszy,
        otrzymujesz 2 <span class="aether">&AElig;</span>. W innym przypadku otrzymujesz 1 Ładunek 
        i 1 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'TA',
    name: 'Wykrywacz Magii Bram',
    id: 'BreachExtractor',
    cost: 5,
    effect: `
      <p>
      Dowolny gracz niszczy do dwóch kart z ręki.
        <span class="or">ALBO</span>
      Zniszcz tę kartę. Gravehold otrzymuje 3 punkty żywotności.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'TA',
    name: 'Przekaźnik Wzmocnienia',
    id: 'FocusingConduit',
    cost: 5,
    effect: `
      <p>
        <b>Przyłącz</b> tę kartę do Bramy dowolnego gracza.
      </p>
      <p>
        Na koniec fazy aktywacji tego gracza wzmocnij tę Bramę. Gdy ta Brama zostanie otwarta, zniszcz tę kartę.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TA',
    name: 'Odbity Błysk',
    id: 'DualFlash',
    cost: 3,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
      Jeśli w tej turze aktywujesz Odbity Błysk po raz pierwszy, możesz aktywować przygotowany przez 
      dowolnego gracza Odbity Błysk bez odrzucania go.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TA',
    name: 'Okruchy Mocy',
    id: 'DustCaller',
    cost: 5,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
      Dowolny sojusznik bierze na rękę kartę o koszcie 0 <span class="aether">&AElig;</span> 
      ze swojego stosu kart odrzuconych.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TA',
    name: 'Symbiotyczna Synapsa',
    id: 'SymbioticSynapse',
    cost: 7,
    effect: `
      <p>
        Ta karta otrzymuje <b>Echo</b>, jeżeli w stosie kart odrzuconych dowolnego gracza
        znajduje się inna Symbiotyczna Synapsa.
        </p>
        <p>
        <b>Aktywacja:</b> Zadaj 4 obrażenia.
        </p>
        `,
    keywords: ['echo'],
  },
]
