import { pxToRem } from './helpers/pxToRem'

import { Colors } from './global/Colors'
import { Typography } from './global/Typography'

import { Toolbar } from './components/Toolbar'

const mainTheme = {
  colors: Colors,
  typography: Typography,
  heading: {
    fontSize: pxToRem(15),
  },
  spacing: {
    unit: 8,
  },
  icons: {
    nemesis: 'ra-broken-skull',
    mage: 'ra-fluffy-swirl',
    gem: 'ra-crystals',
    relic: 'ra-crystal-wand',
    spell: 'ra-scroll-unfurled',
    treasure: 'ra-diamond',
  },
  components: {
    toolbar: Toolbar,
  },
}

export type TurnOrderColors = typeof mainTheme.colors.turnOrderCards

export default mainTheme
