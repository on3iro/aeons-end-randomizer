import React from 'react'
import { connect } from 'react-redux'

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import { IMarketSetup, IMarketSetups } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as SupplySelection from '../../../Redux/Store/Supply/Selection'
import * as SupplySetups from '../../../Redux/Store/Settings/SupplySetups'


const renderMarketOptions = (activeMarketSetups: ReadonlyArray<IMarketSetup>) =>
  activeMarketSetups
    .map(setup => (
      <FormControlLabel
        key={setup.id}
        value={setup.id}
        control={<Radio />}
        label={setup.name}
      />
    ))

const MarketOptions = React.memo(({
  activeMarketSetups,
  allMarketSetups,
  expansionHandler,
  marketSetupId,
  selectSetup,
}: {
  activeMarketSetups: ReadonlyArray<IMarketSetup>,
  allMarketSetups: IMarketSetups,
  expansionHandler: (
    event: React.ChangeEvent<any> | undefined,
    expanded: boolean | string
  ) => void,
  marketSetupId: string,
  selectSetup: (setup: Readonly<IMarketSetup>) => SupplySelection.Action
}) => (
  <RadioGroup
    aria-label="Market Setup Options"
    name="marketOptions"
    value={marketSetupId}
    onChange={(event: React.ChangeEvent<any>) => {
      expansionHandler(undefined, false)
      selectSetup(allMarketSetups[event.currentTarget.value])
    }}
  >
    { renderMarketOptions(activeMarketSetups) }
  </RadioGroup>
))

const mapStateToProps = (state: RootState) => ({
  activeMarketSetups: SupplySetups.selectors.getActiveSetups(state),
  allMarketSetups: SupplySetups.selectors.getCustomAndPredefined(state),
})

const mapDispatchToProps = {
  selectSetup: SupplySelection.actions.selectSetup,
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketOptions)
