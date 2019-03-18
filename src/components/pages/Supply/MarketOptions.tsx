import React from 'react'
import { connect } from 'react-redux'

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';

import MarketOptionsWrapper from './MarketOptionsWrapper';
import PreviewTile from './PreviewTile';
import PreviewTileList from './PreviewTileList';
import PreviewTileListItem from './PreviewTileListItem';

import { IMarketSetup, IMarketSetups } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as SupplySelection from '../../../Redux/Store/Supply/Selection'
import * as SupplySetups from '../../../Redux/Store/Settings/SupplySetups'

import { getOperationString } from './helpers'

const renderMarketSetupItems = (tiles: any, classes: any) => tiles.map( (tile: any, index: number) => (
  <PreviewTileListItem key={index} className={`${classes[tile.type.toLowerCase()]}`}>
    { getOperationString(tile.operation, tile.values, tile.threshold) }
  </PreviewTileListItem>
))

const renderMarketOptionsNew = (
  activeMarketSetups: ReadonlyArray<IMarketSetup>,
  allMarketSetups: IMarketSetups,
  expansionHandler: (
    event: React.ChangeEvent<any> | undefined,
    expanded: boolean | string
  ) => void,
  marketSetupId: string,
  selectSetup: (setup: Readonly<IMarketSetup>) => SupplySelection.Action,
  classes: any
) =>
  activeMarketSetups
    .map(setup => (
      <PreviewTile key={setup.id}
        onClick={(event: any) => {
          expansionHandler(undefined, false)
          selectSetup(allMarketSetups[event.currentTarget.dataset.value])
        }}
        data-value={setup.id}
        className={marketSetupId === setup.id ? classes.cardSelected : ''}
      >
        <PreviewTileList>
          { renderMarketSetupItems(setup.tiles, classes) }
        </PreviewTileList>
        <Typography variant="caption" className={`${classes.cardLabel} ${(marketSetupId === setup.id) ? classes.cardLabelSelected : ''}`}>{setup.name}</Typography>
      </PreviewTile>
    ))

const MarketOptions = React.memo(({
  activeMarketSetups,
  allMarketSetups,
  expansionHandler,
  marketSetupId,
  selectSetup,
  classes,
}: {
  activeMarketSetups: ReadonlyArray<IMarketSetup>,
  allMarketSetups: IMarketSetups,
  expansionHandler: (
    event: React.ChangeEvent<any> | undefined,
    expanded: boolean | string
  ) => void,
  marketSetupId: string,
  selectSetup: (setup: Readonly<IMarketSetup>) => SupplySelection.Action,
  classes: any
}) => (
  <MarketOptionsWrapper>
    { renderMarketOptionsNew(
      activeMarketSetups,
      allMarketSetups,
      expansionHandler,
      marketSetupId,
      selectSetup,
      classes
    ) }
  </MarketOptionsWrapper>
))

const mapStateToProps = (state: RootState) => ({
  activeMarketSetups: SupplySetups.selectors.getActiveSetups(state),
  allMarketSetups: SupplySetups.selectors.getCustomAndPredefined(state),
})

const mapDispatchToProps = {
  selectSetup: SupplySelection.actions.selectSetup,
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketOptions)
