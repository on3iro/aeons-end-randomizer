import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'ApertureGhasts',
    expansion: 'BTBPromo',
    tier: 3,
    type: 'Minion',
    name: 'Aperture Ghasts',
	hp: 19,
    effect: `
      <p>
        When an effect deals damage to this, that effect deals 1 additonal damage.</p>
	  <p><b>Persistent:</b> Unleash twice.
      </p>
    `,
  },
]
