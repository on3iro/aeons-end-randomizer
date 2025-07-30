import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'O',
    name: 'Ilya',
    id: 'Ilya',
    mageTitle: '',
    abilityName: `Objęcia Życia`,
    abilityActivation: `Użyj podczas swojej fazy głównej:`,
    abilityEffect: `
      <p>
        Aktywuj wszystkie swoje przygotowane Zaklęcia, bez odrzucania ich. 
        Dowolny sojusznik bierze z powrotem na rękę kartę ze swojego stosu kart odrzuconych.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Spleciony Ametyst',
        expansion: 'O',
        id: 'EntwinedAmethyst',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Gdy odrzucisz tę kartę w trakcie tury sojusznika, otrzymujesz 1 Ładunek.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Spleciony Ametyst',
        expansion: 'O',
        id: 'EntwinedAmethyst',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Gdy odrzucisz tę kartę w trakcie tury sojusznika, otrzymujesz 1 Ładunek.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Okruch Mocy',
        expansion: 'O',
        id: 'TruliteOfForce',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Dowolny sojusznik może odrzucić kartę z ręki. Jeśli tak zrobi, otrzymujesz 1 <span class="aether">&AElig;</span>, 
            który może być wykorzystany wyłącznie do pozyskania Zaklęcia albo wzmocnienia lub otwarcia Bramy.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Okruch Mocy',
        expansion: 'O',
        id: 'TruliteOfForce',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Dowolny sojusznik może odrzucić kartę z ręki. Jeśli tak zrobi, otrzymujesz 1 <span class="aether">&AElig;</span>, 
            który może być wykorzystany wyłącznie do pozyskania Zaklęcia albo wzmocnienia lub otwarcia Bramy.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'O',
    name: 'Kel',
    id: 'Kel',
    mageTitle: '',
    abilityName: `Pokrzepienie Duszy`,
    abilityActivation: `Użyj podczas swojej fazy głównej:`,
    abilityEffect: `
      <p>
        Zabierz z powrotem na rękę do dwóch Klejnotów lub Artefaktów, które zagrałeś w tej turze.
        Dowolny sojusznik dobiera kartę i może przygotować Zaklęcie z ręki na otwartej albo zamkniętej Bramie.
      </p>
    `,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Spleciony Ametyst',
        expansion: 'O',
        id: 'EntwinedAmethyst',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Gdy odrzucisz tę kartę w trakcie tury sojusznika, otrzymujesz 1 Ładunek.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Spleciony Ametyst',
        expansion: 'O',
        id: 'EntwinedAmethyst',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Gdy odrzucisz tę kartę w trakcie tury sojusznika, otrzymujesz 1 Ładunek.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Okruch Energii',
        expansion: 'O',
        id: 'TruliteOfEnergy',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Dowolny sojusznik może odrzucić kartę z ręki. Jeśli tak zrobi, otrzymujesz 1 <span class="aether">&AElig;</span>, 
            który można wykorzystać tylko do pozyskania Klejnotu albo Artefaktu.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Okruch Energii',
        expansion: 'O',
        id: 'TruliteOfEnergy',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Dowolny sojusznik może odrzucić kartę z ręki. Jeśli tak zrobi, otrzymujesz 1 <span class="aether">&AElig;</span>, 
            który można wykorzystać tylko do pozyskania Klejnotu albo Artefaktu.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'O',
    name: "Z'hana",
    id: 'ZhanaO',
    mageTitle: '',
    abilityName: `Zapisanie`,
    abilityActivation: `Użyj podczas fazy głównej dowolnego gracza:`,
    abilityEffect: `
      <p>
        Gravehold otrzymuje 5 punktów żywotności. Umieść 2 żetony Glifu na wierzchu dowolnego stosu na rynku zasobów.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Rzeźbiarz Glifów',
        expansion: 'O',
        id: 'GlyphCarver',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.
            <span class="or">ALBO</span>
            Umieść 1 żeton Glifu na wierzchu dowolnego stosu na rynku zasobów.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Rzeźbiarz Glifów',
        expansion: 'O',
        id: 'GlyphCarver',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.
            <span class="or">ALBO</span>
            Umieść 1 żeton Glifu na wierzchu dowolnego stosu na rynku zasobów.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'O',
    name: 'Taqren',
    id: 'TaqrenO',
    mageTitle: '',
    abilityName: `Podtrzymanie`,
    abilityActivation: `Użyj podczas swojej fazy głównej:`,
    abilityEffect: `
      <p>
        Jeśli nie jesteś wyczerpany, otrzymujesz 3 punkty życia.<br />
        W przeciwnym razie Gravehold otrzymuje 3 punkty żywotności.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Wzmacniacz Mocy',
        expansion: 'O',
        id: 'EsotericAmplifier',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.<br />
            Możesz otrzymać 1 obrażenie.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'O',
    name: 'Qu',
    id: 'QuO',
    mageTitle: '',
    abilityName: `Spalanie Eteru`,
    abilityActivation: `Użyj na koniec swojej fazy dobierania:`,
    abilityEffect: `
      <p>
        Dobierz trzy karty.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Zew Pustki',
        expansion: 'O',
        id: 'CallOfTheVoid',
        cost: 0,
        effect: `
          <p>
            Gdy przygotowane: gdy po raz PIERWSZY w turze zagrywasz Klejnot albo Artefakt o koszcie 1 <span class="aether">&AElig;</span> 
            lub więcej, zagraj tę kartę dwukrotnie i odłóż ją na rynek zasobów.<br/>
            <b>Aktywacja:</b> Zadaj 1 obrażenie.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
  {
    expansion: 'O',
    name: 'Thraxir',
    id: 'Thraxir',
    mageTitle: '',
    abilityName: `Zrzucone Kajdany`,
    abilityActivation: `Aktywuj podczas swojej fazy głównej:`,
    abilityEffect: `
      <p>
        Aktywuj do trzech Zaklęć przygotowanych przez dowolnych graczy. Jeśli masz trzy otwarte bramy, 
        te Zaklęcia zadają po 1 dodatkowym obrażeniu.Jeśli masz cztery otwarte Bramy, 
        możesz zamiast tego aktywować do czterech Zaklęć, które zadają po 2 dodatkowe obrażenia.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Wtłoczenie Bezimiennego',
        expansion: 'O',
        id: 'NamelessSiphon',
        cost: 0,
        effect: `
          <p>
            Otrzymujesz 1 <span class="aether">&AElig;</span>.
            <span class="or">ALBO</span>
            Dowolny sojusznik może odrzucić kartę z ręki. Jeśli tak zrobi, wzmocnij jedną ze swoich Bram.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'O',
    name: 'Dezmodia',
    id: 'DezmodiaO',
    mageTitle: '',
    abilityName: `Wir Pustki`,
    abilityActivation: `Aktywuj podczas swojej fazy głównej:`,
    abilityEffect: `
      <p>
        Dowolny sojusznik dobiera trzy karty. Następnie umieść dowolną liczbę kart ze swojej ręki na jego ręce. 
        Na koniec, ten sojusznik umieszcza taką samą liczbę kart ze swojej ręki na twojej ręce.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Kłębiąca się Ciemność',
        expansion: 'O',
        id: 'SwirlingDarkness',
        cost: 0,
        effect: `
          <p>
            To Zaklęcie może być przygotowane na zamkniętej Bramie.<br />
            <b>Aktywacja:</b> Wzmocnij Bramę, z której zostało ono aktywowane.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
  {
    expansion: 'O',
    name: 'Arachnos',
    id: 'Arachnos',
    mageTitle: '',
    abilityName: `Wymazanie`,
    abilityActivation: `Użyj podczas swojej fazy głównej:`,
    abilityEffect: `
      <p>
        Aktywuj przygotowane Zaklęcie dowolnego gracza. To Zaklęcie zadaje 3 dodatkowe obrażenia.
      </p>
    `,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Harmonia',
        expansion: 'O',
        id: 'Convergence',
        cost: 0,
        effect: `
          <p>
            Gdy przygotowane: kiedy zagrywasz Klejnot albo Artefakt o koszcie 3 <span class="aether">&AElig;</span> lub więcej, 
            otrzymujesz 1 Ładunek.<br />
            <b>Aktywacja:</b> Zadaj 1 obrażenie.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
]
