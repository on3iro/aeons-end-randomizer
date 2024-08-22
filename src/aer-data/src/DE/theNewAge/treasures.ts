import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'KadirsEmeraldShard',
    name: 'Kadirs Smaragd-Scherbe',
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Erhalte 1 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      Wähle 1 Spieler, der 1 Leben heilt.
      </p>
      `,
  },
  {
    id: 'GexsShatteredGeode',
    name: "Gex' Bruchgeoden-Scherbe",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Erhalte 1 <span class="aether">&AElig;</span>.<br/>
      Wähle 1 anderen Spieler. Du darfst die oberste Karte seines Ablagestapels auf die Hand nehmen.
      </p>
      `,
  },
  {
    id: 'JiansMoonstoneShard',
    name: 'Jians Mondstein-Scherbe',
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Erhalte 1 <span class="aether">&AElig;</span>.<br/>
      Erhalte 1 <span class="aether">&AElig;</span>, aber nur zum Erwerb von Kristallen.
      </p>
      `,
  },
  {
    id: 'LashsQuartzShard',
    name: 'Lashs Quartz-Scherbe',
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Erhalte 1 <span class="aether">&AElig;</span>.<br/>
      Sieh dir die oberste Karte des Reihenfolgedecks an. Siehst du eine Spieler-Reihenfolgekarte?
      Erhalte 1 <span class="aether">&AElig;</span>. Dann darfst du die angesehene Karte unter das Deck schieben.
      </p>
      `,
  },
  {
    id: 'XaxosFlare',
    name: "Xaxos' Leuchtfeuer",
    expansion: 'NA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Wirken:</b> Füge 1 Schaden zu.<br/>
      Sieh dir die oberste Karte des Reihenfolgedecks an. Siehst du eine Spieler-Reihenfolgekarte?
      +2 Schaden.
      </p>
      `,
  },
  {
    id: 'AdelheimsAmethystShard',
    name: 'Adelheims Amethyst-Scherbe',
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Erhalte 1 <span class="aether">&AElig;</span>.<br/>
      Wähle 1 anderen Spieler. Dieser Spieler darf 1 Karte ziehen und dann 1 Karte seiner Wahl von der Hand abwerfen.
      </p>
      `,
  },
  {
    id: 'BramasBuriedLight',
    name: 'Bramas Verschüttetes Licht',
    expansion: 'NA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Wirken:</b> Füge 1 Schaden zu.<br/>
      Erhalte 1 <span class="aether">&AElig;</span> im Schritt <i>Aktionen ausführen.</i>
      </p>
      `,
  },
  {
    id: 'GarusTorch',
    name: 'Garus Fackel',
    expansion: 'NA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Wirken:</b> Füge 1 Schaden zu.<br/>
      <span class="or">OR</span>
      <b>Wirken:</b> Bündele 1 Riss deiner Wahl (bei 1 Spieler deiner Wahl).
      </p>
      `,
  },
  {
    id: 'XaxosPyre',
    name: "Xaxos' Scheiterhaufen",
    expansion: 'NA',
    subtype: 'Spell',
    level: 1,
    effect: `
      <p>
      <b>Wirken:</b> Füge 1 Schaden zu.<br/>
      Wirft 1 anderer Spieler 1 Karte seiner Wahl von der Hand ab? +2 Schaden.
      </p>
      `,
  },
  {
    id: 'MistsGarnetShard',
    name: 'Mists Granatium-Scherbe',
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Erhalte 1 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      Wähle 1 Spieler und wirke 1 seiner gebundenen Zauber.
      </p>
      `,
  },
  {
    id: 'ShimmeringCloakOfTheMagus',
    name: 'Schimmernder Mantel des Magus',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      <b>Immer nachdem ein Spieler seine Spezialfähigkeit eingesetzt hat:</b><br/>
      Dieser Spieler fügt 2 Schaden zu.
      </p>
      `,
  },
  {
    id: 'ImbuedShackles',
    name: 'Durchströmte Ketten',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      <b>Im Spielaufbau:</b><br/>
      Legt diese Karte neben einen Vorrat mit <span class="aether">&AElig;</span>-Kosten von 7 oder mehr.
      </p>
      <p>
      <b>Dauerhaft:</b><br/>
      Es kostet 1 <span class="aether">&AElig;</span> weniger, eine Karte dieses Vorrats zu erwerben.
      </p>
      `,
  },
  {
    id: 'GluttonsTooth',
    name: 'Zahn des Unersättlichen',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      <b>Immer wenn die letzte Karte eines Vorrats erworben oder zerstört wird:</b><br/>
      Wählt 1 Spieler, der 6 Schaden zufügt.
      </p>
      `,
  },
  {
    id: 'CoreOfRage',
    name: 'Kern des Hasses',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      <b>Im Spielaufbau:</b><br/>
      Legt diese Karte neben einen Artefakt- oder Zauber-Vorrat eurer Wahl.
      </p>
      <p>
      <b>Immer wenn ein Spieler eine Karte dieses Vorrats erwirbt:</b><br/>
      Dieser Spieler fügt 2 Schaden zu.
      </p>
      `,
  },
  {
    id: 'CleansingAmulet',
    name: 'Reinigendes Amulett',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      <b>Immer nachdem ein Spieler seine Spezialfähigkeit eingesetzt hat:</b><br/>
      Wählt 1 Spieler, der 1 Karte auf seiner Hand zerstören darf.
      </p>
      `,
  },
  {
    id: 'CarapaceFragement',
    name: 'Carapax-Fragment',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      <b>Im Spielaufbau:</b><br/>
      Legt diese Karte neben einen Artefakt- oder Zauber-Vorrat eurer Wahl.
      </p>
      <p>
      <b>Immer wenn ein Spieler eine Karte dieses Vorrats erwirbt:</b><br/>
      Dieser Spieler bündelt 1 seiner Risse.
      </p>
      `,
  },
  {
    id: 'ThornedWhip',
    name: 'Dornenpeitsche',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      <b>Immer wenn ein Spieler einen Riss aktiviert:</b><br/>
      Dieser Spieler fügt 2 Schaden zu.
      </p>
      `,
  },
  {
    id: 'BonesOfDeathmind',
    name: 'Knochen des Gedankenschlächters',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      <b>Immer wenn ein Spieler einen Riss aktiviert:</b><br/>
      Dieser Spieler erhält 1 Energie.
      </p>
      <p>
      <b>Zu Beginn jedes Spieler-Zuges:</b><br/>
      Hast du keinen dunklen Riss? Erhalte 1 Energie.
      </p>
      `,
  },
  {
    id: 'AcceleratingGauntlets',
    name: 'Schnelligkeits-Handschuhe',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      <b>Einmalig zu Beginn deines ersten Zuges:</b><br/>
      Erwirb gratis 1 Karte mit <span class="aether">&AElig;</span>-Kosten von 4 oder weniger.
      </p>
      `,
  },
  {
    id: 'EssenceExtractor',
    name: 'Essenz-Extraktor',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      <b>Immer wenn du einen Kristall mit <span class="aether">&AElig;</span>-Kosten von 5 oder mehr ausspielst:</b><br/>
      Erhalte 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'BroochOfAttunment',
    name: 'Brosche der Einstimmung',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      <b>Wenn du einen Zauber mit <span class="aether">&AElig;</span>-Kosten von 6 oder mehr wirkst (1x pro Zug):</b><br/>
      Erhalte 2 Energie.
      </p>
      `,
  },
  {
    id: 'BladedCrystal',
    name: 'Klingenkristall',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      <b>Immer wenn du dem Erzfeind Schaden durch einen Zauber zufügst:</b><br/>
      Dieser Zauber fügt +1 Schaden zu.
      </p>
      `,
  },
  {
    id: 'PrismOfDestruction',
    name: 'Prisma der Zerstörung',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      <b>Dauerhaft:</b><br/>
      Wenn du keine dunklen Risse hast, fügt jeder von dir gewirkte Zauber +2 Schaden zu.
      </p>
      `,
  },
  {
    id: 'ForgottenTrinket',
    name: 'Vergessenes Kleinod',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      <b>Einmalig zu Beginn deines ersten Zuges:</b><br/>
      Bündele jeden deiner dunklen Risse 1-mal.
      </p>
      `,
  },
  {
    id: 'PrecisionMagnifier',
    name: 'Präzisionslupe',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      <b>Dauerhaft:</b><br/>
      Jeder Zauber mit <span class="aether">&AElig;</span>-Kosten von 2 oder mehr, den du wirkst, fügt +1 Schaden zu.
      </p>
      `,
  },
  {
    id: 'ShroudOfObfucation',
    name: 'Totenhemd der Verschleierung',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      <b>Wenn du in deinem Schritt <i>Zauber wirken</i> 2 oder mehr Zauber wirkst:</b><br/>
      Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'VerdantStaff',
    name: 'Ranken-Stab',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      <b>Immer wenn du einen Zauber erwirbst:</b><br/>
      Heile 1 Leben.
      </p>
      `,
  },
  {
    id: 'FlowingMantle',
    name: 'Wallender Mantel',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      <b>Zu Beginn deines Zuges:</b><br/>
      Erhalte 1 <span class="aether">&AElig;</span>, aber nur zum Erwerb von Artefakten.
      </p>
      <p>
      <b>Immer wenn du ein Artefakt erwirbst:</b><br/>
      Du darfst es oben auf dein Deck legen.
      </p>
      `,
  },
]
