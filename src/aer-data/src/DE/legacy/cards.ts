import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Verzweigter Radit',
    id: 'BranchingRadite',
    cost: 4,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>. <br/>
          Hast du 2 oder mehr gebundene Zauber?
          Erhalte 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Feuer-Chakra',
    id: 'FireChakram',
    cost: 2,
    effect: `
        <p>
          <b>Wirken:</b> Füge 2 Schaden zu.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Graviton-Klinge',
    id: 'BraneKnife',
    cost: 3,
    effect: `
        <p>
          Erhalte 1 Energie. <br/>
          Wähle 1 anderen Spieler, der seinen dunklen Riss mit den
          geringsten <span class="aether">&AElig;</span>-Kosten bündelt.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Matter Fulmit',
    id: 'FulmiteSlab',
    cost: 6,
    effect: `
        <p>
          Erhalte 1 <span class="aether">&AElig;</span>. <br/>
          Erhalte 2 Impulse. <br/>
          Bis zum Ende deines Zuges: Wirfst du X
          Impulse ab? Erhalte X <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Vergoldeter Marmor',
    id: 'GildedMarble',
    cost: 6,
    effect: `
        <p>
          Erhalte 3 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Impuls-Stab',
    id: 'VoltaicRelay',
    cost: 4,
    effect: `
        <p>
          Wähle 1 Spieler, der 3 Impulse erhält. Dieser Spieler:
          Wirfst du jetzt 1 Impuls ab? Zerstöre 1 Karte deiner Wahl
          auf deiner Hand.
        </p>
      `,
    keywords: ['strong', 'pulse'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Heilende Hände',
    id: 'SparkingSiphon',
    cost: 3,
    effect: `
        <p>
          <b>Einmalig bei Erwerb:</b> Erhalte 2 Impulse. <br/>
          <b>Wirken:</b> Füge 2 Schaden zu. <br/>
          Wirfst du jetzt 1 Impuls ab? Wähle 1 Spieler, der 1 Leben heilt.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Riss-Vereinigung',
    id: 'BreachCommunion',
    cost: 4,
    effect: `
        <p>
          <b>Gebunden (1x pro Zug):</b> Erhalte 1 Impuls in deinem Schritt Aktionen ausführen. <br/>
          <b>Wirken:</b> Füge 2 Schaden zu.<br/>
          Wirfst du jetzt 2 Impulse ab? +3 Schaden.
        </p>
      `,
    keywords: ['strong', 'pulse'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Spiegel des Grauens',
    id: 'InfernalMirror',
    cost: 5,
    effect: `
        <p>
          Wähle 1 anderen Spieler, der 1 Energie erhält. Wähle 1 Spieler,
          der 2 Impulse erhält. <br/>
          Wirfst du jetzt 2 Impulse ab? Wähle 1 Spieler und wirke 1
          seiner gebundenen Zauber mit +1 Schaden.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Geophage',
    id: 'Geophage',
    cost: 3,
    effect: `
        <p>
          Erhalte 1 <span class="aether">&AElig;</span>. <br/>
          Du darfst 1 Kristall auf deiner Hand zerstören.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Kraft-Transfusion',
    id: 'ForceTransfusion',
    cost: 4,
    effect: `
        <p>
          <b>Wirken:</b> Füge 3 Schaden zu. <br/>
          Hast du 3 oder mehr Energie? Erhalte 1 Energie.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Statischer Sand',
    id: 'ConductiveGrit',
    cost: 3,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>. Erhalte 1 Impuls.
          <span class="or">ODER</span>
          Wirfst du jetzt 1 Impuls ab? Erhalte 3 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Antiker Cyanolit',
    id: 'AncientCyanolith',
    cost: 3,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Aetherische Hand',
    id: 'EtherealHand',
    cost: 6,
    effect: `
        <p>
          Wähle 1 anderen Spieler, der 2 Karten zieht.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Krümmstrahl',
    id: 'BendingBeam',
    cost: 5,
    effect: `
        <p>
          <b>Wirken:</b> Füge 2 Schaden zu. <br/>
          Ist dieser Zauber an einen aktiven Riss III
          gebunden? +3 Schaden.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Schwelender Saphir',
    id: 'EntangledShard',
    cost: 4,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>. <br/>
          Hast du 3 oder mehr Energie? Erhalte 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Arkane Salve',
    id: 'ArcaneSalvo',
    cost: 5,
    effect: `
        <p>
          <b>Gebunden (1x pro Zug):</b> In deinem Schritt Aktionen ausführen
          darfst du 1 gerade gespieltes Artefakt oder 1 Artefakt in deinem
          Ablagestapel oben auf dein Deck legen.<br/>
          <b>Wirken:</b> Füge 4 Schaden zu.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Gespaltenes Portalit',
    id: 'PhasedPortalite',
    cost: 4,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>. Ist dein Riss III
          aktiv? Erhalte 1 <span class="aether">&AElig;</span>.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Pyro-Phantom',
    id: 'PyroGeist',
    cost: 6,
    effect: `
        <p>
          <b>Einmalig beim Binden:</b> Füge 1 Schaden zu.<br/>
          <b>Wirken:</b> Füge 1 Schaden zu. Füge 2 Schaden zu.<br/>
          (Hinweis: Das sind 2 Schadensquellen.)
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Riss-Feuer',
    id: 'BreachFlare',
    cost: 3,
    effect: `
        <p>
          <b>Wirken:</b> Füge 2 Schaden zu. <br/>
          Bündele 1 Riss III (bei 1 Spieler deiner Wahl).
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Donnernder Schwur',
    id: 'ThunderousOath',
    cost: 8,
    effect: `
        <p>
          <b>Wirken:</b> Füge 6 Schaden zu. <br/> 
          Erhalte 1 Impuls. <br/>
          Wirfst du jetzt X Impulse ab? Wähle 1 anderen
          Spieler, der X Karten zieht.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Besänftiger Petalit',
    id: 'SoothingTorporene',
    cost: 3,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>.
          <span class="or">ODER</span>
          Betäube 1 MONSTER deiner Wahl.
        </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Funkenschlag-Silikat',
    id: 'ArcingSilicate',
    cost: 4,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>. <br/>
          Erhalte 1 Impuls. <br/>
          Wirfst du jetzt X Impulse ab? Füge X Schaden zu.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Zeiten-Schleier',
    id: 'WarpingHaze',
    cost: 3,
    effect: `
        <p>
          <b>Wirken:</b> Füge 2 Schaden zu. <br/>
          Hast du 2 oder mehr weitere gebundene Zauber? +1 Schaden.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Flammenfaust',
    id: 'IncineratingFist',
    cost: 4,
    effect: `
        <p>
          <b>Wirken:</b> Füge 3 Schaden zu.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Gefäss der Erkenntnis',
    id: 'RealityStabilizer',
    cost: 6,
    effect: `
        <p>
          Erhalte 2 Energie. <br/>
          Betäube 1 MONSTER deiner Wahl.
        </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Riss-Kollision',
    id: 'BreachCollision',
    cost: 7,
    effect: `
        <p>
          <b>Einmalig bei Erwerb:</b> Du darfst diese Karte auf
          einen Ablagestapel deiner Wahl legen.<br/>
          <b>Wirken:</b> Füge 5 Schaden zu.<br/>
          Die Feste heilt 1 Leben.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Feuerwirbel',
    id: 'FieryConclusion',
    cost: 5,
    effect: `
        <p>
          <b>Wirken:</b> Füge 4 Schaden zu. <br/>
          3 oder mehr leere Vorräte? +3 Schaden.
        </p>
      `,
    keywords: ['strong'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Sternenfeuer-Raserei',
    id: 'StarfireFrenzy',
    cost: 6,
    effect: `
        <p>
          <b>Wirken:</b> Füge 4 Schaden zu.<br/>
          Wirfst du jetzt 1 Zauber deiner Hand ab?
          +1 Schaden und erhalte 1 Energie.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Antimonit-Brocken',
    id: 'CrumblingCompound',
    cost: 5,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>. <br/>
          Wirfst du jetzt 1 Kristall von deiner Hand ab?
          Erhalte 2 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Linse der Prophezeiung',
    id: 'PropheticLens',
    cost: 4,
    effect: `
        <p>
          Erhalte 1 Energie. <br/>
          Sieh dir die oberste Karte deines Decks an. Du darfst sie zerstören.
          Tust du das nicht? Erhalte 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['strong'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Energieladung',
    id: 'AdrenalBatteries',
    cost: 7,
    effect: `
        <p>
          Erhalte 2 Impulse. Wirfst du jetzt 4 Impulse ab? Aktiviere 1
          dunklen Riss bei 1 Spieler deiner Wahl. Erwirb gratis 1 Zauber
          deiner Wahl mit <span class="aether">&AElig;</span>-Kosten von 5
          oder weniger. Binde diesen Zauber an 1 aktiven Riss bei 1 Spieler
          deiner Wahl.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Veredeltes Lumenium',
    id: 'RefinedLumenium',
    cost: 5,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>. <br/>
          Wähle 1 anderen Spieler, der 1 Karte zieht.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Steuerrad der Leere',
    id: 'VoidMill',
    cost: 5,
    effect: `
        <p>
          Bündele 1 Riss deiner Wahl (bei 1 Spieler deiner Wahl). <br/>
          Wähle 2 Spieler. Diese Spieler dürfen die oberste Karte ihres Ablagestapels zerstören.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Gravitations-Knoten',
    id: 'GravityNode',
    cost: 5,
    effect: `
        <p>
          <b>Wirken:</b> Wähle 1 Spieler, der 1 Karte seiner Wahl von der
          Hand abwirft. Ist das passiert? Füge 4 Schaden zu.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Neuronen-Kranz',
    id: 'NeuralWreath',
    cost: 4,
    effect: `
        <p>
          Bündele 1 Riss deiner Wahl (bei 1 Spieler deiner Wahl). <br/>
          Wähle 1 Spieler. Dieser Spieler darf 1 Zauber seiner Wahl von der Hand an seine
          aktiven / gerade gebündelten Risse binden.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Inversionssphäre',
    id: 'SphereOfInversion',
    cost: 9,
    effect: `
        <p>
          <b>Wirken:</b> Füge 7 Schaden zu. <br/>
          Zerstört 1 anderer Spieler 1 Karte seiner Wahl auf der Hand?
          Dieser Spieler heilt 2 Leben.
        </p>
      `,
    keywords: ['strong'],
  },
]
