import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Ambush-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Attack',
    name: 'Hinterhalt',
    effect: `
      <p>
        SPEZIAL 1. <br/>
		Fügt der Feste 2 Schaden zu. <br/>
		Fügt 1 Spieler eurer Wahl 1 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Conduct-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Attack',
    name: 'Leitfähig',
    effect: `
      <p>
        SPEZIAL 1. <br/>
        Fügt dem Spieler mit der meisten Energie 2 Schaden zu. Dieser Spieler erhält 1 Energie.        
      </p>
    `,
  },
  {
    id: 'CreepingCurse-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Power',
    name: 'Schleichender Flug',
    power: 3,
    effect: `
      <p>
        <b>VERHINDERN:</b> Bezahle 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 3:</b> SPEZIAL 1. <br/>
		Fügt 1 Spieler eurer Wahl 2 Schaden zu. Werft insgesamt 2 Karten von der Hand ab.
      </p>
    `,
  },
  {
    id: 'Daze-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Attack',
    name: 'Benebeln',
    effect: `
      <p>
        Fügt 1 Spieler eurer Wahl 2 Schaden zu. Dieser Spieler wirft 1 Karte seiner Wahl
		von der Hand ab. <br/>
		Hat die gerade abgeworfene Karte <span class="aether">&AElig;</span>-Kosten von 0?
		Fügt der Feste 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'EndlessChasm-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Power',
    name: 'Endloser Abgrund',
    power: 2,
    effect: `
      <p>
        <b>VERHINDERN:</b> Bezahle 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>ZEIT 2:</b> SPEZIAL 2. <br/>
		Fügt der Feste 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'AetherExtract-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Power',
    name: 'Aetherium-Extraktion',
    power: 2,
    effect: `
      <p>
        <b>ZEIT 2:</b> SPEZIAL 1. <br/>
		Wählt 1 Spieler, der 2 Kristalle seiner Wahl von der Hand abwirft. Haben die gerade abgeworfenen Kristalle
		<span class="aether">&AElig;</span>-Kosten von jeweils 0? SPEZIAL 1.
      </p>
    `,
  },
  {
    id: 'RavenousLeviathan-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Minion',
    name: 'Gefrässiger Leviathan',
    hp: 6,
    effect: `
      <p>
        <b>ANSTURM:</b> Fügt der Feste 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'SpineThresher-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Minion',
    name: 'Knochen Spinne',
    shields: 3,
    hp: 1,
    effect: `
      <p>
        <b>ANSTURM:</b> SPEZIAL 1. <br/>
		Fügt 1 Spieler eurer Wahl 1 Schaden zu.
      </p>
    `,
  },
  {
    id: 'CausticCocoon-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Minion',
    name: 'Giftiger Kokon',
    hp: 9,
    effect: `
      <p>
        <b>ANSTURM:</b> SPEZIAL 1. <br/>
		Füge der Feste 1 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Sap-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Attack',
    name: 'Schwächen',
    effect: `
      <p>
        SPEZIAL 2. Wählt 1 Spieler, der 2 Energie abwirft.
        <span class="or">ODER</span>
        SPEZIAL 2. Fügt 1 Spieler eurer Wahl 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Tremor-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Power',
    name: 'Beben',
    power: 2,
    effect: `
      <p>
        <b>VERHINDERN:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>ZEIT 2:</b> SPEZIAL 2. Füge der Feste 4 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Drain-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Attack',
    name: 'Entziehen',
    effect: `
      <p>
        SPEZIAL 1. <br/>
		Füge der Feste 2 Schaden zu. <br/>
		Werft insgesamt 2 gebundene Zauber ab. Gibt es jetzt noch mindestens
		1 gebundenen Zauber mit <span class="aether">&AElig;</span>-Kosten von 4 oder mehr? SPEZIAL 1.
      </p>
    `,
  },
  {
    id: 'HummingHive-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Minion',
    name: 'Drohnen-Stock',
    shields: 3,
    hp: 5,
    effect: `
      <p>
        <b>ANSTURM:</b> Fügt 1 Spieler eurer Wahl 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Hunted-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Attack',
    name: 'Gejagt',
    effect: `
      <p>
        SPEZIAL 2. <br/>
		Fügt dem Spieler mit dem geringsten übrigen Leben 1 Schaden zu.
      </p>
    `,
  },
  {
    id: 'TemptingOffer-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Power',
    name: 'Verlockendes Angebot',
    power: 3,
    effect: `
      <p>
        <b>VERHINDERN:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>ZEIT 3:</b> SPEZIAL 2. Fügt dem Spieler mit dem geringsten übrigen Leben
		3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Annihilate-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Attack',
    name: 'Auflösen',
    effect: `
      <p>
        SPEZIAL 2. <br/>
		Wählt den Spieler mit der Karte mit den höchsten <span class="aether">&AElig;</span>-Kosten
		auf der Hand: Wirf 2 Karten deiner Wahl von der Hand ab. Dann für jede Karte mit
		<span class="aether">&AElig;</span>-Kosten von 2 oder mehr auf deiner Hand:
		Fügt der Feste 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'FacetOgre-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Minion',
    name: 'Facetten-Oger',
    shields: 4,
    hp: 1,
    effect: `
      <p>
        <b>ANSTURM:</b> Fügt der Feste X Schaden zu. X = Anzahl der Schilde hier. Hat dieses
		MONSTER 0,1 oder 2 Schilde? Legt 1 Schild hierauf.
      </p>
    `,
  },
  {
    id: 'FlashofDecay-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Power',
    name: 'Strahl des Verfalls',
    power: 2,
    effect: `
      <p>
        <b>ZEIT 2:</b> SPEZIAL 2. <br/>
		Wählt den Spieler mit dem gebundenen Zauber mit den höchsten <span class="aether">&AElig;</span>-Kosten.
		Zerstört diesen Zauber. Hat dieser Zauber <span class="aether">&AElig;</span>-Kosten von 4
		oder weniger oder wurde gerade kein Zauber zerstört? SPEZIAL 1.
      </p>
    `,
  },
  {
    id: 'GatheringStorm-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Power',
    name: 'Aufziehender Sturm',
    power: 2,
    effect: `
      <p>
        <b>VERHINDERN:</b> Bezahle 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>ZEIT 2:</b> SPEZIAL 2. Befinden sich 2 Erzfeind-Reihenfolgekarten im Ablagestapel?
		Fügt 1 Spieler eurer Wahl 4 Schaden zu. <br/>
		<b>Andernfalls:</b> Fügt der Feste 4 Schaden zu.
      </p>
    `,
  },
  {
    id: 'MaddeningSpectre-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Minion',
    name: 'Wütender Geist',
    shields: 2,
    hp: 7,
    effect: `
      <p>
        <b>ANSTURM:</b> SPEZIAL 2.
      </p>
    `,
  },
  {
    id: 'Scatter-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Attack',
    name: 'Zersprengen',
    effect: `
      <p>
        SPEZIAL 2. <br/>
		Wählt 1 Spieler. Dieser Spieler zerstört 1 Karte mit den höchsten
		<span class="aether">&AElig;</span>-Kosten auf seiner Hand.
      </p>
    `,
  },
  {
    id: 'Suffocate-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Attack',
    name: 'Ersticken',
    effect: `
      <p>
        SPEZIAL 3.
        <span class="or">ODER</span>
        Fügt der Feste 3 Schaden zu. Fügt 1 Spieler eurer Wahl 3 Schaden zu.
      </p>
    `,
  },
]
