import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Rohdiamant',
    id: 'DiamondCluster',
    cost: 4,
    effect: `
      <p>
        Erhalte 2 <span class="aether">&AElig;</span>.<br />
        Ist dies dein genau zweiter gerade ausgespielter Rohdiamant?<br />
        Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Chaosbogen',
    id: 'ChaosArc',
    cost: 6,
    effect: `
      <p>
        <b>Wirken:</b> Füge 3 Schaden zu.<br />
        +2 Schaden für jeden gebundenen Zauber, der an diesen Riss direkt angrenzt.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Entzünden',
    id: 'Ignite',
    cost: 4,
    effect: `
      <p>
        <b>Wirken:</b> Füge 2 Schaden zu.<br />
        Wähle 1 anderen Spieler, der 1 Energie erhält.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Essenz-Diebstahl',
    id: 'EssenceTheft',
    cost: 5,
    effect: `
      <p>
        <b>Wirken:</b> Füge 3 Schaden zu.<br />
        Wirfst du jetzt 1 Karte deiner Wahl von der Hand ab? Wähle 1 Spieler, der 1 Leben heilt.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Flammen-Rubin',
    id: 'SearingRuby',
    cost: 4,
    effect: `
      <p>
        Erhalte 2 <span class="aether">&AElig;</span>.<br />
        Erhalte 1 <span class="aether">&AElig;</span>, aber nur zum Erwerb von Zaubern.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Blitzsturm',
    id: 'FeralLightning',
    cost: 5,
    effect: `
      <p>
        <b>Dauerhaft:</b> Darf an einen dunklen Riss gebunden werden (ohne ihn gebündelt zu haben).<br />
        <b>Wirken:</b> Füge 3 Schaden zu.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Einblick ins Nichts',
    id: 'PlanarInsight',
    cost: 6,
    effect: `
      <p>
        <b>Wirken:</b> Füge 2 Schaden zu.<br />
        +1 Schaden für jeden deiner aktiven Risse.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Spektrales Echo',
    id: 'SpectralEcho',
    cost: 3,
    effect: `
      <p>
        <b>Wirken:</b> Füge 2 Schaden zu.<br />
        Wähle bis zu 1 Karte auf deiner Hand. Zerstöre sie.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Glühender Opal',
    id: 'BurningOpal',
    cost: 5,
    effect: `
      <p>
        Erhalte 3 <span class="aether">&AElig;</span>.<br />
        Wirfst du jetzt 1 Karte deiner Wahl von deiner Hand ab? Wähle 1 anderen Spieler, der 1 Karte zieht.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Fressende Leere',
    id: 'ConsumingVoid',
    cost: 7,
    effect: `
      <p>
        <b>Wirken:</b> Zerstöre bis zu 2 Karten deiner Wahl auf deiner Hand.<br />
        Füge X Schaden zu.<br />
        X = 0/3/6 für 0/1/2 zerstörte Karten.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Instabiles Prisma',
    id: 'UnstablePrism',
    cost: 3,
    effect: `
      <p>
        Spiele 1 Kristall von deiner Hand sofort 2x aus. Dann zerstöre ihn.
        <span class="or">ODER</span>
        Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Getrübter Saphir',
    id: 'CloudedSapphire',
    cost: 6,
    effect: `
      <p>
        Erhalte 3 <span class="aether">&AElig;</span>.<br />
        Ist dies dein genau erster gerade ausgespielter Getrübter Saphir? 
        Wähle 1 anderen Spieler, der 1 Energie erhält.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Talisman der Magier',
    id: 'MagesTalisman',
    cost: 5,
    effect: `
      <p>
        Erhalte 1 Energie.<br />
        Wähle 1 anderen Spieler, der 1 Energie erhält.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Gebogener Dolch',
    id: 'FlexingDagger',
    cost: 2,
    effect: `
      <p>
        Für den nächsten Riss, den du in deinem Zug bündelst oder aktivierst, zahle 3 
        <span class="aether">&AElig;</span> weniger.
        <span class="or">ODER</span>
        Zerstöre diese Karte und füge 1 Schaden zu.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Lava-Takeln',
    id: 'LavaTendril',
    cost: 4,
    effect: `
      <p>
        <b>Gebunden:</b> Am Ende von <i>Zauber wirken</i>: Füge 1 Schaden zu.<br />
        <b>Wirken:</b> Füge 3 Schaden zu.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Vortex in Flaschen',
    id: 'BottledVortex',
    cost: 3,
    effect: `
      <p>
        Wähle bis zu 2 Karten auf deiner Hand/Ablagestapel. Zerstöre sie.<br />
        Ziehe 1 Karte.<br />
        Zerstöre Vortex in Flaschen.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Arkaner Nexus',
    id: 'ArcaneNexus',
    cost: 7,
    effect: `
      <p>
        <b>Gebunden:</b> Du darfst 1 gerade gespielten Kristall zurück auf die Hand nehmen.<br />
        <b>Wirken:</b> Füge 4 Schaden zu.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Dunkles Feuer',
    id: 'DarkFire',
    cost: 5,
    effect: `
      <p>
        <b>Wirken:</b> Wirf bis zu 2 Karten deiner Wahl von deiner Hand ab.<br />
        Füge X Schaden zu.<br />
        X = 0/3/6 für 0/1/2 abgeworfene Karten.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Phoenix-Flamme',
    id: 'PhoenixFlame',
    cost: 3,
    effect: `
      <p>
        <b>Wirken:</b> Füge 2 Schaden zu.<br />
        Wirfst du jetzt 1 Energie ab? +2 Schaden.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Jade',
    id: 'Jade',
    cost: 2,
    effect: `
      <p>
        Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Erweiterter Blick',
    id: 'AmplifyVision',
    cost: 4,
    effect: `
      <p>
        <b>Wirken:</b> Bündele 1 deiner dunklen Risse mit den geringsten <span class="aether">&AElig;</span>-Kosten.<br />
        Füge 2 Schaden zu.<br />
        Sind alle deine Risse aktiv? +1 Schaden.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: "V'Riswood Bernstein",
    id: 'VriswoodAmber',
    cost: 3,
    effect: `
      <p>
        <b>Einmalig bei Erwerb:</b><br />
        Du darfst diesen Kristall auf dein Deck legen.<br />
        Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Sprengstab',
    id: 'BlastingStaff',
    cost: 4,
    effect: `
      <p>
        Wähle 1 Zauber, den du gerade gebunden hat. Wirke ihn und füge +2 Schaden zu.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Sieber-Perle',
    id: 'SiftersPearl',
    cost: 3,
    effect: `
      <p>
        Erhalte 2 <span class="aether">&AElig;</span>.<br />
        Du und jeder andere Spieler:<br />
        Sieh dir die oberste Karte deines Decks an. Du darfst sie abwerfen.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Feuer-Peitsche',
    id: 'WildfireWhip',
    cost: 6,
    effect: `
      <p>
        <b>Gebunden:</b> In deinem Schritt <i>Aktionen ausführen</i> darfst du 2 <span class="aether">&AElig;</span> bezahlen, um 1 Spieler zu wählen:<br />
        Wirke 1 seiner gebundenden Zauber.<br />
        <b>Wirken:</br> Füge 4 Schaden zu.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Orb der Bündelung',
    id: 'FocusingOrb',
    cost: 4,
    effect: `
      <p>
        Bündele 1 Riss deiner Wahl (bei 1 Spieler deiner Wahl).
        <span class="or">ODER</span>
        Zerstöre diese Karte und die <i>Feste</i> heilt 3 Leben.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Bann-Welle',
    id: 'OblivionSwell',
    cost: 5,
    effect: `
      <p>
        <b>Gebunden (1x pro Zug):</b> Erhalte 1 <span class="aether">&AElig;</span> im Schritt <i>Aktionen ausführen</i>.<br />
        <b>Wirken:</b> Füge 2 Schaden zu.<br />
        Wirfst du jetzt 1 Kristall ab? +X Schaden.<br />
        X = <span class="aether">&AElig;</span>-Kosten des Kristalls.
      </p>
    `,
    keywords: [],
  },
]
