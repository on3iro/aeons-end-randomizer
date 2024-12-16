import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'IW',
    name: 'Inco',
    id: 'Inco',
    mageTitle: 'Kind der Natur',
    abilityName: `Wucherndes Wachstum`,
    abilityActivation: `In deinem Spieler-Zug während <i>Aktionen ausführen</i>:`,
    abilityEffect: `
        Wirke beliebig viele gebundene Rosendornen (bei 1 oder mehr Spielern) mit jeweils +2 Schaden.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Ranken-Smaragd',
        expansion: 'IW',
        id: 'VerdantEmerald',
        cost: 0,
        effect: `<p>Erhalte 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Erwirb gratis 1 Rosendorn vom Rosendorn-Stapel und lege ihn auf den Ablagestapel 1 Spielers deiner Wahl.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'IW',
    name: 'Razra',
    id: 'Razra',
    mageTitle: 'Riss-Magier-Bändigerin',
    abilityName: `Reißer abrichten`,
    abilityActivation: `In deinem Spieler-Zug während <i>Aktionen ausführen</i>:`,
    abilityEffect: `
        <p>Zerstöre 1 Reißer-Karte auf deiner Hand. Erwirb gratis 1 Reißer-Karte von deinem Reißer-Stapel, die
        bis zu 3 <span class="aether">&AElig;</span> mehr kostet. Nimm sie direkt auf die Hand.
        <span class="or">OR</span>
        Nimm alle Reißer-Karten aus deinem Ablagestapel zurück auf die Hand.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Relic',
        name: 'Reisser, Hilfe!',
        expansion: 'IW',
        id: 'RipHelp',
        cost: 0,
        effect: `<p>Erhalte 1 Energie.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
]
