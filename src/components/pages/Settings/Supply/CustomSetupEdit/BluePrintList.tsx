import React from 'react'
import * as types from 'aer-types/types'
import Button from '@material-ui/core/Button'

import BluePrint from './BluePrint'
import ListWrapper from './ListWrapper'

type Props = {
  bluePrintList: types.Slot[]
  dispatch: Function
}

const BluePrintList = ({ bluePrintList, dispatch }: Props) => {
  return (
    <ListWrapper>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch({ type: 'ADD' })}
        data-test="btn-add-supply-tile"
      >
        Add Supply tile
      </Button>
      {bluePrintList.map((bluePrint) => (
        <BluePrint
          key={bluePrint.id}
          bluePrint={bluePrint}
          dispatch={dispatch}
          data-test={'blueprint'}
        />
      ))}
    </ListWrapper>
  )
}

export default React.memo(BluePrintList)
