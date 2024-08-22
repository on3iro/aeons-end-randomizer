import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TA',
    name: 'Schimmernder Fluorit',
    id: 'ShiningFluorite',
    cost: 7,
    effect: `
      <p>
      Erhalte 3 <span class="aether">&AElig;</span>.<br/>
      Nimm den nächsten Zauber, den du in diesem Zug erwirbst, direkt
      auf deine Hand.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'TA',
    name: 'Polyphasen-Turbine',
    id: 'PolyphaseTurbine',
    cost: 3,
    effect: `
      <p>
      Ist das die erste Polyphasen-Turbine, die du in diesem Zug gespielt hast?
      Erhalte 2 <span class="aether">&AElig;</span>.
      <b>Andernfalls:</b> Erhalte 1 <span class="aether">&AElig;</span> und 1 Energie.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'TA',
    name: 'Riss-Greifer',
    id: 'BreachExtractor',
    cost: 5,
    effect: `
      <p>
      Wähle 1 Spieler, der bis zu 2 Karten auf seiner Hand zerstört.
      <span class="or">OR</span>
      Zerstöre diese Karte. Die <i>Feste</i> heilt 3 Leben.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'TA',
    name: 'Bündelungskanal',
    id: 'FocusingConduit',
    cost: 5,
    effect: `
      <p>
      Hänge diese Karte an 1 Riss deiner Wahl an (bei 1 Spieler deiner Wahl).
      <b>Angehängt:</b> Bündele diesen Riss nach deinem <i>Schritt Zauber</i> wirken.
      Zerstöre diese Karte, sobald der Riss aktiviert wird.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TA',
    name: 'Doppelschlag',
    id: 'DualFlash',
    cost: 3,
    effect: `
      <p>
      <b>Wirken:</b> Füge 2 Schaden zu.<br/>
      Ist das der erste Doppelschlag, den du in diesem Schritt <i>Zauber wirken</i>
      in diesem Zug gewirkt hast? Du darfst 1 gebundenen Doppelschlag
      (von 1 Spieler deiner Wahl) wirken, der gebunden bleibt.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TA',
    name: 'Wirbel der Wiederkehr',
    id: 'DustCaller',
    cost: 5,
    effect: `
      <p>
      <b>Wirken:</b> Füge 4 Schaden zu.<br/>
      Wähle 1 anderen Spieler. Dieser Spieler nimmt 1 Karte mit
      <span class="aether">&AElig;</span>-Kosten von 0 aus seinem
      Ablagestapel zurück auf die Hand.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TA',
    name: 'Symbiotische Synthese',
    id: 'SymbioticSynapse',
    cost: 7,
    effect: `
      <p>
      <b>Wirken:</b> Füge 4 Schaden zu.<br/>
      Befindet sich mindestens 1 weitere Karte Symbiotische Synthese
      in einem Spieler-Ablagestapel? <b>ECHO.</b>
      </p>
        `,
    keywords: ['echo'],
  },
]
