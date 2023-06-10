import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Unreiner Opal',
    id: 'ErraticIngot',
    cost: 5,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.<br/>
      Sieh dir den Ablagestapel des Reihenfolgedecks an. Ist dort mindestens 1 Erzfeind-Reihenfolgekarte?
      Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Einäschern',
    id: 'ReduceToAsh',
    cost: 7,
    effect: `
      <p>
      <b>Gebunden:</b> Zu Beginn von <i>Zauber wirken</i>: Sieh dir die oberste Karte deines Decks an.
      Du darfst sie zerstören.
      <b>Wirken:</b> Füge 4 Schaden zu.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Vortex-Handschuh',
    id: 'VortexGauntlet',
    cost: 6,
    effect: `
      <p>
      Wähle 1 Spieler und wirke 1 seiner gebundenen Zauber.<br/>
      Den gewirkten Zauber erhält dieser Spieler zurück auf die Hand (statt auf den
      Ablagestapel).
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Verkohlen',
    id: 'Carbonize',
    cost: 4,
    effect: `
      <p>
      <b>Wirken:</b> Füge 3 Schaden zu.<br/>
      Sieh dir die oberste Karte des Reihenfolgedecks an. Du darfst diese Karte unter das
      Reihenfolgedeck schieben.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Equilibrium',
    id: 'Equilibrium',
    cost: 7,
    effect: `
      <p>
      <b>Gebunden:</b> Erleidest du Schaden? Reduziere den Schaden um 1 (Minimum: 1 Schaden).<br/>
      <b>Wirken:</b> Füge 4 Schaden zu.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Vulkan-Glas',
    id: 'VolcanicGlass',
    cost: 3,
    effect: `
      <p>
      <b>Einmalig bei Erwerb:</b> Bezahlst du jetzt 2 <span class="aether">&AElig;</span>? Wähle 1 anderen Spieler,
      der 1 <i>Vulkan-Glas</i> erhält und oben auf sein Deck legt. Dieser Spieler kann diesen Effekt nicht auslösen.<br />
      Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Konvektions-Feld',
    id: 'ConvectionField',
    cost: 5,
    effect: `
      <p>
      <b>Wirken:</b> Füge 4 Schaden zu.
        <span class="or">ODER</span>
      <b>Wirken:</b> Füge 2 Schaden zu. Wähle 1 anderen Spieler, der 1 Karte seiner Wahl auf der Hand zerstören darf.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Blitz-Kaskade',
    id: 'JaggedLightning',
    cost: 4,
    effect: `
      <p>
      <b>Wirken:</b> Füge 3 Schaden zu.<br/>
      Wirfst du jetzt 1 Karte deiner Wahl von der Hand ab? Wähle 1 Spieler, der 1 seiner Risse mit den niedrigsten
      <span class="aether">&AElig;</span>-Kosten bündelt.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Blut-Diamant',
    id: 'BloodstoneJewel',
    cost: 6,
    effect: `
      <p>
      <b>Einmalig bei Erwerb:</b> Ist dies dein genau erster gerade erworbener Blut-Diamant? Erhalte 3 <span class="aether">&AElig;</span>.<br/>
      Erhalte 3 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Entfachen',
    id: 'Kindle',
    cost: 4,
    effect: `
      <p>
      <b>Gebunden:</b> In deinem Schritt <i>Aktionen ausführen</i> darfst du hier auch noch 1 <i>Funken</i> binden (max. 1).<br/>
      <b>Wirken:</b> Füge 3 Schaden zu.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Gedankenvertrauter',
    id: 'ThoughtformFamiliar',
    cost: 3,
    effect: `
      <p>
      <b>Wirken:</b> Füge 2 Schaden zu. +X Schaden.<br/>
      X = Anzahl deiner anderen gebundenen Zauber.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Kristallisieren',
    id: 'Crystallize',
    cost: 8,
    effect: `
      <p>
      <b>Dauerhaft:</b> Dieser Zauber muss auf 2 aneinandergrenzende Risse gebunden werden. Beide Risse sind damit nicht mehr frei.<br/>
      <b>Wirken:</b> Füge X Schaden zu.<br/>
      X = 2 für jeden Kristall auf der Hand 1 anderen Spielers deiner Wahl.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Feuerflut',
    id: 'FieryTorrent',
    cost: 5,
    effect: `
      <p>
      <b>Wirken:</b> Füge 2 Schaden zu.<br/>
      +2 Schaden für jede weitere gebundene <i>Feuerflut</i> im Spiel.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Himmelsfeuer',
    id: 'CelestialSpire',
    cost: 5,
    effect: `
      <p>
      <b>Wirken:</b> Füge 3 Schaden zu.<br/>
      Ist der Vorrat dieser Karte leer? Wähle 1 anderen Spieler, der 1 Karte von seinem Deck zieht.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Rückkehrer beschwören',
    id: 'ConjureTheLost',
    cost: 6,
    effect: `
      <p>
      <b>Wirken:</b> Füge 5 Schaden zu.<br/>
      Zerstörst du jetzt diese Karte? Die <i>Feste</i> heilt 4 Leben.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Sternenschmiede',
    id: 'NovaForge',
    cost: 6,
    effect: `
      <p>
      <b>Gebunden (1x pro Zug):</b> Erhalte 2 <span class="aether">&AElig;</span> im Schritt
      <i>Aktionen ausführen</i>, aber nur zum Erwerb von Zaubern.<br/>
      <b>Wirken:</b> Füge 4 Schaden zu.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Terror-Diamant',
    id: 'DreadDiamond',
    cost: 3,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.<br/>
      Wirfst du jetzt 1 deiner gebundenen Zauber deiner Wahl ab? 
      Erhalte 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Stein-Kompass',
    id: 'CairnCompass',
    cost: 4,
    effect: `
      <p>
      Wähle 1 anderen Spieler. Dieser Spieler darf 1 Zauber aus seinem Ablagestapel wählen und
      an seine aktiven oder dunklen Risse binden.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Vulkan-Schlacke',
    id: 'ScoriaSlag',
    cost: 4,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.<br/>
      Ist das Erzfeind-Level 2 oder höher? Erhalte 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Riss-Erz',
    id: 'BreachOre',
    cost: 4,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.<br/>
      <span class="or">ODER</span>
      Bündele 1 deiner dunklen Risse mit den geringsten <span class="aether">&AElig;</span>-Kosten.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Teufelschnapper',
    id: 'FiendCatcher',
    cost: 3,
    effect: `
      <p>
      Du darfst 1 Karte deiner Wahl auf deiner Hand oder deinem Ablagestapel zerstören.<br/>
      Sieh dir die oberste Karte des Reihenfolgedecks an. Ist es eine Erzfeind-Reihenfolgekarte?
      Du darfst sie unter das Reihenfolgedeck schieben.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Pyrotechnische Woge',
    id: 'PyrotechnicSurge',
    cost: 4,
    effect: `
      <p>
      <b>Dauerhaft:</b> Dieser Zauber muss auf 2 aneinandergrenzende Risse gebunden werden. Beide Risse sind damit nicht mehr frei.<br/>
      <b>Wirken:</b> Füge 4 Schaden zu.<br/>
      Du darst 1 Karte deiner Wahl in deinem Ablagestapel zerstören.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'WE',
    name: 'Aurora',
    id: 'Aurora',
    cost: 5,
    effect: `
      <p>
      <b>Gebunden (1x pro Zug):</b> Im Schritt <i>Aktionen ausführen</i>: Erhalte 1 Energie.<br/>
      <b>Wirken:</b> Füge 3 Schaden zu.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Kodex der Konklave',
    id: 'ConclaveScroll',
    cost: 3,
    effect: `
      <p>
      Erhalte 1 Energie.<br/>
      Ist der Vorrat dieser Karte leer? Wähle 1 anderen Spieler, der die oberste Karte
      seines Ablagestapels zerstören darf.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Urzeitlicher Götze',
    id: 'PrimordialFetish',
    cost: 4,
    effect: `
      <p>
      Bündele 1 Riss deiner Wahl (bei 1 Spieler deiner Wahl).
        <span class="or">ODER</span>
      Zerstöre diese Karte und heile 3 Leben.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'WE',
    name: 'Geforener Magmit',
    id: 'FrozenMagmite',
    cost: 3,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.<br/>
      Die nächste Karte, die du in deinem Zug erwirbst, darfst du oben auf dein
      Deck legen.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'WE',
    name: 'Magier-Totem',
    id: 'MagesTotem',
    cost: 2,
    effect: `
      <p>
      Wähle und zerstöre 1 Artefakt oder 1 Kristall, den du gerade gespielt hast.
        <span class="or">ODER</span>
      Zerstöre diese Karte. Die <i>Feste</i> heilt 1 Leben.
      </p>
      `,
    keywords: [],
  },
]
