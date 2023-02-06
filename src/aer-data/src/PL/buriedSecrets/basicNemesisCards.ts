import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'BladeStorm-BS',
    expansion: 'BS',
    tier: 1,
    type: 'Attack',
    name: 'Nawałnica Ostrzy',
    effect: `
      <p>
        Gravehold otrzymuje 3 obrażenia. Gracz z najmniejszą liczbą otwartych Bram otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'HexofVulnerability-BS',
    expansion: 'BS',
    tier: 1,
    type: 'Power',
    name: 'Klątwa Nadwrażliwości',
    power: 3,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 3:</b> Umieść tę kartę obok gracza z największą liczbą punktów Życia. Do końca rozgrywki, gdy ten gracz otrzymuje obrażenia, otrzymuje dodatkowo 1 obrażenie.
      </p>
    `,
  },
  {
    id: 'ThrongCommander-BS',
    expansion: 'BS',
    tier: 1,
    type: 'Minion',
    name: 'Przywódca Stada',
    shields: 3,
    hp: 1,
    effect: `
      <p>
        <b>Trwały:</b> Jeżeli w grze jest co najmniej 2 innych Popleczników, Gravehold otrzymuje 6 obrażeń. Następnie należy odrzucić tego Poplecznika. W przeciwnym przypadku, dowolny gracz otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'Divert-BS',
    expansion: 'BS',
    tier: 2,
    type: 'Attack',
    name: 'Odwrócenie',
    effect: `
      <p>
        Gracz z najdroższym przygotowanym Zaklęciem aktywuje to Zaklęcie. Obrażenia zadawane przez to Zaklęcie otrzymuje gracz, który je aktywował, zamiast Poplecznika albo Nemezis.
      </p>
    `,
  },
  {
    id: 'Depreciate-BS',
    expansion: 'BS',
    tier: 2,
    type: 'Power',
    name: 'Degradacja',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 2:</b> Dwukrotne Wyzwolenie. Gracz z najdroższą kartą na ręce niszczy ją. Następnie otrzymuje kartę z dowolnego stosu zasobów tego samego typu oraz o niższym koszcie niż zniszczona karta. Ten gracz otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'ArmoredHaze-BS',
    expansion: 'BS',
    tier: 2,
    type: 'Minion',
    name: 'Opancerzona Mgła',
    shields: 4,
    hp: 1,
    effect: `
      <p>
        <b>Trwały:</b> Dowolny gracz otrzymuje 1 obrażenie za każdy żeton Tarczy jaki znajduje się na tym Popleczniku. Następnie ten Poplecznik otrzymuje 1 obrażenie.
      </p>
    `,
  },
  {
    id: 'Muster-BS',
    expansion: 'BS',
    tier: 3,
    type: 'Attack',
    name: 'Mobilizacja',
    effect: `
      <p>
        Dwukrotne Wyzwolenie. Każdy Poplecznik w grze otrzymuje 5 punktów Życia.
      </p>
    `,
  },
  {
    id: 'BreachTunnel-BS',
    expansion: 'BS',
    tier: 3,
    type: 'Power',
    name: 'Wyłom Bramy',
    power: 4,
    effect: `
      <p>
        <b>Moc 4:</b> Jeżeli każdy gracz ma co najmniej jedną zamkniętą Bramę, Nemezis przytłacza ich, a gracze przegrywają.
      </p>
    `,
  },
  {
    id: 'MailedShade-BS',
    expansion: 'BS',
    tier: 3,
    type: 'Minion',
    name: 'Wysłannik Cienia',
    shields: 1,
    hp: 8,
    effect: `
      <p>
        Temu Poplecznikowi można zadawać obrażenia tylko poprzez Zaklęcia aktywowane z Bramy III.<br />
        <br />
        <b>Trwały:</b> Dwukrotne Wyzwolenie.
      </p>
    `,
  },
]
