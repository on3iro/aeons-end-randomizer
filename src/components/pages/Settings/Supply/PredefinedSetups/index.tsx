import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../../../Redux/Store'
import { IMarketSetup } from '../../../../../types'

import ListWrapper from '../../../../molecules/ListWrapper'

import CheckboxWithPreview from '../CheckboxWithPreview'

export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: IMarketSetup[],
  changeHandler: ChangeHandler
) =>
  items.map(item => (
    <CheckboxWithPreview setup={item} changeHandler={changeHandler} />
  ))

const mapStateToProps = (state: RootState) => ({
  predefinedSetups: selectors.Settings.SupplySetups.getPredefinedAsArray(state),
})

const mapDispatchToProps = {
  toggleSetup: actions.Settings.SupplySetups.toggleSetup,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const PredefinedSetups = React.memo(
  ({ predefinedSetups, toggleSetup }: Props) => {
    const handleSelection = useCallback(
      (id: string) => {
        toggleSetup(id, 'Predefined')
      },
      [toggleSetup]
    )

    return (
      <React.Fragment>
        <ListWrapper label="Predefined Setups">
          <React.Fragment>
            {renderCheckboxes(predefinedSetups, handleSelection)}
          </React.Fragment>
        </ListWrapper>
      </React.Fragment>
    )
  }
)

PredefinedSetups.displayName = 'PredefinedSetups'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PredefinedSetups)
