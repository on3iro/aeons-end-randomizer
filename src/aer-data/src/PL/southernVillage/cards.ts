import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'SV',
    name: 'Pył Szybkości',
    id: 'QuickeningQitite',
    cost: 3,
    effect: `
      <p>
        Otrzymujesz 2 <span class="aether">&AElig;</span>.<br />
        Możesz odrzucić kartę z ręki. Jeśli to zrobisz, wzmocnij Bramę II dowolnego gracza.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'SV',
    name: 'Szlifowany Szmaragd',
    id: 'JeweledUrup',
    cost: 5,
    effect: `
      <p>
        Otrzymujesz 3 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
        Jeśli zagrałeś Szlifowany Szmaragd po raz DRUGI w tej turze, 
        możesz go zniszczyć. Jeśli to zrobisz, pozyskaj kartę ze stosu zasobów,
        o koszcie nie większym niż 7 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'SV',
    name: "Kocie Oko",
    id: 'CatsEye',
    cost: 1,
    effect: `
      <p>
        Nie możesz pozyskać tej karty, jeśli pozyskałeś inną kartę w tej turze. Nie możesz 
        pozyskać innej karty w turze, w której pozyskałeś tę kartę.<br />
        Otrzymujesz 1 Ładunek. Możesz zniszczyć tę kartę. Jeśli to zrobisz, otrzymujesz 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'SV',
    name: 'Uzdatniacz Energii',
    id: 'VoltReplicator',
    cost: 4,
    effect: `
      <p>
        Dowolny sojusznik pozyskuje kartę, o koszcie 5 <span class="aether">&AElig;</span> lub mniej. 
        Jeśli na rynku zasobów są co najwyżej dwa Uzdatniacze Energii, możesz zniszczyć tę kartę. 
        Jeśli to zrobisz, zamiast tego umieść pozyskaną kartę na ręce tego sojusznika. 
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'SV',
    name: 'Przepływ Energii',
    id: 'EnergizedConduit',
    cost: 7,
    effect: `
      <p>
        <b>Przyłącz</b> tę kartę do Bramy dowolnego gracza.
      </p>
      <p>
        Gdy na tej Bramie zostanie aktywowane Zaklęcie, gracz, który je aktywował, otrzymuje 1 Ładunek.
      </p>
    `,
    keywords: ['attach'],
  },
  {
    type: 'Spell',
    expansion: 'SV',
    name: 'Ognisty Lewy',
    id: 'FlameJab',
    cost: 1,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 2 obrażenia Poplecznikowi.<br />
        Możesz zniszczyć tę kartę. Jeśli to zrobisz, otrzymujesz 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SV',
    name: 'Potęga Wiatrów',
    id: 'GatheringWinds',
    cost: 3,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 2 obrażenia.<br />
        Jeśli w twoim stosie kart odrzuconych jest co najmniej sześć innych kart, wzmocnij Bramę dowolnego gracza.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SV',
    name: 'Deszcz Meteorytów',
    id: 'CinderShower',
    cost: 5,
    effect: `
      <p>
        Gdy przygotowane: gdy pozyskujesz kartę, zadaj 1 obrażenie.<br />
        <b>Aktywacja:</b> Zadaj 3 obrażenia.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SV',
    name: "Płomień Żniwiarza",
    id: 'ReapersFlame',
    cost: 7,
    effect: `
      <p>
        Gdy przygotowane: raz na turę, gdy aktywujesz Zaklęcie, możesz pozyskać kartę o koszcie 
        5 <span class="aether">&AElig;</span> lub mniej z dowolnego stosu zasobów.<br />
        <b>Aktywacja:</b> Zadaj 5 obrażeń.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SV',
    name: 'Wymazanie Umysłu',
    id: 'ErasureOfMind',
    cost: 7,
    effect: `
      <p>
        <b>Aktywacja:</b> Zniszcz kartę z ręki o koszcie 3<span class="aether">&AElig;</span> lub więcej. 
        Jeśli to zrobisz, zadaj 10 obrażeń.
        <span class="or">ALBO</span>
        <b>Aktywacja:</b> Zadaj 5 obrażeń. Odkryj dwie wierzchnie karty ze swojej talii i połóż je na swój stos kart odrzuconych
        lub odłóż je z powrotem w dowolnej kombinacji.
      </p>
    `,
    keywords: [],
  },
]
