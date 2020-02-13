import Colors from 'themes/main/global/Colors'
import Typography from 'themes/main/global/Typography'

import Toolbar from 'themes/main/components/Toolbar'
import ExpansionPanel from 'themes/main/components/ExpansionPanel'

const mainTheme = {
  colors: Colors,
  typography: Typography,
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
    expansionPanel: ExpansionPanel,
  },
}

export type TurnOrderColors = typeof mainTheme.colors.turnOrderCards

export default mainTheme
