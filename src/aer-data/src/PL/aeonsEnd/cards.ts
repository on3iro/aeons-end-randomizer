import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Skupisko Diamentów',
    id: 'DiamondCluster',
    cost: 4,
    effect: `
        <p>
          Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
          Jeżeli zagrałeś Skupisko Diamentów po raz DRUGI w jednej turze, otrzymujesz dodatkowo 2 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Arka Chaosu',
    id: 'ChaosArc',
    cost: 6,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
      Zadaj 2 dodatkowe obrażenia za każde zaklęcie przygotowane na przylegających Bramach.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Podpalenie',
    id: 'Ignite',
    cost: 4,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
          Dowolny sojusznik otrzymuje 1 ładunek.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Kradzież Świadomości',
    id: 'EssenceTheft',
    cost: 5,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
          Możesz odrzucić kartę z ręki. Jeżeli to zrobisz, dowolny gracz otrzymuje 1 punkt życia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Ognisty Rubin',
    id: 'SearingRuby',
    cost: 4,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>, który może zostać wykorzystany wyłącznie do pozyskania Zaklęcia.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Dziki Piorun',
    id: 'FeralLightning',
    cost: 5,
    effect: `
        <p>
          To zaklęcie może zostać przygotowane na zamkniętej Bramie, bez jej wzmacniania.<br/>
          <b>Aktywacja:</b> Zadaj 3 obrażenia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Zmysł Wymiarów',
    id: 'PlanarInsight',
    cost: 6,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
        Zadaj po 1 dodatkowym obrażeniu za każdą swoją otwartą Bramę.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Upiorny Pogłos',
    id: 'SpectralEcho',
    cost: 3,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
          Możesz zniszczyć kartę na ręce.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Płonący Opal',
    id: 'BurningOpal',
    cost: 5,
    effect: `
      <p>
      Otrzymujesz 3 <span class="aether">&AElig;</span>.<br/>
      Możesz odrzucić dowolną kartę z ręki, aby sojusznik mógł dobrać kartę.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Nieokiełznana Czeluść',
    id: 'ConsumingVoid',
    cost: 7,
    effect: `
      <p>
      <b>Aktywacja:</b> Zniszcz do dwóch kart na ręce.<br/>
      Zadaj 3 obrażenia za każdą zniszczoną w ten sposób kartę.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Niestabilny Pryzmat',
    id: 'UnstablePrism',
    cost: 3,
    effect: `
      <p>
      Dwukrotnie zagraj kartę Klejnotu z ręki, a następnie zniszcz ją.
        <span class="or">ALBO</span>
        Otrzymujesz 2 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Przyćmiony Szafir',
    id: 'CloudedSapphire',
    cost: 6,
    effect: `
      <p>
      Otrzymujesz 3 <span class="aether">&AElig;</span>.<br/>
      Jeżeli zagrałeś Przyćmiony Szafir po raz PIERWSZY w tej turze, dowolny sojusznik otrzymuje 1 Ładunek.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Amulet Maga',
    id: 'MagesTalisman',
    cost: 5,
    effect: `
      <p>
        Otrzymujesz 1 Ładunek.<br/>
        Dowolny sojusznik otrzymuje 1 Ładunek.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Zakrzywiony Sztylet',
    id: 'FlexingDagger',
    cost: 2,
    effect: `
      <p>
        Podczas tej tury, następne twoje wzmocnienie lub otwarcie Bramy kosztuje o 3 
        <span class="aether">&AElig;</span> mniej.
        <span class="or">ALBO</span>
        Zniszcz tę kartę. Zadaj 1 obrażenie.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Pnącze Magmy',
    id: 'LavaTendril',
    cost: 4,
    effect: `
      <p>
        Gdy przygotowane: na końcu swojej fazy aktywacji zadaj 1 obrażenie.<br/>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Wir w Butelce',
    id: 'BottledVortex',
    cost: 3,
    effect: `
      <p>
        Zniszcz tę kartę.<br/>
        Zniszcz do dwóch kart ze swojej ręki lub stosu kart odrzuconych.<br/>
        Dobierz kartę.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Nieprzeniknione Ogniwo',
    id: 'ArcaneNexus',
    cost: 7,
    effect: `
      <p>
      Gdy przygotowane: raz na turę, w swojej fazie głównej możesz wziąć z powrotem na rękę zagraną w tej turze kartę Klejnotu.<br/>
        <b>Aktywacja:</b> Zadaj 4 obrażenia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Mroczny Płomień',
    id: 'DarkFire',
    cost: 5,
    effect: `
        <p>
        <b>Aktywacja:</b> Odrzuć do dwóch kart z ręki.<br/>
        Zadaj po 3 obrażenia za każdą odrzuconą kartę.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Płomień Feniksa',
    id: 'PhoenixFlame',
    cost: 3,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
          Możesz odrzucić 1 Ładunek, aby zadać dodatkowe 2 obrażenia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Jadeit',
    id: 'Jade',
    cost: 2,
    effect: `
      <p>
        Otrzymujesz 2 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Poszerzone widzenie',
    id: 'AmplifyVision',
    cost: 4,
    effect: `
      <p>
      <b>Aktywacja:</b> Wzmocnij swoją zamkniętą Bramę o najniższym koszcie wzmocnienia.<br/>
      Zadaj 2 obrażenia.<br/>
      Jeżeli wszystkie twoje Bramy są otwarte, zadaj dodatkowo 1 obrażenie.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Bursztyn Vriswood',
    id: 'VriswoodAmber',
    cost: 3,
    effect: `
      <p>
        Gdy pozyskujesz tę kartę, możesz ją umieścić na wierzchu swojej talii.<br/>
        Otrzymujesz 2 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Kostur Spustoszenia',
    id: 'BlastingStaff',
    cost: 4,
    effect: `
      <p>
        Możesz aktywować Zaklęcie, które przygotowałeś podczas tej tury. W takim przypadku, to Zaklęcie zadaje dodatkowe 2 obrażenia.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Perła Poławiacza',
    id: 'SiftersPearl',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Każdy gracz odkrywa wierzchnią kartę swojej talii. Może ją odrzucić lub odłożyć na wierzch talii.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Ognisty Bicz',
    id: 'WildfireWhip',
    cost: 6,
    effect: `
      <p>
      Gdy przygotowane: możesz podczas fazy głównej swojej tury wydać 2 <span class="aether">&AElig;</span>, 
      aby aktywować przygotowane Zaklęcie dowolnego gracza.<br/>
        <b>Aktywacja:</b> Zadaj 4 obrażenia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Kula Wzmocnienia',
    id: 'FocusingOrb',
    cost: 4,
    effect: `
      <p>
        Wzmocnij Bramę dowolnego gracza.
        <span class="or">ALBO</span>
        Zniszcz tę kartę. Gravehold otrzymuje 3 żywotności.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Mistrz Zapomnienia',
    id: 'OblivionSwell',
    cost: 5,
    effect: `
      <p>
      Gdy przygotowane: raz na turę, w swojej fazie głównej możesz otrzymać 1 
      <span class="aether">&AElig;</span>.<br/>
      <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
      Możesz odrzucić Klejnot, aby zadać dodatkowe obrażenia równe jego kosztowi.
        </p>
      `,
    keywords: [],
  },
]
