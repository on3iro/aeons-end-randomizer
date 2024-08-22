import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'SD',
    name: 'Olivinit',
    id: 'Olivinite',
    cost: 3,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      Füge 1 MONSTER deiner Wahl 1 Schaden zu.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'SD',
    name: 'Spektral-Glas',
    id: 'CacheGlass',
    cost: 4,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.<br/>
      Befindet sich mindestens 1 Spektral-Glas in deinem Ablagestapel?
      Du darfst 1 Karte deiner Wahl in deinem Ablagestapel zerstören.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'SD',
    name: 'Reflexionskanal',
    id: 'ReflectiveConduit',
    cost: 3,
    effect: `
      <p>
      Hänge diese Karte an 1 Riss deiner Wahl an (bei 1 Spieler deiner Wahl).<br/>
      <b>Angehängt:</b> Wird ein Zauber von diesem Riss gewirkt? Der Spieler, der den
      Zauber gewirkt hat, darf ihn zurück auf die Hand nehmen (statt auf den Ablagestapel).
      Tut er das? Wirf diese Karte ab.
      </p>
      `,
    keywords: ['attach'],
  },
  {
    type: 'Relic',
    expansion: 'SD',
    name: 'Willensfessel',
    id: 'WillWeaver',
    cost: 7,
    effect: `
      <p>
      Erhalte 2 Energie.<br/>
      Nachdem du das nächste Mal in diesem Zug deine Spezialfähigkeit eingesetzt hast: Füge 3 Schaden zu.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Riss-Suche',
    id: 'BreachSeeker',
    cost: 5,
    effect: `
      <p>
      <b>ECHO.</b>
      </p>
      <p>
      <b>Wirken:</b> Füge 1 Schaden zu.<br/>
      Wähle 1 anderen Spieler und bündele 1 seiner Risse deiner Wahl.
      </p>
      `,
    keywords: ['echo'],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Crescendo-Strahl',
    id: 'CrescendoRay',
    cost: 4,
    effect: `
      <p>
      <b>Wirken:</b> Füge 3 Schaden zu.<br/>
      Erhalte 1 <span class="aether">&AElig;</span> für jeden weiteren deiner gebundenen Zauber.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Sturm-Schwaden',
    id: 'StormVapors',
    cost: 4,
    effect: `
      <p>
      <b>Wirken:</b> Füge 3 Schaden zu.<br/>
      Befindet sich mindestens 1 weitere Karte Sturm-Schwaden in deinem Spieler-Ablagestapel?
      Bündele 1 Riss deiner Wahl (bei 1 Spieler deiner Wahl).
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Mantra der Stärke',
    id: 'MantraOfStrength',
    cost: 3,
    effect: `
      <p>
      <b>Wirken:</b> Wähle 1 Spieler, der 1 seiner dunklen Risse mit den höchsten <span class="aether">&AElig;</span>-Kosten
      bündelt.<br/>
      Füge 1 Schaden zu.<br/>
      Zerstörst du jetzt diese Karte? +2 Schaden.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Flammenkette',
    id: 'EmbodyFlame',
    cost: 7,
    effect: `
      <p>
      <b>Wirken:</b> Füge 5 Schaden zu.<br/>
      Zerstörst du jetzt 1 Karte dieses Vorrats? +3 Schaden.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Kristall Ritual',
    id: 'SnapRitual',
    cost: 6,
    effect: `
      <p>
      <b>Gebunden (1x pro Zug):</b> Wirfst du in deinem Schritt <i>Aktionen ausführen</i>
      1 Karte deiner Wahl von der Hand ab? Füge 2 Schaden zu.</p>
      <p>
      <b>Wirken:</b> Füge 3 Schaden zu.
      </p>
        `,
    keywords: [],
  },
]
