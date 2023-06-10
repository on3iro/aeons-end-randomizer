import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'LabyrinthWisp-OD',
    expansion: 'OD',
    tier: 1,
    type: 'Minion',
    name: 'Kłąb Dymu',
    hp: 5,
    effect: `
      <p>
        <b>TRWAŁY:</b> Dowolny gracz odrzuca przygotowane Zaklęcie.<br />
        <br />
        <span class="or">ALBO</span><br />
        <br />
        Dowolny gracz traci 1 Ładunek.
      </p>
    `,
  },
  {
    id: 'Assail-OD',
    expansion: 'OD',
    tier: 2,
    type: 'Attack',
    name: 'Napaść',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Gracz z najdroższym przygotowanym Zaklęciem odkłada to Zaklęcie na wierzch swojej talii.
      </p>
    `,
  },
  {
    id: 'DireAbbatoir-OD',
    expansion: 'OD',
    tier: 3,
    type: 'Power',
    name: 'Straszliwa Rzeź',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Gracz z największą liczbą punktów życia otrzymuje obrażenia równe tej liczbie.
      </p>
    `,
  },
]
