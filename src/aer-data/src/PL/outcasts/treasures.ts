import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'RhiasPlanarPocket',
    name: "Kieszeń Międzywymiarowa Rhia'i",
    expansion: 'O',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>.<br />
        Zyskaj dodatkowo 1 <span class="aether">&AElig;</span>, który
        może zostać wykorzystany wyłącznie do pozyskania Artefaktu.
      </p>
    `,
  },
  {
    id: 'TalixsEverburn',
    name: "Ogniwo Talixa",
    expansion: 'O',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>.<br />
        Odrzuć do trzeć Zaklęć z ręki. Otrzymujesz 1 <span class="aether">&AElig;</span> 
        za każde Zaklęcie odrzucone w ten sposób.
      </p>
    `,
  },
  {
    id: 'LostsForgedSpark',
    name: "Hartowana Iskra Zgubionego",
    expansion: 'O',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
        <span class="hint">(Na początku gdy dodaj Kryształ do swojego stosu kart odrzuconych.)</span><br />
        <b>Aktywacja:</b> Zadaj 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'MazrasThesis',
    name: "Badania Mazry",
    expansion: 'O',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 1 obrażenie.<br />
        Wzmocnij Bramę III dowolnego gracza.
      </p>
    `,
  },
  {
    id: 'RazrasTrainingWhistle',
    name: "Gwizdek Treningowy Razry",
    expansion: 'O',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>. 
        <span class="or">ALBO</span>
        Otrzymujesz 1 Ładunek.
      </p>
    `,
  },
  {
    id: 'RejuvenatingDiamond',
    name: 'Odmładzający Diament',
    expansion: 'O',
    level: 2,
    effect: `
      <p>
        Kiedy Gravehold zyskuje żywotność, otrzymuje dodatkowo 1 punkt żywotności.
      </p>
    `,
  },
  {
    id: 'BrokenTooth',
    name: 'Złamany Ząb',
    expansion: 'O',
    level: 2,
    effect: `
      <p>
        Kiedy gracz otwiera Bramę, dowolny sojusznik dobiera kartę.
      </p>
    `,
  },
  {
    id: 'PoisonHeart',
    name: 'Trucizna Serca',
    expansion: 'O',
    level: 2,
    effect: `
      <p>
        Na początku rozgrywki umieść tę kartę obok stosu zasobów Zaklęć 
        o koszcie 5 <span class="aether">&AElig;</span> lub mniej. Te Zaklęcia zadają
        1 dodatkowe obrażenie podczas aktywacji.
      </p>
    `,
  },
  {
    id: 'WorldMarble',
    name: 'Marmur Świata',
    expansion: 'O',
    level: 3,
    effect: `
      <p>
        Na początku twojej pierwszej turzy w grze 
        wzmocnij trzykrotnie jedną ze swoich Bram.
      </p>
    `,
  },
  {
    id: 'ArmoredPauldrons',
    name: 'Pancerne Naramienniki',
    expansion: 'O',
    level: 3,
    effect: `
      <p>
        Kiedy zagrywasz Artefakt o koszcie 3 <span class="aether">&AElig;</span> 
        lub więcej, zadaj 1 obrażenie.
      </p>
    `,
  },
  {
    id: 'BloodshotGeode',
    name: 'Przekrwiona Geoda',
    expansion: 'O',
    level: 3,
    effect: `
      <p>
        Kiedy zagrywasz Klejnot o koszcie 5 <span class="aether">&AElig;</span> 
        lub więcej, zadaj 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'TreasuredStone',
    name: 'Cenny Kamień',
    expansion: 'O',
    level: 3,
    effect: `
      <p>
        Na początku swojje pierwszej tury w grze, pozyskujesz Klejnot z dowolnego stosu zasobów.
      </p>
    `,
  },
  {
    id: 'ReboundGauntlet',
    name: 'Rękawica Odbicia',
    expansion: 'O',
    level: 3,
    effect: `
      <p>
        Raz na turę, kiedy aktywujesz Zaklęcie o koszcie 5 <span class="aether">&AElig;</span> 
        lub mniej, możesz odrzucić z ręki Zaklęcie, aby zabrać z powrotem na rękę aktywowane Zaklęcie.
      </p>
    `,
  },
]
