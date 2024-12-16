import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'SD',
    name: 'Nook',
    id: 'Nook',
    mageTitle: 'Orb-Rufer',
    abilityName: `Ätherische Verdichtung`,
    abilityActivation: `In deinem Spielzug während <i>Aktionen ausführen</i>:`,
    abilityEffect: `
        <p>Du darfst 1 Karte auf deiner Hand oder in deinem Ablagestapel zerstören.<br/>
        Erhalte 4 <span class="aether">&AElig;</span>.<br/>
        Den nächsten Zauber, den du in diesem Zug erwirbst, darfst du direkt auf die Hand nehmen.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Mystischer Orb',
        expansion: 'SD',
        id: 'MysticOrb',
        cost: 0,
        effect: `<p>Erhalte 1 Energie.<br/>
          Wirke 1 Zauber deiner Wahl auf deiner Hand. Gibt es einen Vorrat dieses Zaubers? Lege ihn
          dorthin zurück. Wirfst du jetzt 1 Energie ab? Erwirb gratis 1 Zauber, der weniger kostet
          als der gerade gewirkte Zauber.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 9,
  },
]
