import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Niestabilny Piryt',
    id: 'UnstablePyrite',
    cost: 2,
    effect: `
      <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>.<br />
        Możesz zniszczyć tę kartę. Jeśli tak zrobisz, otrzymujesz dodatkowo 2 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Stopiony Oliwin',
    id: 'MoltenPeridot',
    cost: 3,
    effect: `
      <p>
        Otrzymujesz 2 <span class="aether">&AElig;</span>.<br />
        Jeśli zagrałeś Stopiony Oliwin po raz DRUGI w tej turze, 
        możesz go zniszczyć. Jeśli tak zrobisz, pozyskaj kartę o koszcie 4 <span class="aether">&AElig;</span> 
        lub mniej z dowolnego stosu zasobów.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Bursztynowa Spirala',
    id: 'HelixOfAmber',
    cost: 3,
    effect: `
      <p>
        Otrzymujesz 2 <span class="aether">&AElig;</span>.<br />
        Możesz otrzymać 1 obrażenie. Jeśli tak zrobisz, zniszcz kartę o koszcie 0 <span class="aether">&AElig;</span> 
        ze swojej ręki.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Skamieniały Feniks',
    id: 'PetrifiedPhoenixium',
    cost: 4,
    effect: `
      <p>
        Otrzymujesz 2 <span class="aether">&AElig;</span>.<br />
        Następnym razem, gdy w tej turze pozyskasz kartę, możesz aktywować przygotowane zaklęcie dowolnego gracza.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Ocynkowany Szafir',
    id: 'GalvanizedSapphire',
    cost: 4,
    effect: `
      <p>
        Otrzymujesz 2 <span class="aether">&AElig;</span>.<br />
        Xaxos Wygnaniec otrzymuje 1 Ładunek.
      </p>
    `,
    keywords: ['xaxos'],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Wydłużony Looq',
    id: 'ElongatedLooq',
    cost: 4,
    effect: `
      <p>
        Otrzymujesz 2 <span class="aether">&AElig;</span>.<br />
        Gdy następnym razem w tej turze wzmocnisz albo otworzysz Bramę, otrzymujesz 1 Ładunek.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Energetyczny Kamień Słoneczny',
    id: 'VigorousSunstone',
    cost: 5,
    effect: `
      <p>
        Jeśli pozyskujesz tę kartę jako drugą kartę w tej turze, 
        weź ją na rękę.<br />
        Otrzymujesz 3 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Powielający się Sazyt',
    id: 'DuplicatingSazite',
    cost: 6,
    effect: `
      <p>
        Otrzymujesz 3 <span class="aether">&AElig;</span>.<br />
        Następnym razem, gdy pozyskasz kartę w tej turze, możesz odrzucić przygotowane Zaklęcie
        o koszcie 1 <span class="aether">&AElig;</span> lub więcej. Jeśli tak zrobisz, 
        dowolny sojusznik pozyskuje kartę z rynku zasobów, której koszt nie jest większy od kosztu karty 
        którą pozyskałeś.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Sfera Głębin',
    id: 'OrbOfTheDeep',
    cost: 2,
    effect: `
      <p>
        Wzmocnij swoją zamkniętą Bramę o najniższym koszcie wzmocnienia.
        <span class="or">ALBO</span>
        Zniszcz tę kartę. Otrzymujesz 1 Ładunek.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Mięsożerny Roox',
    id: 'CarnivorousRoox',
    cost: 3,
    effect: `
      <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>. Możesz zniszczyć kartę z ręki, 
        aby otrzymać <span class="aether">&AElig;</span> w liczbie równej jej kosztowi.
        <span class="or">ALBO</span>
        Zniszcz tę kartę. Dwukrotnie wzmocnij swoją zamkniętą Bramę o najniższym koszcie wzmocnienia.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Sztylet Szczeliny',
    id: 'RiftDagger',
    cost: 3,
    effect: `
      <p>
        Pozyskaj kartę z dowolnego, innego stosu zasobów, która kosztuje nie więcej niż 3 <span class="aether">&AElig;</span>. 
        Możesz zamiast tego zniszczyć tę kartę, aby pozyskać kartę, która kosztuje nie więcej niż 4 <span class="aether">&AElig;</span>. 
        <br />
        Możesz wydać 1 <span class="aether">&AElig;</span>. Jeśli tak zrobisz,
        weź pozyskaną kartę na rękę.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Odtwarzający Obwód',
    id: 'ReconstitutingCircuit',
    cost: 3,
    effect: `
      <p>
        Xaxos Wygnaniec otrzymuje 1 Ładunek.<br />
        Możesz zniszczyć kartę z ręki.
      </p>
    `,
    keywords: ['xaxos'],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Fałszerz Przeznaczenia',
    id: 'DestinyForger',
    cost: 4,
    effect: `
      <p>
        Dowolny sojusznik może zniszczyć kartę z ręki. Ten gracz może pozyskać i wziąć
        na rękę kartę, która kosztuje maksymalnie o 2 <span class="aether">&AElig;</span>  
        więcej niż zniszczona karta.
        <span class="or">ALBO</span>
        Zniszcz tę kartę. Otrzymujesz 2 Ładunki.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Łańcuch Odzyskania',
    id: 'ChainOfRetrieval',
    cost: 4,
    effect: `
      <p>
        Wzmocnij Bramę dowolnego sojusznika.
        <span class="or">ALBO</span>
        Przywróć na rękę kartę ze swojego stosu kart odrzuconych
        o koszcie 6 <span class="aether">&AElig;</span> lub mniej.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Słońce w Butelce',
    id: 'BottledSun',
    cost: 6,
    effect: `
      <p>
        Xaxos Wygnaniec otrzymuje 3 Ładunki.
      </p>
    `,
    keywords: ['xaxos'],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: "Soczewki Transmutera",
    id: 'TransmutersLens',
    cost: 5,
    effect: `
      <p>
        Zniszcz tę kartę.<br />
        Możesz zniszczyć kartę na swojej ręce albo ze swojego stosu kart odrzuconych.<br />
        Pozyskaj kartę z dowolnego stosu zasobów, której koszt to 
        nie więcej niż 6 <span class="aether">&AElig;</span>. 
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Rozszalały Wir',
    id: 'UnhingedVortex',
    cost: 7,
    effect: `
      <p>
        Dowolny sojusznik dobiera trzy karty. Następnie odrzuca kartę z ręki.
        <span class="or">ALBO</span>
        Możesz wzmocnić Bramę dowolnego sojusznika. Dowolny sojusznik może 
        przywrócić na rękę kartę ze swojego stosu kart odrzuconych.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Obronny Mróz',
    id: 'FortifiedFrost',
    cost: 2,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 2 obrażenia.<br />
        Możesz odrzucić kartę z ręki. Jeśli to zrobisz, zadaj 1 dodatkowe obrażenie.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Złączona Burza',
    id: 'PairedStorm',
    cost: 3,
    effect: `
      <p>
        <b>Więż</b> <span class="hint">(Dwa Zaklęcia z cechą Więź mogą zostać przygotowane na tej samej Bramie.)</span>
      </p>
      <p>
        <b>Aktywacja:</b> Zadaj 2 obrażenia.<br />
        Jeśli aktywowałeś Złączoną Burzę po raz DRUGI w tej turze, 
        zadaj dodatkowe 2 obrażenia.
      </p>
    `,
    keywords: ['link'],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Wykrzywione Kły',
    id: 'TwistedFang',
    cost: 4,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.<br />
        Jeśli stos zasobów tej karty jest wyczerpany, zadaj 1 dodatkowe obrażenie.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Roztrzaskujący Pocisk',
    id: 'ShatteringBolt',
    cost: 4,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 2 obrażenia.<br />
        Możesz zniszczyć kartę ze swojej ręki.
        <span class="or">ALBO</span>
        <b>Aktywacja:</b> Odrzuć Klejnot z ręki.<br />
        Jeśli to zrobisz, zadaj 4 obrażenia.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Wewnętrzny Zapłon',
    id: 'InfusedIgnition',
    cost: 4,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.<br />
        Jeśli Xaxos Wygnaniesz ma nie więcej niż 4 Ładunki, otrzymuje 1 Ładunek.
      </p>
    `,
    keywords: ['xaxos'],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Błyskawica',
    id: 'LightningArrow',
    cost: 5,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.<br />
        Możesz odrzucić kartę z ręki. Jeśli to zrobisz, Gravehold otrzymuje 1 żywotności.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Promienisty Przepływ',
    id: 'RadiantConflux',
    cost: 5,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.<br />
        Dowolny sojusznik może dobrać kartę, a następnie odrzuca kartę z ręki.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Niestabilna Szczelina',
    id: 'UnstableRift',
    cost: 5,
    effect: `
      <p>
        Gdy przygotowane: na koniec swojej fazy aktywacji 
        zadaj 1 obrażenie i otrzymaj 1 <span class="aether">&AElig;</span>.<br />
        <b>Aktywacja:</b> Zadaj 4 obrażenia.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Zgromadzona Wola',
    id: 'GatheredWill',
    cost: 5,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 2 obrażenia.<br />
        Możesz pozyskać Zaklęcie z dowolnego stosu zasobów, o koszcie 4 <span class="aether">&AElig;</span> 
        lub mniej i umieścić je na wierzchu swojej talii.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Tornado Przenikliwości',
    id: 'TornadoOfInsight',
    cost: 6,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 5 obrażeń.<br />
        Jeśli masz wszystkie Bramy otwarte, otrzymujesz 1 Ładunek.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Usprawniony Intelekt',
    id: 'HastedIntellect',
    cost: 6,
    effect: `
      <p>
        Gdy przygotowane: kiedy pozyskujesz kartę, możesz ją umieścić
        na wierzchu swojej talii.<br />
        <b>Aktywacja:</b> Zadaj 4 obrażenia.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Rój Płomieni',
    id: 'SwarmOfFlame',
    cost: 6,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 5 obrażeń.<br />
        Możesz aktywować przygotowane Zaklęcie dowolnego gracza o koszcie 5 <span class="aether">&AElig;</span> lub mniej.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Tajemny Przekaźnik',
    id: 'ArcaneRelay',
    cost: 8,
    effect: `
      <p>
        <b>Aktywacja:</b> Dowolny sojusznik dobiera kartę, a następnie ujawnia swoją rękę.<br />
        Zadaj 4 obrażenia. Zadaj 1 dodatkowe obrażenie za każdą kartę na ręce tego sojusznika,
        której koszt to 1 <span class="aether">&AElig;</span> lub więcej.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Oszałamiający Wybuch',
    id: 'DizzyingBurst',
    cost: 8,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 6 obrażeń.<br />
        Odkryj karty z talii tur.<br />
        Odłóż je w dowolnej kolejności.
      </p>
    `,
    keywords: [],
  },
]
