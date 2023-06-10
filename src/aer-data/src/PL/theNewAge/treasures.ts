import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'KadirsEmeraldShard',
    name: "Odłamek Szmaragdu Kadir",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
      Dowolny gracz otrzymuje 1 punkt życia.
      </p>
      `,
  },
  {
    id: 'GexsShatteredGeode',
    name: "Rozbita Geoda Gex",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
      Możesz wziąć na rękę wierzchnią kartę ze stosu kart odrzuconych dowolnego sojusznika.
      </p>
      `,
  },
  {
    id: 'JiansMoonstoneShard',
    name: "Kamień Księżycowy Jian",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
      Otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>,
      który możesz wydać tylko na pozyskanie Klejnotu.
      </p>
      `,
  },
  {
    id: 'LashsQuartzShard',
    name: "Odłamek Kwarcu Lasha",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
      Odkryj wierzchnią kartę z talii tur. Możesz ją umieścić na spodzie
      lub na wierzchu talii tur. Jeżeli odkryłeś kartę tury gracza,
      otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'XaxosFlare',
    name: "Blask Xaxosa",
    expansion: 'NA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Aktywacja:</b> Odkryj wierzchnią kartę z talii tur, a następnie odłóż ją na miejsce.
      Jeżeli odkryłeś kartę tury gracza, zadaj 3 obrażenia. W przeciwnym razie zadaj 1 obrażenie.
      </p>
      `,
  },
  {
    id: 'AdelheimsAmethystShard',
    name: "Odłamek Ametystu Adelheima",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
      Dowolny sojusznik może dobrać kartę, a następnie odrzuca kartę z ręki.
      </p>
      `,
  },
  {
    id: 'BramasBuriedLight',
    name: "Pogrzebany Blask Brimy",
    expansion: 'NA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'GarusTorch',
    name: "Pochodnia Garu",
    expansion: 'NA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 1 obrażenie.
        <span class="or">ALBO</span>
      <b>Aktywacja:</b> Wzmocnij Bramę dowolnego gracza.
      </p>
      `,
  },
  {
    id: 'XaxosPyre',
    name: "Stos Xaxosa",
    expansion: 'NA',
    subtype: 'Spell',
    level: 1,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
      Dowolny sojusznik może odrzucić kartę z ręki. Jeżeli to zrobi, zadaj 2 dodatkowe obrażenia.
      </p>
      `,
  },
  {
    id: 'MistsGarnetShard',
    name: "Odłamek Granatu Mist",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
      Aktywuj przygotowane zaklęcie dowolnego gracza.
      </p>
      `,
  },
  {
    id: 'ShimmeringCloakOfTheMagus',
    name: 'Połyskliwa Zasłona Arcymaga',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      Po zakończeniu rozpatrywania swojej zdolności gracz zadaje 2 obrażenia.
      </p>
      `,
  },
  {
    id: 'ImbuedShackles',
    name: 'Eteryczny Węzeł',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      Na początku rozgrywki umieść tę kartę obok stosu zasobów o koszcie 7 
      <span class="aether">&AElig;</span>, lub wyższym. Od tego momentu
      pozyskanie kart z tego stosu będzie kosztować o 1 <span class="aether">&AElig;</span> mniej.
      </p>
      `,
  },
  {
    id: 'GluttonsTooth',
    name: "Ząb Księcia Pożeraczy",
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      Gdy ostatnia karta ze stosu zasobów zostanie pozyskana albo zniszczona,
      dowolny gracz zadaje 6 obrażeń.
      </p>
      `,
  },
  {
    id: 'CoreOfRage',
    name: 'Kawałek Karapaksu Królowej',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      Na początku rozgrywki umieść tę kartę obok stosu Artefaktu albo Zaklęcia na rynku zasobów.
      Gdy gracz pozyskuje kartę z tego stosu zasobów, wzmacnia jedną ze swoich Bram.
      </p>
      `,
  },
  {
    id: 'CleansingAmulet',
    name: 'Amulet Oczyszczenia',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      Gdy gracz zakończy rozpatrywanie zdolności, dowolny gracz może
      zniszczyć kartę ze swojej ręki.
      </p>
      `,
  },
  {
    id: 'CarapaceFragement',
    name: 'Serce Gniewu',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      Na początku rozgrywki umieść tę kartę obok stosu Zaklęcia albo Artefaktu na rynku zasobów.
      Gdy graccz pozyskuje kartę z tego stosu zasobów, zadaje 2 obrażenia.
      </p>
      `,
  },
  {
    id: 'ThornedWhip',
    name: 'Bramny Bicz Boleści',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      Gdy gracz otworzy Bramę, zadaje 2 obrażenia.
      </p>
      `,
  },
  {
    id: 'BonesOfDeathmind',
    name: 'Kości Martwomyśli',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      Gdy gracz otwiera Bramę, zdobywa 1 Ładunek.<br/>
      <br/>
      Na początku tury dowolnego gracza, jeśli ten gracz nie ma zamkniętych Bram, zyskuje 1 Ładunek.
      </p>
      `,
  },
  {
    id: 'AcceleratingGauntlets',
    name: 'Rękawice Rączego Rudymentu',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Na początku twojej pierwszej tury w rozgrywce pozyskujesz dowolną kartę o koszcie nie wyższym niż 4 
      <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'EssenceExtractor',
    name: 'Eteryczny Synergon',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Gdy zagrywasz Klejnot o koszcie co najmniej 5 <span class="aether">&AElig;</span>,
      otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'BroochOfAttunment',
    name: 'Brosza Dostrojenia',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Raz na turę, gdy aktywujesz Zaklęcie o koszcie conajmniej 6 <span class="aether">&AElig;</span> 
      , otrzymujesz 2 Ładunki.
      </p>
      `,
  },
  {
    id: 'BladedCrystal',
    name: 'Kryształ Zguby Nemezis',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Gdy zadajesz obrażenia Nemezis za pomocą Zaklęcia, Zaklęcie to zadaje 1 dodatkowe obrażenie.
      </p>
      `,
  },
  {
    id: 'PrismOfDestruction',
    name: 'Kondensator Zniszczenia',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Jeśli nie masz żadnej zamkniętej Bramy, twoje Zaklęcia zadają 2 dodatkowe obrażenia.
      </p>
      `,
  },
  {
    id: 'ForgottenTrinket',
    name: 'Przebłysk Zapomnianej Mocy',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Na początku twojej pierwszej tury w rozgrywce wzmocnij jeden raz każdą swoją zamkniętą Bramę.
      </p>
      `,
  },
  {
    id: 'PrecisionMagnifier',
    name: 'Soczewka Precyzji',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Aktywując Zaklęcia o koszcie co najmniej 2 <span class="aether">&AElig;</span>,
      zadajesz dodatkowo 1 obrażenie.
      </p>
      `,
  },
  {
    id: 'ShroudOfObfucation',
    name: 'Cienisty Całun',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Gdy aktywujesz co najmniej dwa Zaklęcia w fazie aktywacji, otrzymujesz 2 
      <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'VerdantStaff',
    name: 'Życiodajny Kostur',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Gdy zdobywasz Zaklęcie, otrzymujesz 1 punkt życia.
      </p>
      `,
  },
  {
    id: 'FlowingMantle',
    name: 'Opończa Obfitości',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Na początku swojej tury otrzymujesz 1 <span class="aether">&AElig;</span>, 
      który możesz wydać tylko na pozyskanie Artefaktu.<br/>
      <br/>
      Gdy pozyskasz Artefakt, możesz umieścić go na wierzchu swojej talii.
      </p>
      `,
  },
]
