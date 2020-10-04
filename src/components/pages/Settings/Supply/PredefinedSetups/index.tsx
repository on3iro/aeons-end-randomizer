import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { IMarketSetup } from 'aer-types/types'

import { RootState, actions, selectors } from 'Redux/Store'

import ListWrapper from 'components/molecules/ListWrapper'

import CheckboxWithPreview from '../CheckboxWithPreview'

export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: IMarketSetup[],
  changeHandler: ChangeHandler
) =>
  items.map((item) => (
    <CheckboxWithPreview
      key={item.id}
      setup={item}
      changeHandler={changeHandler}
    />
  ))

const mapStateToProps = (state: RootState) => ({
  predefinedSetups: selectors.Settings.SupplySetups.getPredefinedList(state),
})

const mapDispatchToProps = {
  toggleSetup: actions.Settings.SupplySetups.toggleSetup,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const PredefinedSetups = ({ predefinedSetups, toggleSetup }: Props) => {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(PredefinedSetups))
