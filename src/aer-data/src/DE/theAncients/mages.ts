import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'TA',
    name: 'Mazra',
    id: 'Mazra',
    mageTitle: 'Belesene Riss-Magierin',
    abilityName: `Nachforschungen`,
    abilityActivation: `In deinem Spieler-Zug während <i>Aktionen ausführen</i>:`,
    abilityEffect: `
        <p>
        Zerstöre 1 Mazra-Karte auf deiner Hand. Erwirb gratis 1 Mazra-Karte von deinem Forschungs-Stapel,
        die bis zu 3 <span class="aether">&AElig;</span> mehr kostet. Nimm sie direkt auf die Hand.
        <span class="or">OR</span>
        Nimm alle Mazra-Karten aus deinem Ablagestapel zurück auf die Hand.
        </p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: "Mazra's Studies",
        expansion: 'TA',
        id: 'MazrasStudies',
        cost: 0,
        effect: `<p><b>Wirken:</b> Füge 1 Schaden zu.
            <span class="or">OR</span>
            <b>Wirken:</b> Bündele deinen Riss III.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'TA',
    name: 'Qu',
    id: 'Qu',
    mageTitle: 'Erbauer und Zerstörerin',
    abilityName: `Duale Realität`,
    abilityActivation: `In deinem Spieler-Zug während <i>Aktionen ausführen</i>:`,
    abilityEffect: `
        <p>
        Bist du in <b>Zerstörerin</b>-Gestalt? Wirke bis zu 2 gebundene Zauber mit unterschiedlichen
        Namen von 1 oder mehr Spielern. Bist du in <b>Erbauerin</b>-Gestalt? Wähle 1 Spieler, der bis zu
        2 Zauber aus seinem Ablagestapel an seine aktiven Risse bindet.<br/>
        Drehe danach dein Gestalt-Plättchen auf die andere Seite.
        </p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Relic',
        name: 'Gestaltwandel',
        expansion: 'TA',
        id: 'ChangeForm',
        cost: 0,
        effect: `<p>Qu dreht ihr Gestalt-Plättchen auf die andere Seite um.</p>`,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Verschmolzener Radit',
        expansion: 'TA',
        id: 'MeldedRadite',
        cost: 0,
        effect: `<p>Erhalte 0 <span class="aether">&AElig;</span>.<br/>
            Wähle 1 Spieler. Du darfst 1 seiner gebundenen Zauber wirken.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 8,
  },
]
