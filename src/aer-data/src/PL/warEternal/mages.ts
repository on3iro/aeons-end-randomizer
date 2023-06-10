import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'WE',
    name: 'Dezmodia',
    id: 'Dezmodia',
    mageTitle: 'Zrodzona z Otchłani',
    ability: `
        <h2>Runiczna Nawałnica</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Dowolny gracz niszczy swoją otwartą Bramę I lub II i bierze z powrotem na rękę Zaklęcie lub Zaklęcia, 
        jeżeli były na niej przygotowane. Ten gracz otrzymuje Bramę Runiczną i umieszcza ją w miejscu zniszczonej Bramy. 
        Następnie może przygotować na dowolnej Bramie Zaklęcie z ręki.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Strzęp Zapomnienia',
        expansion: 'WE',
        id: 'OblivionShared',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 2 <span class="aether">&AElig;</span>który nie może zostać wykorzystany do pozyskania Artefaktu lub Zaklęcia.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Garu',
    id: 'Garu',
    mageTitle: 'Zaprzysiężony Obrońca',
    ability: `
        <h2>Kolosalna Siła</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Odrzuć do czterech ze swoich przygotowanych Zaklęć.</p>
        <p>Zadaj 2 obrażenia plus dodatkowe 4 obrażenia za każde odrzucone Zaklęcie. 
        Rozdziel te obrażenia dowolnie pomiędzy Nemezis i Popleczników.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Pochodnia',
        expansion: 'WE',
        id: 'Torch',
        cost: 0,
        effect: `
            <p>
              <b>Aktywacja:</b> Zadaj 1 obrażenie.
              <span class="or">ALBO</span>
              <b>Aktywacja:</b> Wzmocnij bramę dowolnego gracza.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Gex',
    id: 'Gex',
    mageTitle: 'Doradca Magów Bram',
    ability: `
        <h2>Rzemieślniczy etos</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Zniszcz do dwóch kart o koszcie 0 <span class="aether">&AElig;</span> ze swojego stosu kart odrzuconych.</p>
        <p>Dowolny sojusznik dobiera jedną kartę i otrzymuje 2 punkty życia.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Rozbita Geoda',
        expansion: 'WE',
        id: 'ShatteredGeode',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
              Możesz wziąć na rękę wierzchnią kartę ze stosu kart odrzuconych dowolnego sojusznika.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Mazahaedron',
    id: 'Mazahaedron',
    mageTitle: 'Mistyk Kamiennego Kręgu',
    ability: `
        <h2>Podziemna Mantra</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Możesz pozyskać Klejnot o koszcie 4 <span class="aether">&AElig;</span> lub 
        mniejszym z dowolnego stosu zasobów.</p>
        <p>Gravehold otrzymuje 4 żywotności.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Odłamek Serca Świata',
        expansion: 'WE',
        id: 'WorldheartShard',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.
              <span class="or">ALBO</span>
              Otrzymujesz 2 <span class="aether">&AElig;</span>, który może zostać wykorzystany wyłącznie do pozyskania karty. 
              Umieść następną kartę, którą pozyskasz w tej turze, na wierzchu stosu kart odrzuconych dowolnego sojusznika.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Mist',
    id: 'MistWE',
    mageTitle: 'Krocząca Przez Otchłań',
    ability: `
        <h2>Piętno odmienności</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Aktywuj do trzech różnych Zaklęć przygotowanych przez dowolnych graczy. 
        Każde z tych aktywowanych Zaklęć umieść na ręce dowolnego sojusznika lub sojuszników.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Ametystowa Perfekcja',
        expansion: 'WE',
        id: 'AmethystParagon',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
              Dowolny sojusznik może przygotować Zaklęcie z ręki na swojej otwartej lub zamkniętej Bramie/Bramach.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Quilius',
    id: 'Quilius',
    mageTitle: 'Zabójczyni Magów Bram',
    ability: `
        <h2>Śmiercionośna Przysięga</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Zadaj 2 obrażenia za każdy żeton Trofeum, który posiadasz.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Wygaszenie',
        expansion: 'WE',
        id: 'Extinguish',
        cost: 0,
        effect: `
            <p>
              <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
              Jeżeli to obrażenie spowoduje, że Poplecznik z talii Nemezis zostanie odrzucony, Quilius otrzymuje żeton Trofeum.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Ulgimor',
    id: 'Ulgimor',
    mageTitle: 'Cienista Bestia',
    ability: `
        <h2>Upiorny Całun</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Odzyskujesz 6 punktów życia.</p>
        <p>Jeżeli jesteś wyczerpany, zamiast ciebie dowolny sojusznik odzyskuje 5 punktów życia.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Odłamek Węgla',
        expansion: 'WE',
        id: 'CoalShard',
        cost: 0,
        effect: `
            <p>
              Jeżeli masz co najwyżej 2 punkty życia, zniszcz tę kartę. W przeciwnym wypadku, otrzymujesz  
              3 <span class="aether">&AElig;</span>, 1 Ładunek i 2 obrażenia.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Yan Magda',
    id: 'YanMagda',
    mageTitle: 'Oświecony Wygnaniec',
    ability: `
        <h2>Cesarski Rytuał</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Pozyskaj kartę z dowolnego stosu zasobów. Jeżeli masz cztery otwarte Bramy, dowolny sojusznik pozyskuje kartę 
        z dowolnego stosu zasobów i umieszcza ją na wierzchu swojej talii.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Rozblask',
        expansion: 'WE',
        id: 'Illuminate',
        cost: 0,
        effect: `
            <p>
              Gdy przygotowane: za każdym razem gdy wzmacniasz lub otwierasz jedną ze swoich Bram w trakcie swojej tury, zadaj 1 obrażenie.<br/>
              <b>Aktywacja:</b> Zadaj 1 obrażenie.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
