import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'ReevesRavenShard',
    name: 'Reeves Raben-Scherbe',
    expansion: 'promos',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Erhalte 1 <span class="aether">&AElig;</span>. Wirfst du jetzt 1 Karte deiner Wahl
        von der Hand ab? Erhalte 1 <span class="aether">&AElig;</span>.
      </p>
    `,
  },
  {
    id: 'NymsVision',
    name: 'Nyms Vorhersehung',
    expansion: 'promos',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
        <b>Wirken:</b> Füge 1 Schaden zu.<br />
        Sieh dir die oberste Karte des Erzfeind-Stapels an. Ist es ein ANGRIFF?
        Ehalte 2 <span class="aether">&AElig;</span>.
      </p>
    `,
  },
  {
    id: 'SparrowsAid',
    name: 'Sparrows Hilfe',
    expansion: 'promos',
    level: 1,
    effect: `
      <p>
        <b>Wirken:</b> Füge 1 Schaden zu.<br />
        Wähle 1 anderen Spieler. Dieser Spieler darf 1 Zauber seiner Wahl von der Hand
        an seine (auch dunklen) Risse binden.
      </p>
    `,
  },
  {
    id: 'WraithsEssence',
    name: 'Essenz des Traum-Händlers',
    expansion: 'promos',
    level: 2,
    effect: `
      <p>
      <b>Dauerhaft:</b><br/>
      Führt keinerlei Schritte aus, wenn ein Spieler ERSCHÖPFT wird.<br/>
      Ihr verliert nicht, wenn alle Spieler ERSCHÖPFT sind.
      </p>
    `,
  },
  {
    id: 'VolatileClasp',
    name: 'Schnapp-Halterung',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
      <b>Immer wenn du ein Artefakt mit <span class="aether">&AElig;</span>-Kosten von 4 oder
      mehr ausspielst:</b><br/>
      Wähle 1 anderen Spieler, der 1 Energie erhält.
      </p>
    `,
  },
  {
    id: 'BreachStabilizer',
    name: 'Riss-Stabilisator',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
      <b>Dauerhaft:</b><br/>
      An deinem Riss I dürfen unbegrenzt viele Funken gleichzeitig gebunden sein.
      </p>
    `,
  },
  {
    id: 'FangedChoker',
    name: 'Stachelbewehrter Halsreif',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
      <b>Nach deinem Schritt <i>Karten ziehen</i>:</b><br/>
      Sind die <span class="aether">&AElig;</span>-Kosten der Zauber auf deiner Hand
      zusammen 6 oder mehr? Ziehe 1 Karte.
      </p>
    `,
  },
  {
    id: 'EndlessBandolier',
    name: 'Endloser Brustgürtel',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
      <b>In deinem Schritt <i>Aktionen ausführen (1x pro Zug):</i></b><br/>
      Du darfst 1 Karte deiner Wahl von der Hand abwerfen. Tust du das?
      Füge 1 Schaden zu und erhalte 1 Energie.
      </p>
    `,
  },
  {
    id: 'SahalasBlackMeteorite',
    name: "Sahala's Black Meteorite",
    expansion: 'promos',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
        Gain 3 <span class="aether">&AElig;</span> that can only be used to focus 
        or open your IV breach.
      </p>
    `,
  },
  {
    id: 'NooksMysticFlourish',
    name: "Nook's Mystic Flourish",
    expansion: 'promos',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.<br />
        Cast a spell in your hand. If that spell costs 1 <span class="aether">&AElig;</span> 
        or more, return that spell to its supply pile, gain a spell from any supply pile that 
        costs less than the cast spell, and gain 1 charge.
      </p>
    `,
  },
  {
    id: 'RitualStaff',
    name: 'Ritual Staff',
    expansion: 'promos',
    level: 2,
    effect: `
      <p>
        When a player gains a card that costs 7 <span class="aether">&AElig;</span> or more, 
        add a power token to this card.<br />
        <br />
        At the start of the nemesis turn if the nemesis has exactly one turn order card 
        in the turn order discard pile, the nemesis suffers damage equal to the number 
        of tokens on this card.
      </p>
    `,
  },
  {
    id: 'CrownOfFangs',
    name: 'Crown Of Fangs',
    expansion: 'promos',
    level: 2,
    effect: `
      <p>
        At the start of the game, set this next to a spell supply pile that costs 
        6 <span class="aether">&AElig;</span> or more. These cards cost player's 1 less 
        <span class="aether">&AElig;</span> to gain.
      </p>
    `,
  },
  {
    id: 'EverfullPurse',
    name: 'Everfull Purse',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
        At the end of your draw phase, if the total cost of gems and relics in your hand 
        is 7 <span class="aether">&AElig;</span> or more, draw a card.
      </p>
    `,
  },
  {
    id: 'ArcaneTimepiece',
    name: 'Arcane Timepiece',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
        At the start of your first turn of the game, gain 2 charges.<br />
        <br />
        Once per game when the nemesis turn order card is drawn, you may lose 4 charges. 
        If you do, skip the nemesis turn.
      </p>
    `,
  },
  {
    id: 'BootsOfArcaneQuickening',
    name: 'Boots Of Arcane Quickening',
    expansion: 'promos',
    level: 3,
    effect: `
      <p>
        At the start of your first turn of the game, gain 4 <span class="aether">&AElig;</span> 
        that can only be used to gain a spell.
      </p>
    `,
  },
]
