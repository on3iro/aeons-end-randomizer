import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Skryty Syjonit',
    id: 'LurkingSionite',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Jeśli w stosie kart odrzuconych dowolnego sojusznika znajduje się Skryty Syjonit,
      otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Surowy Kryształ Gromu',
    id: 'UnrefinedBlaststone',
    cost: 6,
    effect: `
      <p>
      Otrzymujesz 3 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
      Zniszcz kartę ze stosu tej karty na rynku zasobów. Jeżeli to zrobisz, zadaj 3 obrażenia.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Egzogranit',
    id: 'Exogranite',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>
      <span class="or">ALBO</span>
      Zniszcz tę kartę. Otrzymujesz 3 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Powracający Jaspis',
    id: 'RecurringJasper',
    cost: 4,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Jeśli na wierzchu twojego stosu kart odrzuconych znajduje się Zaklęcie, możesz położyć ten Klejnot na wierzchu swojej talii.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Naładowany Rubid',
    id: 'EnergizedRubidium',
    cost: 5,
    effect: `
      <p>
      Otrzymujesz 3 <span class="aether">&AElig;</span>.<br/>
      Dowolny sojusznik może odrzucić kartę z ręki. Jeśli to zrobi, otrzymuje 1 Ładunek.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Rezonująca Perła',
    id: 'ResonantPearl',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Dowolny sojusznik może odrzucić Rezonującą Perłę z ręki, by dobrać kartę. 
        Jeśli to zrobi, otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Uwięziony Ognik',
    id: 'CagedFire',
    cost: 3,
    effect: `
      <p>
      Zniszcz wierzchnią kartę ze stosu kart odrzuconych dowolnego gracza.
        <span class="or">ALBO</span>
      Zniszcz tę kartę. Otrzymujesz 2 punkty życia.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Paciorki Mocy',
    id: 'GalvanizedBauble',
    cost: 3,
    effect: `
      <p>
      Wzmocnij Bramę dowolnego sojusznika.
        <span class="or">ALBO</span>
      Aktywuj przygotowane Zaklęcie dowolnego gracza. Możesz je zniszczyć.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Przekaźnik Eteru',
    id: 'AetherConduit',
    cost: 4,
    effect: `
      <p>
      <b>Przyłącz</b> tę kartę do Bramy dowolnego gracza.
      </p>
      <p>
      Gdy na tej Bramie zostanie aktywowane Zaklęcie, gracz, który je aktywował, otrzymuje 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: ['attach'],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Kielich Życia',
    id: 'WellOfEnergy',
    cost: 7,
    effect: `
      <p>
      Gravehold otrzymuje 2 punkty żywotności.
        <span class="or">ALBO</span>
      Dowolny gracz otrzymuje 2 punkty życia.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Przekaźnik Bólu',
    id: 'PainConduit',
    cost: 3,
    effect: `
      <p>
      <b>Przyłącz</b> tę kartę do Bramy dowolnego gracza.
      </p>
      <p>
      Aktywowane z tej Bramy Zaklęcie zadaje 2 dodatkowe obrażenia. Po rozpatrzeniu efektu odrzuć tę kartę.
      </p>
      `,
    keywords: ['attach'],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Przekaźnik Zaklęć',
    id: 'LinkConduit',
    cost: 6,
    effect: `
      <p>
      <b>Przyłącz</b> tę kartę do Bramy dowolnego gracza.
      </p>
      <p>
      Na tej Bramie można przygotować dwa Zaklęcia.
      </p>
      `,
    keywords: ['attach'],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Kryształowa Galaktyka',
    id: 'MarbleGalaxy',
    cost: 2,
    effect: `
      <p>
      Dowolny sojusznik może odrzucić Kryształową Galaktykę z ręki, by dobrać kartę.<br/>
      Otrzymujesz 1 Ładunek albo wzmocnij swoją zamkniętą Bramę o najniższym koszcie wzmocnienia.
      Jeśli sojusznik odrzucił Kryształową Galaktykę, rozpatrz oba efekty.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Potop Potęgi',
    id: 'DelugeOfPower',
    cost: 6,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
        Dowolny sojusznik może odrzucić do dwóch kart z ręki.
        Dobiera kartę z talii za każdą odrzuconą w ten sposób kartę.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Podwójna Niespodzianka',
    id: 'ReverberatingShock',
    cost: 4,
    effect: `
      <p>
        <b>Echo</b>
      </p>
      <p>
        <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
        Otrzymujesz 1 <span class="aether">&AElig;</span>, który możesz wydać tylko na pozyskanie kart.
      </p>
      `,
    keywords: ['echo'],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Harmonia Mocy',
    id: 'FatalHarmony',
    cost: 5,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
      Dowolny sojusznik może odrzucić Harmonię Mocy z ręki, by dobrać kartę.<br/>
      Jeśli to zrobi, zadaj 3 obrażenia.<br/>
      <span class="hint">(Efekty modyfikujące zadawane obrażenia wpływają na oba efekty tego Zaklęcia.)</span>
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Dudniące Bum',
    id: 'BouncingBoom',
    cost: 6,
    effect: `
      <p>
      <b>Echo</b>
      </p>
      <p>
        <b>Aktywacja:</b> Zadaj 2 obrażenia.
        </p>
        `,
    keywords: ['echo'],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Energetyczna Więź',
    id: 'SpiritLift',
    cost: 8,
    effect: `
      <p>
        Gdy przygotowane: raz podczas swojej tury, gdy zyskujesz Ładunek, dowolny sojusznik zyskuje 2 Ładunki.<br/>
        <b>Aktywacja:</b> Zadaj 5 obrażeń.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Powracające Rzutki',
    id: 'Tethered Darts',
    cost: 3,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
      Jeżeli to Zaklęcie zostało aktywowane z otwartej Bramy III albo IV,
      możesz przekazać tę kartę na rękę dowolnego sojusznika.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Kondensacja Mocy',
    id: 'ForceAmplifier',
    cost: 4,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
      Jeśli to Zaklęcie zostało aktywowane z otwartej Bramy III albo IV,
      zadaj 1 dodatkowe obrażenie.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Wzmocnione Uderzenie',
    id: 'ImbuedSmash',
    cost: 5,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
      Możesz odrzucić kartę z ręki. Jeżeli to zrobisz, zadaj 2 obrażenia Nemezis.<br/>
        <span class="hint">(Efekty modyfikujące zadawane obrażenia wpływają na oba efekty tego Zaklęcia.)</span>
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Wyrachowany Atak',
    id: 'PatternStrike',
    cost: 7,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
      Możesz wziąć na rękę do dwóch kart o wartości 0 <span class="aether">&AElig;</span> ze stosu kart odrzuconych.
        </p>
      `,
    keywords: [],
  },
]
