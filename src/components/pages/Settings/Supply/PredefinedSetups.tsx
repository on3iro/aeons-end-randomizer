import React from 'react'
import { connect } from 'react-redux'

import CheckboxList from '../../../CheckboxList'
import CheckboxWithPreview from './CheckboxWithPreview'

import { RootState, actions, selectors } from '../../../../Redux/Store'

const mapStateToProps = (state: RootState) => ({
  predefinedSetups: selectors.Settings.SupplySetups.getPredefinedAsArray(state),
})

const mapDispatchToProps = {
  toggleSetup: actions.Settings.SupplySetups.toggleSetup,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const PredefinedSetups = React.memo(
  ({ predefinedSetups, toggleSetup }: Props) => {
    const predefinedItems = predefinedSetups.map(setup => ({
      id: setup.id,
      name: setup.id,
      label: setup.name,
      checked: setup.active,
      setup: setup,
    }))

    return (
      <CheckboxList
        label="Predefined Setups"
        changeHandler={item => toggleSetup(item, 'Predefined')}
        items={predefinedItems}
        Component={({ checked, item, label, changeHandler, ...rest }) => {
          const setup = predefinedSetups.find(setup => setup.id === item)
          return (
            <CheckboxWithPreview
              changeHandler={changeHandler}
              checked={checked}
              item={item}
              label={label}
              setup={setup}
            />
          )
        }}
      />
    )
  }
)

PredefinedSetups.displayName = 'PredefinedSetups'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PredefinedSetups)
