import React from 'react'
import Tile from 'components/molecules/Tile'
import FriendModal from 'components/molecules/FriendModal'
import TileBody from './TileBody'
import { withTheme } from 'styled-components/macro'
import { Friend } from 'aer-types/types'
import { useModal } from 'hooks/useModal'
import Grid from '@material-ui/core/Grid'

type Props = {
  friend: Friend
  theme: any
}

const FriendTile = ({friend, theme}: Props) => {
  const {show, RenderModal } = useModal()
  return <Grid item xs={12} sm={6}>
    <Tile
      body={<TileBody them={friend} />}
      bgColor={
        theme.colors.cards['friend'].background
      }
      fontColor={theme.colors.text.primary}
      icon={theme.icons['friend']}
      iconColor={theme.colors.cards['friend'].color}
      showDetails={show}
    />
    <FriendModal id={friend.id} RenderModal={RenderModal} />
  </Grid>
}

export default withTheme(React.memo(FriendTile))