import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'NA',
    name: 'Sahala',
    id: 'Sahala',
    mageTitle: 'Wyrocznia Magów Bram',
    ability: `
        <h2>Gwiezdna Więź</h2>
        <p class="ability-activation">Użyj podczas swojej fazy aktywacji albo fazy głównej:</p>
        <p>Odkryj trzy wierzchnie karty ze swojej talii.
        Weź na rękę odkryte w ten sposób Zaklęcie.
        Jeśli na Niebiańskiej Bramie nie masz przygotowanych Zaklęć,
        przygotuj na Otwartej Niebiańskiej Bramie do dwóch Zaklęć z ręki.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Iskrzący Meteoryt',
        expansion: 'NA',
        id: 'SparklingMeteorite',
        cost: 0,
        effect: `<p>Otrzymujesz 1 <span class="aether">&AElig;</span>.
            <span class="or">ALBO</span>
            Otrzymujesz 3 <span class="aether">&AElig;</span>, które możesz wydać tylko na wzmocnienie albo otwarcie Bramy.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'NA',
    name: 'Gygar',
    id: 'Gygar',
    mageTitle: 'Mistrz Pływów',
    ability: `
        <h2>Wezbranie Mocy</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Umieść żeton Wezbrania na twojej Starożytnej Bramie.
        <span class="or">ALBO</span>
        Aktywuj Zaklęcie przygotowane na twojej Starożytnej Bramie. Otrzymujesz 2 Ładunki.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Przypływ Energii',
        expansion: 'NA',
        id: 'TidalSurge',
        cost: 0,
        effect: `<p><b>Aktywacja:</b> Otrzymujesz 1 Ładunek.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'NA',
    name: 'Soskel',
    id: 'Soskel',
    mageTitle: 'Arystokrata',
    ability: `
        <h2>Pieczęć Energii</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Umieść żeton Energii na Bramie dowolnego gracza, na której nie ma takiego żetonu.
        <span class="or">ALBO</span>
        Odrzuć żeton Energii z Bramy dowolnego gracza. Ten gracz odzyskuje 4 punkty życia.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Szczęśliwa Moneta',
        expansion: 'NA',
        id: 'LuckyCoin',
        cost: 0,
        effect: `<p>Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Możesz odrzucić 1 Ładunek. Jeśli to zrobisz, otrzymujesz dodatkowo 2 <span class="aether">&AElig;</span>.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'NA',
    name: 'Taqren',
    id: 'Taqren',
    mageTitle: 'Tarcza Magów Bram',
    ability: `
        <h2>Ogniskowanie Bramy</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Wzmocnij Bramę dowolnego gracza.
        Dowolny gracz odzyskuje 1 punkt życia za każdą twoją Otwartą Bramę.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Dar Ducha',
        expansion: 'NA',
        id: 'GiftOfSpirit',
        cost: 0,
        effect: `<p><b>Aktywacja:</b> Zadaj 1 obrażenie.
            <span class="or">ALBO</span>
            <b>Aktywacja:</b> Dowolny sojusznik dobiera kartę.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 2,
  },
  {
    expansion: 'NA',
    name: 'Talix',
    id: 'Talix',
    mageTitle: 'Sługa Gorejącego Łańcucha',
    ability: `
        <h2>Podniebny Popiół</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Zniszcz dwie Iskry z ręki. Jeśli to zrobisz, wtasuj swoją kartę tury do talii tur.
        <span class="or">ALBO</span>
        Gravehold odzyskuje 5 żywotności.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Relic',
        name: 'Ogniwo',
        expansion: 'NA',
        id: 'Furnacium',
        cost: 0,
        effect: `<p>Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Odrzuć do trzech Zaklęć z ręki.
            Otrzymujesz 1 <span class="aether">&AElig;</span> za każde odrzucone w ten sposób Zaklęcie. 
            Możesz położyć tę kartę na wierzchu swojej talii.`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'NA',
    name: 'Rhia',
    id: 'Rhia',
    mageTitle: 'Łowczyni Artefaktów',
    ability: `
        <h2>Uszlachetnienie</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Odłóż kartę z ręki albo stosu kart odrzuconych na odpowiedni stos zasobów. Jeśli odłożysz Artefakt,
        pozyskaj kartę z dowolnego stosu zasobów, której wartość jest o maksymalnie 
        3 <span class="aether">&AElig;</span> większa od wartości odłożonej karty. 
        W przeciwnym razie pozyskaj kartę z dowolnego stosu zasobów, której wartość
        jest o maksymalnie 2 <span class="aether">&AElig;</span> większa od wartości odłożonej karty. 
        Pozyskaną kartę dobierz na rękę.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Kieszeń Międzywymiarowa',
        expansion: 'NA',
        id: 'PlanarPocket',
        cost: 0,
        effect: `<p>Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
            Otrzymujesz dodatkowe 2 <span class="aether">&AElig;</span>, które możesz wydać tylko na pozyskanie Artefaktu.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'NA',
    name: 'Claudia',
    id: 'Claudia',
    mageTitle: 'Rzeźbiąca w Eterze',
    ability: `
        <h2>Eteryczna Eksplozja</h2>
        <p class="ability-activation">Użyj podczas fazy głównej dowolnego sojusznika:</p>
        <p>Ten sojusznik otrzymuje 2 <span class="aether">&AElig;</span>. Następnym razem, gdy w tej turze
        ten sojusznik zdobędzie kartę ze stosu zasobów, otrzymasz kopię tej karty ze stosu zasobów.
        <span class="or">ALBO</span>
        Ten sojusznik otrzymuje 5 <span class="aether">&AElig;</span>.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Eteroskop',
        expansion: 'NA',
        id: 'Aetherscope',
        cost: 0,
        effect: `<p>Otrzymujesz 1 <span class="aether">&AElig;</span>.
            <span class="or">ALBO</span>
            Dowolny sojusznik może odrzucić 1 Ładunek. Jeśli to zrobi, otrzymujesz 2 Ładunki.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'NA',
    name: 'Zgubiony',
    id: 'Lost',
    mageTitle: 'Żywa Kuźnia',
    ability: `
        <h2>Moc Skrom'N'Ości</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Dobierz na rękę do czterech kart o koszcie 0 <span class="aether">&AElig;</span> 
        ze stosu kart odrzuconych.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Serce Kuźni',
        expansion: 'NA',
        id: 'HeartForge',
        cost: 0,
        effect: `<p>Otrzymujesz 1 <span class="aether">&AElig;</span>.
            <span class="or">ALBO</span>
            Zniszcz Iskrę albo Kryształ z ręki. Dobierz na rękę kartę tego
            samego typu z talii Kuźnicy.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
]
