import React from 'react'
import { connect } from 'react-redux'
import * as types from 'aer-types/types'

import { RootState, selectors, actions } from 'Redux/Store'

import ListWrapper from 'components/molecules/ListWrapper'

import Checkbox from './Checkbox'

export type ChangeHandler = (id: string) => void

const renderCheckboxes = (
  items: types.ICard[],
  changeHandler: ChangeHandler
) =>
  items.map((item) => (
    <Checkbox key={item.id} banner={item} changeHandler={changeHandler} />
  ))

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedBanners: selectors.Settings.Expansions.Banners.getBannersByExpansionId(
    state,
    props
  ),
})

const mapDispatchToProps = {
  handleBannerChange: actions.Settings.Expansions.Banners.selected.toggle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Banners = ({ selectedBanners, handleBannerChange }: Props) => {
  return (
    <React.Fragment>
      {selectedBanners.length > 0 && (
        <ListWrapper label="Banners">
          <React.Fragment>
            {renderCheckboxes(selectedBanners, handleBannerChange)}
          </React.Fragment>
        </ListWrapper>
      )}
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Banners))
