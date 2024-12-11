import React from 'react'
import { Foe, Friend } from "aer-types/types"
import { RootState, selectors } from 'Redux/Store'

import InfoItem from 'components/molecules/InfoItem'

import List from '@material-ui/core/List'
import styled from 'styled-components/macro'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

const Name = styled(Typography)`
  font-weight: bold;
`

type OwnProps = {
  them: Friend | Foe
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const expansion = ownProps.them
    ? selectors.Settings.Expansions.Expansions.content.getExpansionById(state, {
        expansionId: ownProps.them.expansion,
      })
    : null

  return {
    expansion,
  }
}

type Props = ReturnType<typeof mapStateToProps> & OwnProps

const TileBody = ({them, expansion}: Props) => <>
  <Name component="p">
    {them && them.name ? them.name : '-'}
  </Name>
  <List>
    <InfoItem label="Set" info={expansion ? expansion.name : '-'} />
    <InfoItem
      label="Wave"
      info={expansion && expansion.wave ? expansion.wave : '-'}
    />
  </List>
</>

export default connect(mapStateToProps, {})(React.memo(TileBody))
