import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'BladeStorm-BS',
    expansion: 'BS',
    tier: 1,
    type: 'Attack',
    name: 'Klingensturm',
    effect: `
      <p>
        Fügt der <i>Feste</i> <b>3</b> Schaden zu.<br />
        <br />
        Fügt dem Spieler mit den wenigsten aktiven Rissen <b>2</b> Schaden zu.
      </p>
    `,
  },
  {
    id: 'HexofVulnerability-BS',
    expansion: 'BS',
    tier: 1,
    type: 'Power',
    name: 'Fluch der Verwundbarkeit',
    power: 3,
    effect: `
      <p>
        <b>VERHINDERN:</b> Bezahle 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>ZEIT 3:</b> Legt diese Karte neben den Spieler mit dem meisten übrigen Leben.
        Für diesen Spieler gilt fortan:<br />
        <b>Erleidest du Schaden? +1</b> Schaden.<br />
        (<i>Fluch der Verwundbarkeit kann von nun an nicht mehr abgeworfen werden.</i>)
      </p>
    `,
  },
  {
    id: 'ThrongCommander-BS',
    expansion: 'BS',
    tier: 1,
    type: 'Minion',
    name: 'Verschlinger',
    shields: 3,
    hp: 1,
    effect: `
      <p>
        <b>ANSTURM:</b> 2 oder mehr weitere MONSTER im Spiel? Füge der <i>Feste</i> <b>6</b> Schaden zu und werft dieses MONSTER ab. <b>Andernfalls:</b>
        Fügt 1 Spieler eurer Wahl <b>2</b> Schaden zu.
      </p>
    `,
  },
  {
    id: 'Divert-BS',
    expansion: 'BS',
    tier: 2,
    type: 'Attack',
    name: 'Umleiten',
    effect: `
      <p>
        Wählt den Spieler mit dem gebundenen Zauber mit den höchsten <span class="aether">&AElig;</span>-Kosten.
        Dieser Spieler wirkt diesen Zauber und muss sich den Schaden dieses Zaubers selbst zufügen (statt einem MONSTER
        oder dem Erzfeind).
      </p>
    `,
  },
  {
    id: 'Depreciate-BS',
    expansion: 'BS',
    tier: 2,
    type: 'Power',
    name: 'Verachtung',
    power: 2,
    effect: `
      <p>
        <b>VERHINDERN:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>ZEIT 2:</b> SPEZIAL 2. Wählt den Spieler mit der Karte mit den höchsten <span class="aether">&AElig;</span>-Kosten auf der Hand:
        Zerstöre diese Karte. Dann erwirb gratis 1 Karte desselben Typs, die weniger kostet als die gerade zerstörte Karte.<br />
        Fügt diesem Spieler <b>2</b> Schaden zu.
      </p>
    `,
  },
  {
    id: 'ArmoredHaze-BS',
    expansion: 'BS',
    tier: 2,
    type: 'Minion',
    name: 'Schleierwölfe',
    shields: 4,
    hp: 1,
    effect: `
      <p>
        <b>ANSTURM:</b> Fügt 1 Spieler eurer Wahl <b>X</b> Schaden zu.<br />
        X= Anzahl Schilde hier.<br />
        <br />
        Dann fügt diesem MONSTER <b>1</b> Schaden zu.
      </p>
    `,
  },
  {
    id: 'Muster-BS',
    expansion: 'BS',
    tier: 3,
    type: 'Attack',
    name: 'Versammeln',
    effect: `
      <p>
        SPEZIAL 2.<br />
        <br />
        Jedes MONSTER heilt 5 Leben.
      </p>
    `,
  },
  {
    id: 'BreachTunnel-BS',
    expansion: 'BS',
    tier: 3,
    type: 'Power',
    name: 'Riss-Tunnel',
    power: 4,
    effect: `
      <p>
        <b>ZEIT 4:</b> Hat jeder Spieler noch mindestens 1 dunklen Riss?<br />
        <i>Der Erzfeind überrollt euch.</i><br />
        Ihr habt VERLOREN.
      </p>
    `,
  },
  {
    id: 'MailedShade-BS',
    expansion: 'BS',
    tier: 3,
    type: 'Minion',
    name: 'Feuriger Schemen',
    shields: 1,
    hp: 8,
    effect: `
      <p>
        <b>DAUERHAFT:</b> Diesem MONSTER kann nur Schaden von Zaubern zugefügt werden, die an Riss III gebunden sind.<br />
        <br />
        <b>ANSTURM:</b> SPEZIAL 2.
      </p>
    `,
  },
]
