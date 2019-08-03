import React from 'react'
import * as types from '../../../../../types'

import InputField from './InputField'
import MenuItem from '@material-ui/core/MenuItem'
import SelectField from './SelectField'
import SelectFieldsWrapper from './SelectFieldsWrapper'
import BluePrintWrapper from './BluePrintWrapper'

type Props = {
  bluePrint: types.IBluePrint
  dispatch: Function
}

// TODO refactor this file!

// FIXME
// * add delete handle
// * fix ids
// * reverse list add order

const THRESHOLD_OPERATIONS = ['<', '>', '=', '<=', '>=']

const isThresholdOperation = (operation: types.Operation) =>
  THRESHOLD_OPERATIONS.includes(operation)

const renderInputFieldsByOperation = (
  bluePrint: types.IBluePrint,
  dispatch: Function
) => {
  if (isThresholdOperation(bluePrint.operation)) {
    return (
      <InputField
        id="threshold"
        label="Threshold"
        value={bluePrint.threshold || ''}
        onChange={(e: React.ChangeEvent<{ name?: string; value: string }>) =>
          dispatch({
            type: 'UPDATE',
            payload: {
              ...bluePrint,
              threshold: parseInt(e.target.value || '0'),
            },
          })
        }
        type="number"
        margin="normal"
      />
    )
  }

  // TODO allow more the two fields to be combined with logical or
  if (bluePrint.operation === 'OR') {
    const valueA =
      bluePrint && bluePrint.values && bluePrint.values[0]
        ? bluePrint.values[0].toString()
        : ''
    const valueB =
      bluePrint && bluePrint.values && bluePrint.values[1]
        ? bluePrint.values[1].toString()
        : ''

    return (
      <React.Fragment>
        <InputField
          id="value-1"
          label="Value 1"
          value={valueA}
          onChange={(e: React.ChangeEvent<{ name?: string; value: string }>) =>
            dispatch({
              type: 'UPDATE',
              payload: {
                ...bluePrint,
                values: [parseInt(e.target.value || '0'), parseInt(valueB)],
              },
            })
          }
          type="number"
          margin="normal"
        />
        <InputField
          id="value-2"
          label="Value 2"
          value={valueB}
          onChange={(e: React.ChangeEvent<{ name?: string; value: string }>) =>
            dispatch({
              type: 'UPDATE',
              payload: {
                ...bluePrint,
                values: [parseInt(valueA), parseInt(e.target.value || '0')],
              },
            })
          }
          type="number"
          margin="normal"
        />
      </React.Fragment>
    )
  }

  return null
}

const BluePrint = React.memo(({ bluePrint, dispatch }: Props) => {
  return (
    <BluePrintWrapper>
      <SelectFieldsWrapper>
        <SelectField
          key="type"
          value={bluePrint.type}
          onChange={(e: React.ChangeEvent<{ name?: string; value: unknown }>) =>
            dispatch({
              type: 'UPDATE',
              payload: {
                ...bluePrint,
                type: e.target.value,
              },
            })
          }
          inputProps={{
            name: 'type',
            id: 'type',
          }}
        >
          {types.CARD_TYPES.filter(TYPE => TYPE !== 'EMPTY').map(TYPE => (
            <MenuItem key={TYPE} value={TYPE}>
              {TYPE}
            </MenuItem>
          ))}
        </SelectField>
        <SelectField
          key="operation"
          value={bluePrint.operation}
          onChange={(e: React.ChangeEvent<{ name?: string; value: unknown }>) =>
            dispatch({
              type: 'UPDATE',
              payload: {
                ...bluePrint,
                operation: e.target.value,
              },
            })
          }
          inputProps={{
            name: 'operation',
            id: 'operation',
          }}
        >
          {types.SUPPLY_OPERATIONS.filter(
            OPERATION => OPERATION !== 'NoOp'
          ).map(OPERATION => (
            <MenuItem key={OPERATION} value={OPERATION}>
              {OPERATION}
            </MenuItem>
          ))}
        </SelectField>
      </SelectFieldsWrapper>
      {renderInputFieldsByOperation(bluePrint, dispatch)}
    </BluePrintWrapper>
  )
})

export default BluePrint
