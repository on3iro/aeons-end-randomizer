import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'AE',
    name: 'Adelheim',
    id: 'Adelheim',
    mageTitle: 'Kowal Magii Bram',
    abilityName: `Eteryczny Krąg`,
    abilityActivation: `Użyj podczas fazy dobierania Nemezis:`,
    abilityEffect: `
        <p>Po dobraniu karty Mocy lub Ataku możesz ją odrzucić, bez rozpatrywania jej efektu.
        <span class="hint">(Nemezis nie dobiera karty zastępczej)</span></p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Odłamek Ametystu',
        expansion: 'AE',
        id: 'AmethystShard',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
              Dowolny sojusznik może dobrać kartę z talii, a następnie odrzucić jedną kartę z ręki.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Brima',
    id: 'Brama',
    mageTitle: 'Starsza Magini Bram',
    abilityName: `Skraj Wytrzymałości`,
    abilityActivation: `Użyj podczas swojej fazy głównej:`,
    abilityEffect: `
        <p>Dowolny gracz odzyskuje 4 życia.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Pogrzebany Blask',
        expansion: 'AE',
        id: 'BuriedLight',
        cost: 0,
        effect: `
            <p>
              <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Jian',
    id: 'Jian',
    mageTitle: 'Osierocona Magini Bram',
    abilityName: `Czarne Lustro`,
    abilityActivation: `Użyj podczas swojej fazy głównej:`,
    abilityEffect: `
        <p>Aktywuj przygotowane Zaklęcie dowolnego gracza, bez odrzucania go.</p>
        <p>Następnie, ponownie aktywuj to Zaklęcie.
        <span class="hint">(Po tym należy je odrzucić.)</span></p>
      `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Kamień Księżycowy',
        expansion: 'AE',
        id: 'MoonstoneShard',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
              Otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>, który może zostać wykorzystany wyłącznie do pozyskania Klejnotu.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Kadir',
    id: 'Kadir',
    mageTitle: 'Poszukiwaczka Magów Bram',
    abilityName: `Pozaziemskie Wrota`,
    abilityActivation: `Użyj podczas fazy głównej dowolnego gracza:`,
    abilityEffect: `
        <p>Ten gracz może przywrócić na rękę do trzech Zaklęć ze swojego stosu kart odrzuconych.
        Ponadto może podczas tej tury przygotować po dwa Zaklęcia na każdej otwartej Bramie.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Odłamek Szmaragdu',
        expansion: 'AE',
        id: 'EmeraldShard',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.
              <span class="or">ALBO</span>
              Dowolny gracz otrzymuje 1 punkt życia.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Lash',
    id: 'Lash',
    mageTitle: 'Zwiadowca Magów Bram',
    abilityName: `Przyspieszone Myśli`,
    abilityActivation: `Użyj podczas fazy głównej dowolnego gracza:`,
    abilityEffect: `
        <p>Wtasuj kartę tury dowolnego gracza do talii tur. Ten gracz otrzymuje 1 obrażenie. 
        <span class="hint">(Nie możesz wybrać karty tury oznaczonej symbolem "X").</span></p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Odłamek Kwarcu',
        expansion: 'AE',
        id: 'QuartzShard',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
              Odkryj wierzchnią kartę z talii tur. Możesz ją umieścić na spodzie lub na wierzchu talii tur.
              Jeżeli odkryłeś kartę tury gracza, otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Mist',
    id: 'Mist',
    mageTitle: 'Kapitan Magów Bram',
    abilityName: `Boska Przepowiednia`,
    abilityActivation: `Użyj podczas swojej fazy głównej:`,
    abilityEffect: `
        <p>Dowolny sojusznik dobiera cztery karty.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Odłamek Granatu',
        expansion: 'AE',
        id: 'Garnet Shard',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.
              <span class="or">ALBO</span>
              Aktywuj przygotowane Zaklęcie dowolnego gracza.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Phaedraxa',
    id: 'Phaedraxa',
    mageTitle: 'Prorokini Magii Bram',
    abilityName: `Runa Augura`,
    abilityActivation: `Użyj natychmiast po tym jak zostanie dobrana karta tury:`,
    abilityEffect: `
        <p>Anuluj obrażenia zadane graczom i Gravehold podczas tej tury.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Odłamek Turmalinu',
        expansion: 'AE',
        id: 'TourmalineShard',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
              Dowolny sojusznik może otrzymać 1 obrażenie, aby zniszczyć kartę na swojej ręce.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Xaxos',
    id: 'Xaxos',
    mageTitle: 'Uczeń Magii Bram',
    abilityName: `Metafizyczne Ogniwo`,
    abilityActivation: `Użyj podczas fazy głównej dowolnego gracza:`,
    abilityEffect: `
        <p>Sojusznicy otrzymują łącznie 4 Ładunki do podziału. Odkryj karty z talii tur, 
        a następnie ułóż z nich talię tur w dowolnej kolejności.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Blask',
        expansion: 'AE',
        id: 'Flare',
        cost: 0,
        effect: `
            <p>
              <b>Aktywacja:</b> Odkryj wierzchnią kartę z talii tur, a następnie odłóż ją na miejsce.
              Jeżeli odkryłeś kartę tury gracza, zadaj 3 obrażenia. W przeciwnym razie, zadaj 1 obrażenie.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
