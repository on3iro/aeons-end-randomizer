import { pxToRem } from 'theme/helpers/pxToRem'

import { Colors } from 'theme/global/Colors'
import { Typography } from 'theme/global/Typography'

import { Toolbar } from 'theme/components/Toolbar'

export const theme = {
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

export type TurnOrderColors = typeof theme.colors.turnOrderCards
