import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../../Redux/Store'

import CheckboxList from '../../../../molecules/CheckboxList'
import CheckboxWithControls from '../../../../molecules/CheckboxWithControls'

import { expansionsToItems } from './helpers'

const mapStateToProps = (state: RootState) => ({
  promos: selectors.Settings.Expansions.SelectedExpansions.getPromos(state),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    handleChange: (selection: string) => void
  }

const Promos = React.memo(({ handleChange, promos }: Props) => {
  const CheckboxComponent = useCallback(
    ({ checked, item, label, changeHandler }) => {
      return (
        <CheckboxWithControls
          id={item.id}
          checked={checked}
          item={item.id}
          label={label}
          changeHandler={changeHandler}
        />
      )
    },
    []
  )

  return (
    <CheckboxList
      label="Promos"
      items={expansionsToItems(promos)}
      Component={CheckboxComponent}
      changeHandler={handleChange}
    />
  )
})

Promos.displayName = 'Promos'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Promos)
