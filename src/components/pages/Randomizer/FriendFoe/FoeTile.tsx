import React from 'react'
import Tile from 'components/molecules/Tile'
import FoeModal from 'components/molecules/FoeModal'
import TileBody from './TileBody'
import { withTheme } from 'styled-components/macro'
import { Foe } from 'aer-types/types'
import { useModal } from 'hooks/useModal'
import Grid from '@material-ui/core/Grid'

type Props = {
  foe: Foe
  theme: any
}

const FoeTile = ({foe, theme}: Props) => {
  const {show, RenderModal} = useModal()
  return <Grid item xs={12} sm={6}>
    <Tile
      body={<TileBody them={foe} />}
      bgColor={
        theme.colors.cards['foe'].background
      }
      fontColor={theme.colors.text.primary}
      icon={theme.icons['foe']}
      iconColor={theme.colors.cards['foe'].color}
      showDetails={show}
    />
    <FoeModal id={foe.id} RenderModal={RenderModal} />
  </Grid>
}

export default withTheme(React.memo(FoeTile))