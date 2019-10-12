import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../../Redux/Store'

import CheckboxList from '../../../../CheckboxList'
import CheckboxWithControls from '../CheckboxWithControls'

import { expansionsToItems } from './helpers'

const mapStateToProps = (state: RootState) => ({
  miniExpansions: selectors.Settings.Expansions.SelectedExpansions.getMiniExpansions(
    state
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    handleChange: (selection: string) => void
  }

const Mini = React.memo(({ handleChange, miniExpansions }: Props) => {
  // FIXME use acutal CBlist prop types
  const CheckboxComponent = useCallback(
    ({ checked, item, label, changeHandler }: any) => {
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
      label="Mini Expansions"
      items={expansionsToItems(miniExpansions)}
      Component={CheckboxComponent}
      changeHandler={handleChange}
    />
  )
})

Mini.displayName = 'Mini'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mini)
