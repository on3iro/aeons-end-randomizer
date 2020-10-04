import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'

import { useModal } from 'hooks/useModal'

import CheckboxWithDetails from 'components/molecules/CheckboxWithDetails'
import MageModal from 'components/molecules/MageModal'

import { ChangeHandler } from './index'
import { RootState, selectors } from 'Redux/Store'

type OwnProps = {
  mage: types.Mage
  changeHandler: ChangeHandler
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    selected: selectors.Settings.Expansions.Mages.selected.getIsSelected(
      state,
      { id: ownProps.mage.id }
    ),
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Checkbox = ({ mage, changeHandler, selected }: Props) => {
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
        id={mage.id}
        checked={selected}
        label={mage.name}
        changeHandler={handleChange}
        showDetails={handleDetails}
      />
      <MageModal mage={mage} RenderModal={RenderModal} />
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Checkbox))
