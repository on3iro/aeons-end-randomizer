import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'NA',
    name: 'Sahala',
    id: 'Sahala',
    mageTitle: 'Riss-Magier-Orakel',
    ability: `
        <h2>Sternenband</h2>
        <p class="ability-activation">In deinem Spieler-Zug während <i>Zauber wirken</i> oder <i>Aktionen ausführen</i>:</p>
        <p>Sieh dir die obersten 3 Karten deines Decks an. Siehst du Zauber? Nimm 1 davon auf die Hand.
        Ist kein Zauber an deinen Gestirn-Riss gebunden? Binde bis zu 2 Zauber von deiner Hand an deinen aktiven Gestirn-Riss.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Funkelnder Meteorstein',
        expansion: 'NA',
        id: 'SparklingMeteorite',
        cost: 0,
        effect: `<p>Erhalte 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Erhalte 3 <span class="aether">&AElig;</span>, aber nur zum Bündeln oder Aktivieren eines Risses.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'NA',
    name: 'Gygar',
    id: 'Gygar',
    mageTitle: 'Herr der Gezeiten',
    ability: `
        <h2>Flutwelle</h2>
        <p class="ability-activation">In deinem Spieler-Zug während <i>Aktionen ausführen</i>:</p>
        <p>Lege 1 Flut-Plättchen auf deinen Gezeiten-Riss.
        <span class="or">OR</span>
        Wirke 1 an deinen Gezeiten-Riss gebundenen Zauber. Erhalte 2 Energie.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Energie-Woge',
        expansion: 'NA',
        id: 'TidalSurge',
        cost: 0,
        effect: `<p><b>Wirken:</b> Erhalte 1 Energie.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'NA',
    name: 'Soskel',
    id: 'Soskel',
    mageTitle: 'Riss-Magier-Aristokrat',
    ability: `
        <h2>Augeladenes Siegel</h2>
        <p class="ability-activation">In deinem Spieler-Zug während <i>Aktionen ausführen</i>:</p>
        <p>Wähle 1 Spieler. Dann wähle:<br/>
        Lege 1 Aufladung auf einen seiner Risse ohne Aufladung.
        <span class="or">OR</span>
        Lege 1 Aufladung von einem seiner Risse ab. Diese Spieler heilt 4 Leben.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Glücksmünze',
        expansion: 'NA',
        id: 'LuckyCoin',
        cost: 0,
        effect: `<p>Erhalte 1 <span class="aether">&AElig;</span>.<br/>
            Wirfst du jetzt 1 Energie ab? Erhalte 2 <span class="aether">&AElig;</span>.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'NA',
    name: 'Taqren',
    id: 'Taqren',
    mageTitle: 'Der Schild',
    ability: `
        <h2>Essenz-Manipulation</h2>
        <p class="ability-activation">In deinem Spieler-Zug während <i>Aktionen ausführen</i>:</p>
        <p>Bündele 1 Riss deiner Wahl (bei 1 Spieler deiner Wahl). Wähle 1 Spieler, der 1 Leben für jeden deiner aktiven Risse heilt.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Gabe des Geistes',
        expansion: 'NA',
        id: 'GiftOfSpirit',
        cost: 0,
        effect: `<p><b>Wirken:</b> Füge 1 Schaden zu.
            <span class="or">OR</span>
            <b>Wirken:</b> Wähle 1 anderen Spieler, der 1 Karte zieht.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 2,
  },
  {
    expansion: 'NA',
    name: 'Talix',
    id: 'Talix',
    mageTitle: 'Die Kette',
    ability: `
        <h2>Aufsteigende Asche</h2>
        <p class="ability-activation">In deinem Spieler-Zug während <i>Aktionen ausführen</i>:</p>
        <p>Die <i>Feste</i> heilt 5 Leben.
        <span class="or">OR</span>
        Zerstöre 2 Funken auf deiner Hand. Ist das passiert? Mische deine Reihenfolgekarte in
        das Reihenfolgedeck.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Relic',
        name: 'Feuerzirkon',
        expansion: 'NA',
        id: 'Furnacium',
        cost: 0,
        effect: `<p>Erhalte 1 <span class="aether">&AElig;</span>.<br/>
            Wirfst du jetzt bis zu 3 Zauber deiner Wahl von der Hand ab? Erhalte 1 <span class="aether">&AElig;</span>
            für jeden so abgeworfenen Zauber. Du darfst diese Karte oben auf dein Deck legen.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'NA',
    name: 'Rhia',
    id: 'Rhia',
    mageTitle: 'Riss-Magier-Schatzjägerin',
    ability: `
        <h2>Transformation</h2>
        <p class="ability-activation">In deinem Spieler-Zug während <i>Aktionen ausführen</i>:</p>
        <p>Lege 1 Karte von deiner Hand oder deinem Ablagestapel zurück auf ihren Vorrat.
        War es ein Artefakt? Erwirb gratis 1 Karte, die bis zu 3 <span class="aether">&AElig;</span>
        mehr kostet. Andernfalls erwirb gratis 1 Karte, die bis zu 2 <span class="aether">&AElig;</span>
        mehr kostet. Nimm die Karte immer direkt auf die Hand.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Planarbeutel',
        expansion: 'NA',
        id: 'PlanarPocket',
        cost: 0,
        effect: `<p>Erhalte 1 <span class="aether">&AElig;</span>.<br/>
            Erhalte 2 <span class="aether">&AElig;</span>, aber nur zum Erwerb von Artefakten.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'NA',
    name: 'Claudia',
    id: 'Claudia',
    mageTitle: 'Riss-Magier-Prospektorin',
    ability: `
        <h2>Ätherplosion</h2>
        <p class="ability-activation">Im Spieler-Zug eines anderen Spielers während <i>Aktionen ausführen</i>:</p>
        <p>Dieser Spieler erhält 2 <span class="aether">&AElig;</span>. Wenn er das nächste Mal in diesem Zug
        eine Karte erwirbt, erwirbst du gratis 1 Karte des gleichen Vorrats.
        <span class="or">OR</span>
        Der Spieler erhält 5 <span class="aether">&AElig;</span>.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Ätherskop',
        expansion: 'NA',
        id: 'Aetherscope',
        cost: 0,
        effect: `<p>Erhalte 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Wirft jetzt 1 anderer Spieler 1 Energie ab? Erhalte 2 Energie.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'NA',
    name: 'Lost',
    id: 'Lost',
    mageTitle: 'Lebendige Schmiede',
    ability: `
        <h2>Hörnchens Stärke</h2>
        <p class="ability-activation">In deinem Spieler-Zug während <i>Aktionen ausführen</i>:</p>
        <p>Nimm bis zu 4 Karten mit Kosten von 0 <span class="aether">&AElig;</span> aus deinem
        Ablagestapel zurück auf die Hand.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Herzschmiede',
        expansion: 'NA',
        id: 'HeartForge',
        cost: 0,
        effect: `<p>Erhalte 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Zerstöre 1 Funken oder 1 Splitter auf deiner Hand. Erhalte 1 Karte des
            gleichen Typs vom Schmiedestapel und nimm sie auf die Hand.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
]
