import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../../Redux/Store'

import CheckboxList from '../../../../molecules/CheckboxList'
import CheckboxWithControls from '../CheckboxWithControls'

import { expansionsToItems } from './helpers'

const mapStateToProps = (state: RootState) => ({
  standalones: selectors.Settings.Expansions.SelectedExpansions.getStandaloneExpansions(
    state
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    handleChange: (selection: string) => void
  }

const Standalones = React.memo(({ handleChange, standalones }: Props) => {
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
      label="Standalone Sets"
      items={expansionsToItems(standalones)}
      Component={CheckboxComponent}
      changeHandler={handleChange}
    />
  )
})

Standalones.displayName = 'Standalones'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standalones)
