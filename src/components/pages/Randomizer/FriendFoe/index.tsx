import React from 'react'
import { connect } from 'react-redux'
import { RootState, actions, selectors } from 'Redux/Store'
import ShuffleButton from 'components/atoms/ShuffleButton'
import NoSelectedFriendFoeModuleMaterial from './NoSelectedFriendFoeModuleMaterial'
import PlayerCountSelection from 'components/molecules/PlayerCountSelection'
import EmptyHint from './EmptyHint'
import SupplyList from 'components/molecules/SupplyList'
import styled from 'styled-components/macro'
import FriendTile from './FriendTile'
import FoeTile from './FoeTile'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const mapStateToProps = (state: RootState) => {
  const friendId = selectors.Randomizer.FriendFoe.getFriend(state)
  const foeId = selectors.Randomizer.FriendFoe.getFoe(state)
  const bannerIds = selectors.Randomizer.FriendFoe.getBanners(state)
  return {
    playerCount: selectors.TurnOrder.Configuration.getSelectedPlayerCount(
      state
    ),
    availableFriends: selectors.Settings.Expansions.getSelectedFriendsForSelectedExpansions(
      state
    ),
    availableFoes: selectors.Settings.Expansions.getSelectedFoesForSelectedExpansions(
      state
    ),
    availableBanners: selectors.Settings.Expansions.getSelectedBannersForSelectedExpansions(
      state
    ),
    friend: friendId && selectors.Settings.Expansions.Friends.content.getById(state, {id: friendId}),
    foe: foeId && selectors.Settings.Expansions.Foes.content.getById(state, {id: foeId}),
    banners: bannerIds?.map((id: string) => selectors.Settings.Expansions.Banners.content.getById(state, {id})),
  }
}

const mapDispatchToProps = {
  setRandomFriend: actions.Randomizer.FriendFoe.setRandomFriend,
  setRandomFoe: actions.Randomizer.FriendFoe.setRandomFoe,
  setRandomBanners: actions.Randomizer.FriendFoe.setRandomBanners,
  setFriend: actions.TurnOrder.Configuration.setFriend,
  setFoe: actions.TurnOrder.Configuration.setFoe,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const FriendFoeWrapper = styled('div')`
  margin-top: 24px;
  width: 100%;
`

const FriendFoe = ({
  playerCount,
  availableFriends,
  availableFoes,
  availableBanners,
  friend,
  foe,
  banners,
  setRandomFriend,
  setRandomFoe,
  setRandomBanners,
  setFriend,
  setFoe,
}: Props) => {
  if (!availableFriends.length && !availableFoes.length && !availableBanners.length) {
    return <NoSelectedFriendFoeModuleMaterial />
  }
  const randomizeFriend = () => {
    setRandomFriend(availableFriends)
    setFriend(true)
  }
  const randomizeFoe = () => {
    setRandomFoe(availableFoes)
    setFoe(true)
  }
  const randomizeBanners = () => {
    setRandomBanners(availableBanners, playerCount.amount)
  }
  const randomizeAll = () => {
    randomizeFriend()
    randomizeFoe()
    randomizeBanners()
  }
  const noCardsRolled = !friend && !foe && !banners
  return <>
    <PlayerCountSelection>
      <span>
        <Button variant="contained" disabled={!availableFriends.length} onClick={randomizeFriend}>Roll Friend</Button>
        <Button variant="contained" disabled={!availableFoes.length} onClick={randomizeFoe}>Roll Foe</Button>
        <Button variant="contained" disabled={!availableBanners.length} onClick={randomizeBanners}>Roll Banners</Button>
      </span>
    </PlayerCountSelection>
    {noCardsRolled ? (
      <EmptyHint>Tap button to draw friends, foes, and banners!</EmptyHint>
    ) : <>
      {(friend || foe) && <FriendFoeWrapper>
        <Grid container spacing={16}>
          {friend && <FriendTile friend={friend} />}
          {foe && <FoeTile foe={foe} />}
        </Grid>
      </FriendFoeWrapper>}
    {banners && <SupplyList tiles={banners.map((banner) => {return {...banner, canBeLocked: false}})} />}
    </>
    }
    
    <ShuffleButton
        onClick={randomizeAll}
        color="primary"
        variant="extended"
        disabled={!availableFriends.length || !availableFoes.length || !availableBanners.length}
        withBottomNav={true}
      >
        Draw everything
      </ShuffleButton>
  </>
} 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(FriendFoe))