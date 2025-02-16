import React, { useState } from 'react'
import { connect } from 'react-redux'
import { RootState, selectors } from 'Redux/Store'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '../FormControl'
import FormLabel from './FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

import { FriendsAndFoesConfig } from 'aer-types/types'

const mapStateToProps = (state: RootState) => {
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
  }
}
type OwnProps = {
  friendFoeConfig: FriendsAndFoesConfig | undefined
  setFriendFoeConfig: (config: FriendsAndFoesConfig | undefined) => void
}

type Props = ReturnType<typeof mapStateToProps> & OwnProps

const FriendFoeSelect = ({
    playerCount,
    availableFriends,
    availableFoes,
    availableBanners,
    friendFoeConfig,
    setFriendFoeConfig,
  }: Props) => {
    const [lastFriendFoeConfig, setLastFriendFoeConfig] = useState<FriendsAndFoesConfig>(friendFoeConfig ?? { playerCountForBanners: playerCount.amount})
    const playerCounts : Array<(1 | 2 | 3 | 4)> = [1, 2, 3, 4]

    const setPlayerCountForBanners = (playerCountForBanners: 1 | 2 | 3 | 4) => {
      let config = {...lastFriendFoeConfig, playerCountForBanners}
      setLastFriendFoeConfig(config)
      if (friendFoeConfig != null) {
        setFriendFoeConfig(config)
      }
    }

    return <>
      <FormLabel>Friends and Foes</FormLabel>
      <FormGroup>
        <FormControl component={"fieldset" as "div"}>
          <FormControlLabel
            control={
              <Checkbox
                id="uniqueMageNames"
                checked={friendFoeConfig != null}
                onChange={(_, checked) => setFriendFoeConfig(checked ? lastFriendFoeConfig : undefined)}
                disabled={availableBanners.length < 3 && !availableFriends.length && !availableFoes.length}
              />
            }
            label="Use Friends and Foes"
          />
        </FormControl>
        <FormControl>
          <FormControlLabel
            label="Players (Banners): "
            labelPlacement='start'
            disabled={friendFoeConfig == null}
            style={{marginLeft: 36 }}
            control={
              <RadioGroup
                value={String(lastFriendFoeConfig.playerCountForBanners)}
                row={true}
              >
                { playerCounts.map(playerCount => 
                  <FormControlLabel
                    key={playerCount}
                    value={String(playerCount)}
                    disabled={friendFoeConfig == null || availableBanners.length < playerCount + 2}
                    checked={lastFriendFoeConfig.playerCountForBanners === playerCount}
                    onChange={(event) => setPlayerCountForBanners(playerCount)}
                    label={`${playerCount} (${playerCount + 2})`}
                    labelPlacement='top'
                    control={<Radio/>}
                  />)}
              </RadioGroup>
            }
          />
        </FormControl>
      </FormGroup>
    </>
}

export default connect(mapStateToProps, {})(React.memo(FriendFoeSelect))
