import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Nieregularny Monokryształ',
    id: 'ErraticIngot',
    cost: 5,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Otrzymujesz dodatkowe 2 <span class="aether">&AElig;</span> jeżeli w stosie odrzuconych kart tur 
      jest przynajmniej jedna karta tury Nemezis.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Spopielające Cienie',
    id: 'ReduceToAsh',
    cost: 7,
    effect: `
      <p>
      Gdy przygotowane: na początku swojej fazy aktywacji odkryj wierzchnią kartę swojej talii. 
      Możesz zniszczyć odkrytą kartę.<br/>
        <b>Aktywacja:</b> Zadaj 4 obrażenia.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Rękawica Wiru Magii',
    id: 'VortexGauntlet',
    cost: 6,
    effect: `
      <p>
      Aktywuj przygotowane Zaklęcie dowolnego gracza.<br/>
      Zwróć to Zaklęcie na rękę tego gracza.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Zwęglenie',
    id: 'Carbonize',
    cost: 4,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
      Odkryj wierzchnią kartę talii tur. Możesz umieścić tę kartę na spodzie talii tur.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Equilibrium',
    id: 'Equilibrium',
    cost: 7,
    effect: `
      <p>
      Gdy przygotowane: za każdym razem gdy otrzymujesz obrażenia obniżasz je o 1 (do minimum 1).<br/>
        <b>Aktywacja:</b> Zadaj 4 obrażenia.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Szkło Wulkaniczne',
    id: 'VolcanicGlass',
    cost: 3,
    effect: `
      <p>
      Kiedy pozyskujesz tę kartę w swojej turze, możesz wydać 2 <span class="aether">&AElig;</span>. 
      Jeżeli to zrobisz, dowolny sojusznik także pozyskuje Szkło Wulkaniczne i umieszcza je na wierzchu swojej talii.<br/>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Sfera Konwekcji',
    id: 'ConvectionField',
    cost: 5,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 4 obrażenia.
        <span class="or">ALBO</span>
      <b>Aktywacja:</b> Zadaj 2 obrażenia. Dowolny sojusznik może zniszczyć kartę z ręki.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Postrzępiona Błyskawica',
    id: 'JaggedLightning',
    cost: 4,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
      Możesz odrzucić kartę z ręki. Jeżeli to zrobisz, dowolny gracz wzmacnia swoją zamkniętą Bramę o najniższym koszcie.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Krwawy Klejnot',
    id: 'BloodstoneJewel',
    cost: 6,
    effect: `
      <p>
      Kiedy pozyskujesz Krwawy Klejnot po raz PIERWSZY w swojej turze, otrzymujesz 3 <span class="aether">&AElig;</span>. <br/>
      Otrzymujesz 3 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Iskrzenie',
    id: 'Kindle',
    cost: 4,
    effect: `
      <p>
      Gdy przygotowane: podczas swojej fazy głównej możesz także przygotować jedną Iskrę na Bramie, na której to Iskrzenie.<br/>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Myślokształtny Chowaniec',
    id: 'ThoughtformFamiliar',
    cost: 3,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
      Zadaj 1 dodatkowe obrażenie za każde inne twoje przygotowane Zaklęcie.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Krystalizacja',
    id: 'Crystallize',
    cost: 8,
    effect: `
      <p>
      To Zaklęcie musi być przygotowane na dwóch sąsiadujących Bramach w taki sposób, 
      aby karta dotykała obu Bram. Ta karta w pełni zajmuje obie Bramy.<br/>
      <b>Aktywacja:</b> Dowolny sojusznik odkrywa swoje karty na ręku.<br/>
      Zadaj 2 obrażenia za każdy Klejnot na ręce tego sojusznika.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Ognisty Szturm',
    id: 'FieryTorrent',
    cost: 5,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
      Zadaj dodatkowe 2 obrażenia za każdy inny Ognisty Szturm przygotowany przez dowolnego gracza.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Iglica Świętego Ognia',
    id: 'CelestialSpire',
    cost: 5,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
      Jeżeli stos zasobów tej karty jest pusty, dowolny sojusznik dobiera kartę.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Przywołanie Zagubionych Dusz',
    id: 'ConjureTheLost',
    cost: 6,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 5 obrażeń.<br/>
      Możesz zniszczyć tę kartę. Jeżeli to zrobisz, Gravehold otrzymuje 4 żywotności.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Kuźnia Energetyczna',
    id: 'NovaForge',
    cost: 6,
    effect: `
      <p>
      Gdy przygotowane: raz na turę podczas swojej fazy głównej możesz otrzymać 2 
      <span class="aether">&AElig;</span>, które możesz użyć tylko, aby pozyskać Zaklęcie.<br/>
        <b>Aktywacja:</b> Zadaj 4 obrażenia.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Brylant Grozy',
    id: 'DreadDiamond',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Możesz odrzucić przygotowane zaklęcie. Jeżeli to zrobisz otrzymujesz dodatkowy 1  
      <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Kompas z Kamiennego Kręgu',
    id: 'CairnCompass',
    cost: 4,
    effect: `
      <p>
      Dowolny sojusznik może przygotować Zaklęcie ze swojego stosu kart odrzuconych na swojej otwartej 
      lub zamkniętej Bramie/Bramach.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Szlaka Skorii',
    id: 'ScoriaSlag',
    cost: 4,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Jeżeli rząd kart Nemezis jest wyższy niż 1, otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Ruda Bram',
    id: 'BreachOre',
    cost: 4,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      <span class="or">ALBO</span>
      Wzmocnij swoją zamkniętą bramę o najniższym koszcie wzmocnienia.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Bestiołap',
    id: 'FiendCatcher',
    cost: 3,
    effect: `
      <p>
      Możesz zniszczyć jedną kartę ze swojej ręki lub stosu kart odrzuconych.<br/>
      Odkryj wierzchnią kartę talii tur. Jeżeli odkryłeś kartę tury Nemezis, możesz umieścić tę kartę na spodzie talii tur.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Fala Pirotechniczna',
    id: 'PyrotechnicSurge',
    cost: 4,
    effect: `
      <p>
      To Zaklęcie musi być przygotowane na dwóch sąsiadujących Bramach w taki sposób, 
      aby karta dotykała obu Bram. Ta karta w pełni zajmuje obie Bramy.<br/>
      <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
      Możesz zniszczyć kartę ze swojego stosu kart odrzuconych.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Zorza',
    id: 'Aurora',
    cost: 5,
    effect: `
      <p>
      Gdy przygotowane: raz na turę w trakcie swojej fazy głównej możesz otrzymać 1 Ładunek.<br/>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Zwój Konklawe',
    id: 'ConclaveScroll',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 1 Ładunek.<br/>
      Jeżeli stos zasobów tej kart jest pusty, możesz zniszczyć wierzchnią kartę stosu kart odrzuconych dowolnego sojusznika.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Pierwotny Fetysz',
    id: 'PrimordialFetish',
    cost: 4,
    effect: `
      <p>
      Wzmocnij Bramę dowolnego gracza.
        <span class="or">ALBO</span>
      Zniszcz tę kartę. Otrzymujesz 3 punkty życia.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Zamarznięty Melafir',
    id: 'FrozenMagmite',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Następną kartę, którą pozyskasz w tej turze, możesz położyć na wierzchu swojej talii.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Totem Maga',
    id: 'MagesTotem',
    cost: 2,
    effect: `
      <p>
      Zniszcz Klejnot lub Artefakt, który zagrałeś w tej turze.
        <span class="or">ALBO</span>
      Zniszcz tę kartę. Gravehold otrzymuje 1 żywotności.
      </p>
      `,
    keywords: [],
  },
]
