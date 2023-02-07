import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Trójrdzeń',
    id: 'TripliteCore',
    cost: 4,
    effect: `
      <p>
      Otrzymaj 3 <span class="aether">&AElig;</span>, które mogą zostać wykorzystane wyłącznie do pozyskania karty.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Ukłucie Energii',
    id: 'NerveJab',
    cost: 2,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
      Ucisz Poplecznika.
        </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Podwójne Uderzenie',
    id: 'DoubleTap',
    cost: 3,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 1 obrażenie. Zadaj 1 obrażenie.<br/>
      <span class="hint">(Efekty modyfikujące zadawane obrażenia wpływają na oba przypadki zadania obrażeń w wyniku aktywacji tego Zaklęcia.)</span>
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Bursztyn Zapomnienia',
    id: 'ObliviumResin',
    cost: 5,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.<br/>
      Jeżeli masz na ręku co najmniej 3 karty o koszcie 0 <span class="aether">&AElig;</span> 
      , otrzymujesz dodatkowo 2 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Replikator',
    id: 'Summonite',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
      Otrzymujesz Replikator z rynku zasobów. Umieść go na wierzchu stosu kart odrzuconych dowolnego sojusznika.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Zbiornik Czasoprzestrzenny',
    id: 'ManifoldContainer',
    cost: 4,
    effect: `
      <p>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
      Następnym razem, gdy pozyskasz kartę w tej turze, możesz również pozyskać kartę o koszcie niższym niż pozyskana karta.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Drenujący Dotyk',
    id: 'DrainingTouch',
    cost: 2,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
      Otrzymujesz 1 Ładunek.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Aktywna Skorupa',
    id: 'JoltingCrust',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>. Otrzymujesz 1 Impuls.
        <span class="or">ALBO</span>
      Otrzymujesz 2 <span class="aether">&AElig;</span>. Odrzuć 1 Impuls.
        Jeżeli to zrobisz, otrzymujesz 1 Ładunek.
      </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Okruch Przeszłości',
    id: 'MentiteChunk',
    cost: 5,
    effect: `
      <p>
      Otrzymujesz 3 <span class="aether">&AElig;</span>.<br/>
      Jeżeli w twoim stosie kart odrzuconych jest co najmniej 7 kart, otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Duchowe Więzy',
    id: 'SoulCords',
    cost: 5,
    effect: `
      <p>
      Dowolny gracz otrzymuje 1 Impuls.<br/>
      Każdy gracz posiadający co najmniej 2 Impulsy, otrzymuje 1 Ładunek.
      </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Cierń Otchłani',
    id: 'VoidiumSpike',
    cost: 3,
    effect: `
      <p>
      Otrzymaj 2 <span class="aether">&AElig;</span>.<br/>
      Każdy sojusznik może odrzucić kartę z ręki, aby otrzymać 1 Ładunek.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Precyzyjny Strzał',
    id: 'PrecisionShot',
    cost: 3,
    effect: `
      <p>
        <b>Więź</b> <span class="hint">(Dwa Zaklęcia z Więzią mogą być przygotowane na tej samej Bramie.)</span>
        </p>
        <p>
        <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
        Jeżeli w twoim stosie kart odrzuconych jest co najmniej 6 innych kart, zadaj 2 dodatkowe obrażenia.
        </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Kryształ Spokoju',
    id: 'MutedLacosite',
    cost: 5,
    effect: `
      <p>
      Gdy pozyskujesz tę kartę, Ucisz Poplecznika.<br/>
      Otrzymujesz 3 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Ostrze Mądrości',
    id: 'BladeOfWisdom',
    cost: 6,
    effect: `
      <p>
      Gdy pozyskujesz to Zaklęcie, jeżeli w twoim stosie kart odrzuconych jest co najmniej 7 innych kart, otrzymujesz 2 punkty Życia.<br/>
        <b>Aktywacja:</b> Zadaj 5 obrażeń.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Ogłuszająca Siła',
    id: 'StunningForce',
    cost: 5,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 4 obrażenia Nemezis.<br/>
      Ucisz Poplecznika.
        </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Przebłysk Intelektu',
    id: 'FlashOfIntellect',
    cost: 4,
    effect: `
      <p>
      <b>Więź</b> <span class="hint">(Dwa Zaklęcia z Więzią mogą być przygotowane na tej samej Bramie.)</span>
      </p>
      <p>
      <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
      Jeżeli w twoim stosie kart odrzuconych jest co najmniej 6 innych kart, możesz pozyskać Przebłysk Intelektu z rynku zasobów i umieścić go na wierzchu swojej talii.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Triumf Nauki',
    id: 'ScholarsOpus',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 1 Ładunek.<br/>
      Jeżeli w twoim stosie kart odrzuconych jest co najmniej 7 kart, otrzymujesz dodatkowo 1 Ładunek.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Gwiazda w Butelce',
    id: 'BottledStar',
    cost: 7,
    effect: `
      <p>
      Otrzymujesz 3 Ładunki.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Palący Nurt',
    id: 'BurningCurrent',
    cost: 3,
    effect: `
      <p>
      Gdy przygotowane: w swojej fazie Aktywacji możesz odrzucić 2 Impulsy. Jeżeli to zrobisz, Zaklęcia, które aktywujesz w tej turze, zadają 1 dodatkowe obrażenie.<br/>
        <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
        Otrzymujesz 1 Impuls.
        </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Psychiczny Wybuch',
    id: 'PsychicEruption',
    cost: 8,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj obrażenia w liczbie równej liczbie kart w stosie kart odrzuconych dowolnego gracza.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Żyjąca Rękawica',
    id: 'LivingGauntlet',
    cost: 4,
    effect: `
      <p>
      Odkryj wierzchnią kartę ze swojej talii.<br/>
      Możesz ją zniszczyć albo odrzucić. Każdy sojusznik może dobrać kartę, aby następnie odrzucić kartę z ręki.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Połyskujący Tetryt',
    id: 'ShiningTetrite',
    cost: 6,
    effect: `
      <p>
      Otrzymujesz 4 <span class="aether">&AElig;</span>, których nie możesz wykorzystać do pozyskania karty.
      </p>
      `,
    keywords: [],
  },
]
