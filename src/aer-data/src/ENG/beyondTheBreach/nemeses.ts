import { Nemesis } from '../../../../aer-types/types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'BTB',
    name: 'The Terror in Brass',
    id: 'TheTerrorInBrass',
    health: 99,
    difficulty: 5,
    expeditionRating: 1,
    additionalInfo: '',
  },
  {
    expansion: 'BTB',
    name: 'Twice-Dead Prophet',
    id: 'TwiceDeadProphet',
    health: 50,
    difficulty: 6,
    expeditionRating: 3,
    additionalInfo: '',
  },
  {
    expansion: 'BTB',
    name: 'Oracle of Filth',
    id: 'OracleOfFilth',
    health: 80,
    difficulty: 6,
    expeditionRating: 2,
    additionalInfo: '',
  },
  {
    expansion: 'BTB',
    name: 'Wayward Reflection',
    id: 'WaywardReflection',
    health: 65,
    difficulty: 8,
    expeditionRating: 4,
    additionalInfo: '',
  },
  {
    expansion: 'BTB',
    name: 'Crooked Mask',
    id: 'CrookedMask-BTB',
    health: 65,
    difficulty: 5,
    expeditionRating: 2,
    additionalInfo: '',
    fightFiveAdditionalInfo: `
	<p>During setup, swap one of the nemesis turn order cards for the Unleash turn order card.</p>
	<p>The nemesis starts with 10 additional life.</p>
    <p>Play using Increased Difficulty.</p>
    `,
  },
]
