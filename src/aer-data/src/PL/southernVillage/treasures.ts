import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'IncosSpreadingEmerald',
    name: "Szmaragd Bujności Inca",
    expansion: 'SV',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
        Następnym razem, gdy w tej turze pozyskasz kartę o koszcie 3 <span class="aether">&AElig;</span> 
        lub mniej, dowolny sojusznik pozyskuje kopię tej karty z rynku zasobów.
      </p>
    `,
  },
  {
    id: 'LostsForgedCrystal',
    name: "Hartowany Kryształ Zgubionego",
    expansion: 'SV',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        <span class="hint">(Na początku gry, dodaj Kryształ do swojego stosu kart odrzuconych.)</span><br />
        Otrzymujesz 2 <span class="aether">&AElig;</span>.
      </p>
    `,
  },
  {
    id: 'OnyxElixir',
    name: 'Onyxowy Eliksir',
    expansion: 'SV',
    level: 2,
    effect: `
      <p>
        Na początku rozgrywki umieść tę kartę obok stosu zasobów o koszcie 
        7 <span class="aether">&AElig;</span> lub więcej. Gdy gracz pozyskuje kartę z tego stosu, 
        otrzymuje również 2 punkty życia.
      </p>
    `,
  },
  {
    id: 'AshenRib',
    name: 'Spopielone Żebro',
    expansion: 'SV',
    level: 2,
    effect: `
      <p>
        Raz na turę, po tym, jak gracz zagra swój drugi Artefakt, dowolny sojusznik dobiera kartę.
      </p>
    `,
  },
  {
    id: 'MassacreHelm',
    name: 'Hełm Masakry',
    expansion: 'SV',
    level: 3,
    effect: `
      <p>
        Gdy w fazie aktywacji aktywujesz co najmniej trzy Zaklęcia, zadaj 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'CloakOfWisdom',
    name: 'Płaszcz Mądrości',
    expansion: 'SV',
    level: 3,
    effect: `
      <p>
        Jeśli na początku twojej fazy głównej masz na stosie kart odrzuconych co najmniej pięć kart,
        wzmocnij jedną ze swoich zamkniętych Bram.
      </p>
    `,
  },
]
