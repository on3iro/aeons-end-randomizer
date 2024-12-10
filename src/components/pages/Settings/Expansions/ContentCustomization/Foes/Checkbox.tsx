import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'

import { useModal } from 'hooks/useModal'

import CheckboxWithDetails from 'components/molecules/CheckboxWithDetails'
import FoeModal from 'components/molecules/FoeModal'

import { ChangeHandler } from './index'
import { RootState, selectors } from 'Redux/Store'

type OwnProps = {
  foe: types.Foe
  changeHandler: ChangeHandler
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    selected: selectors.Settings.Expansions.Foes.selected.getIsSelected(
      state,
      { id: ownProps.foe.id }
    ),
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Checkbox = ({ foe, changeHandler, selected }: Props) => {
  const { show, RenderModal } = useModal()

  const handleChange = useCallback(
    (id: string) => {
      changeHandler(id)
    },
    [changeHandler]
  )

  const handleDetails = useCallback(() => {
    show()
  }, [show])

  return (
    <React.Fragment>
      <CheckboxWithDetails
        id={foe.id}
        checked={selected}
        label={foe.name}
        changeHandler={handleChange}
        showDetails={handleDetails}
      />
      <FoeModal id={foe.id} RenderModal={RenderModal} />
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Checkbox))
