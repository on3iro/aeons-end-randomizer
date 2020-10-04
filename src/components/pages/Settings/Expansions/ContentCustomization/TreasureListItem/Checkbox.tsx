import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'

import { useModal } from 'hooks/useModal'

import CheckboxWithDetails from 'components/molecules/CheckboxWithDetails'
import TreasureModal from 'components/molecules/TreasureModal'

import { ChangeHandler } from './index'
import { RootState, selectors } from 'Redux/Store'

type OwnProps = {
  treasure: types.Treasure
  changeHandler: ChangeHandler
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    selected: selectors.Settings.Expansions.Treasures.selected.getIsSelected(
      state,
      { id: ownProps.treasure.id }
    ),
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Checkbox = ({ treasure, changeHandler, selected }: Props) => {
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
        id={treasure.id}
        checked={selected}
        label={treasure.name}
        changeHandler={handleChange}
        showDetails={handleDetails}
      />
      <TreasureModal card={treasure} RenderModal={RenderModal} />
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Checkbox))
