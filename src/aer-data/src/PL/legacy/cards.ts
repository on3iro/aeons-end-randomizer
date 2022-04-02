import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Promienny Radyt',
    id: 'BranchingRadite',
    cost: 4,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>. <br/>
          Jeżeli masz 2 lub więcej przygotowanych Zaklęć, otrzymujesz dodatkowo 1 
          <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Czakram Ognia',
    id: 'FireChakram',
    cost: 2,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 2 obrażenia.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Świetlisty Nóż',
    id: 'BraneKnife',
    cost: 3,
    effect: `
        <p>
          Otrzymujesz 1 Ładunek. <br/>
          Dowolny sojusznik wzmacnia swoją zamkniętą Bramę o najniższym koszcie wzmocnienia.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Tafla Pełni',
    id: 'FulmiteSlab',
    cost: 6,
    effect: `
        <p>
          Otrzymujesz 1 <span class="aether">&AElig;</span>. Otrzymujesz 2 Impulsy. <br/>
          Do końca tury, możesz odrzucić 1 Impuls, aby otrzymać 1 <span class="aether">&AElig;</span>. Możesz to zrobić dowolną liczbę razy.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Złocony Marmur',
    id: 'GildedMarble',
    cost: 6,
    effect: `
        <p>
          Otrzymujesz 3 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Przekaźnik Napięcia',
    id: 'VoltaicRelay',
    cost: 4,
    effect: `
        <p>
          Dowolny gracz otrzymuje 3 Impulsy. <br/>
          Ten sam gracz może odrzucić 1 Impuls. Jeżeli to zrobi, niszczy kartę z ręki.
        </p>
      `,
    keywords: ['strong', 'pulse'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Iskra Życia',
    id: 'SparkingSiphon',
    cost: 3,
    effect: `
        <p>
          Gdy pozyskujesz tę kartę, otrzymujesz 2 Imulsy. <br/>
          <b>Aktywacja:</b> Zadaj 2 obrażenia. <br/>
          Możesz odrzucić 1 Impuls. Jeżeli to zrobisz, dowolny gracz otrzymuje 1 punkt życia.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Jedność Bram',
    id: 'BreachCommunion',
    cost: 4,
    effect: `
        <p>
          Gdy przygotowane: raz na turę, w swojej fazie głównej, możesz otrzymać 1 Impuls. <br/>
          <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
          Możesz odrzucić 2 Impulsy. Jeżeli to zrobisz, zadaj 3 dodatkowe obrażenia.
        </p>
      `,
    keywords: ['strong', 'pulse'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Piekielne Lustro',
    id: 'InfernalMirror',
    cost: 5,
    effect: `
        <p>
          Dowolny sojusznik otrzymuje 1 Ładunek. Dowolny gracz otrzymuje 2 Impulsy.
          Możesz odrzucić 2 Impulsy. Jeżeli to zrobisz, aktywuj przygotowane Zaklęcie dowolnego gracza. 
          To Zaklęcie zadaje 1 dodatkowe obrażenie.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Chowanica',
    id: 'Geophage',
    cost: 3,
    effect: `
        <p>
          Otrzymujesz 1 <span class="aether">&AElig;</span>. <br/>
          Możesz zniszczyć Klejnot z ręki.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Transfuzja Mocy',
    id: 'ForceTransfusion',
    cost: 4,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 3 obrażenia. <br/>
          Jeżeli masz 3 lub więcej Ładunków, otrzymujesz 1 Ładunek.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Grys Przewodzący',
    id: 'ConductiveGrit',
    cost: 3,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>. Otrzymujesz 1 Impuls.
          <span class="or">ALBO</span>
          Możesz odrzucić 1 Impuls. Jeżeli to zrobisz, otrzymujesz 3
          <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Starożytny Cyjanolit',
    id: 'AncientCyanolith',
    cost: 3,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Eteryczna Ręka',
    id: 'EtherealHand',
    cost: 6,
    effect: `
        <p>
          Dowolny sojusznik dobiera dwie karty.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Zakrzywiony Promień',
    id: 'BendingBeam',
    cost: 5,
    effect: `
        <p>
          <b>Ąktywacja:</b> Zadaj 2 obrażenia. <br/>
          Jeżeli to Zaklęcie zostało aktywowane na otwartej Bramie III, 
          zadaj 3 dodatkowe obrażenia.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Splątany Okruch',
    id: 'EntangledShard',
    cost: 4,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>. Jeżeli masz 3 lub więcej Ładunków,
          otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Tajemna Salwa',
    id: 'ArcaneSalvo',
    cost: 5,
    effect: `
        <p>
          Gdy przygotowane: raz na turę, w swojej fazie głównej,
          możesz umieścić Artefakt zagrany w tej turze lub Artefakt z twojego stosu kart odrzuconych,
          na wierzchu swojej talii. <br/>
          <b>Aktywacja:</b> Zadaj 4 obrażenia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Fasetkowy Portalit',
    id: 'PhasedPortalite',
    cost: 4,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>. Jeżeli
          twoja Brama III jest otwarta otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Pyrowidmo',
    id: 'PyroGeist',
    cost: 6,
    effect: `
        <p>
          Gdy przygotowujesz to Zaklęcie, zadaj 1 obrażenie. <br/>
          <b>Aktywacja:</b> Zadaj 1 obrażenie. Zadaj 2 obrażenia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Rozbłysk Bram',
    id: 'BreachFlare',
    cost: 3,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 2 obrażenia. <br/>
          Wzmocnij Bramę III dowolnego gracza.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Przysięga Grzmotu',
    id: 'ThunderousOath',
    cost: 8,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 6 obrażeń.<br/> 
          Otrzymujesz 1 Impuls.<br/>
          Możesz odrzucić dowolną liczbę Impulsów. Jeżeli to zrobisz, 
          dowolny sojusznik dobiera karty w liczbie odrzuconych w ten sposób Impulsów.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Oszałamiający Torporen',
    id: 'SoothingTorporene',
    cost: 3,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>.
          <span class="or">ALBO</span>
          Ucisz Poplecznika.
        </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Krzemień Łukowy',
    id: 'ArcingSilicate',
    cost: 4,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>. Otrzymujesz 1 Impuls. <br/>
          Możesz odrzucić dowolną liczbę Impulsów. Zadaj obrażenia w liczbie równej liczbie
          odrzuconych w ten sposób Impulsów.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Mglisty Wir',
    id: 'WarpingHaze',
    cost: 3,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 2 obrażenia. <br/>
          Jeżeli masz dwa lub więcej innych przygotowanych Zaklęć, zadaj 1 dodatkowe obrażenie.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Spopielająca Pięść',
    id: 'IncineratingFist',
    cost: 4,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 3 obrażenia.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Stabilizator Rzeczywistości',
    id: 'RealityStabilizer',
    cost: 6,
    effect: `
        <p>
          Otrzymujesz 2 Ładunki. <br/>
          Ucisz Poplecznika.
        </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Koniunkcja Bram',
    id: 'BreachCollision',
    cost: 7,
    effect: `
        <p>
          Gdy pozyskujesz to Zaklęcie, możesz umieścić je na wierzchu stosu kart odrzuconych dowolnego gracza. <br/>
          <b>Aktywacja:</b> Zadaj 5 obrażeń. <br/>
          Gravehold otrzymuje 1 żywotności.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Ogniste Rozstrzygnięcie',
    id: 'FieryConclusion',
    cost: 5,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
          Jeżeli co najmniej trzy stosy na rynku zasobów są puste, zadaj 3 dodatkowe obrażenia.
        </p>
      `,
    keywords: ['strong'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Gwiezdny Szał',
    id: 'StarfireFrenzy',
    cost: 6,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
          Możesz odrzucić Zaklęcie z ręki. Jeżeli to zrobisz, zadajesz 1 dodatkowe obrażenie oraz otrzymujesz 1 Ładunek.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Krzucha Mieszanka',
    id: 'CrumblingCompound',
    cost: 5,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>. Możesz odrzucić
          Klejnot z ręki. Jeżeli to zrobisz, otrzymujesz dodatkowo 2 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Prorocza Soczewka',
    id: 'PropheticLens',
    cost: 4,
    effect: `
        <p>
          Otrzymujesz 1 Ładunek. <br/>
          Odkryj wierzchnią kartę ze swojej talii. Możesz ją zniszczyć.
          Jeżeli tego nie zrobisz, otrzymujesz 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['strong'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Akumulator Adrenalinowy',
    id: 'AdrenalBatteries',
    cost: 7,
    effect: `
        <p>
          Otrzymujesz 2 Impulsy. Możesz odrzucić 4 Impulsy. Jeżeli to zrobisz, otwórz zamkniętą
          Bramę dowolnego gracza. Następnie pozyskaj Zaklęcie z dowolnego stosu rynku zasobów o koszcie
          5 <span class="aether">&AElig;</span> lub mniejszym i przygotuj to Zaklęcie na otwartej Bramie dowolnego gracza.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Wytworny Lumen',
    id: 'RefinedLumenium',
    cost: 5,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>. <br/>
          Dowolny sojusznik dobiera kartę.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Młyn Pustki',
    id: 'VoidMill',
    cost: 5,
    effect: `
        <p>
          Wzmocnij Bramę dowolnego gracza. <br/>
          Dwóch różnych graczy może zniszczyć wierzchnią kartę z własnych stosów kart odrzuconych.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Węzeł Grawitacyjny',
    id: 'GravityNode',
    cost: 5,
    effect: `
        <p>
          <b>Aktywacja:</b> Dowolny gracz odrzuca kartę z ręki. 
          Jeżeli to zrobi, zadaj 4 obrażenia.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Łącze neuronowe',
    id: 'NeuralWreath',
    cost: 4,
    effect: `
        <p>
          Wzmocnij Bramę dowolnego gracza. Dowolny gracz może przygotować Zaklęcie z ręki.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Sfera Inwersji',
    id: 'SphereOfInversion',
    cost: 9,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 7 obrażeń. <br/>
          Dowolny sojusznik może zniszczyć kartę z ręki. Jeżeli to zrobi, otrzymuje 2 punkty życia.
        </p>
      `,
    keywords: ['strong'],
  },
]
