import React from 'react'

import * as types from 'aer-types/types'

import ExpansionPanel from 'components/molecules/ExpansionPanel'
import SupplyList from '../../../../molecules/SupplyList'

type Props = {
  banners: types.ICard[]
  expansionKey: string
  expansionHandler: (
    e: React.ChangeEvent<any> | undefined,
    expanded: string | boolean
  ) => void
  expanded: boolean | string
}

const Banner = ({
  banners,
  expansionKey,
  expansionHandler,
  expanded,
}: Props) => (
  <React.Fragment>
    {banners.length > 0 && (
      <ExpansionPanel
        summary="Banners"
        expansionKey={expansionKey}
        expansionHandler={expansionHandler}
        expanded={expanded}
        data-test="banner"
      >
          <SupplyList
            tiles={banners.map((banner) => {
              return {
                ...banner,
                canBeLocked: false,
              }
            })}
          />
      </ExpansionPanel>
    )}
  </React.Fragment>
)

export default React.memo(Banner)
