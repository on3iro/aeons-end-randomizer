import React from 'react'
import * as types from '../../../../../types'
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
      >
        Add Supply tile
      </Button>
      {bluePrintList.map(bluePrint => (
        <BluePrint
          key={bluePrint.id}
          bluePrint={bluePrint}
          dispatch={dispatch}
        />
      ))}
    </ListWrapper>
  )
}

export default React.memo(BluePrintList)
