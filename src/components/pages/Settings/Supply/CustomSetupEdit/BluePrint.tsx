import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import * as types from 'aer-types/types'

import InputField from './InputField'
import MenuItem from '@material-ui/core/MenuItem'
import SelectField from './SelectField'
import SelectFieldsWrapper from './SelectFieldsWrapper'
import BluePrintWrapper from './BluePrintWrapper'
import CancelButton from './CancelButton'

type Props = {
  bluePrint: types.IBluePrint
  dispatch: Function
}

// TODO refactor this file!

const isThresholdOperation = (operation: types.Operation) =>
  types.THRESHOLD_OPERATIONS.includes(operation)

const renderInputFieldsByOperation = (
  bluePrint: types.IBluePrint,
  dispatch: Function
) => {
  if (isThresholdOperation(bluePrint.operation)) {
    return (
      <FormControl>
        <InputField
          id={`threshold-${bluePrint.id}`}
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
          data-test="input-threshold"
        />
      </FormControl>
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
        <FormControl>
          <InputField
            id={`value-1-${bluePrint.id}`}
            label="Value 1"
            value={valueA}
            onChange={(
              e: React.ChangeEvent<{ name?: string; value: string }>
            ) =>
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
            data-test="input-value-1"
          />
        </FormControl>
        <FormControl>
          <InputField
            id={`value-2-${bluePrint.id}`}
            label="Value 2"
            value={valueB}
            onChange={(
              e: React.ChangeEvent<{ name?: string; value: string }>
            ) =>
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
            data-test="input-value-2"
          />
        </FormControl>
      </React.Fragment>
    )
  }

  return null
}

const BluePrint = ({ bluePrint, dispatch, ...rest }: Props) => {
  return (
    <BluePrintWrapper type={bluePrint.type} {...rest}>
      <CancelButton
        onClick={() =>
          dispatch({
            type: 'DELETE',
            payload: {
              id: bluePrint.id,
            },
          })
        }
      />
      <SelectFieldsWrapper>
        <SelectField
          key="type"
          value={bluePrint.type}
          onChange={(
            e: React.ChangeEvent<{ name?: string; value: unknown }>
          ) => {
            dispatch({
              type: 'UPDATE',
              payload: {
                ...bluePrint,
                type: e.target.value,
              },
            })
          }}
          inputProps={{
            name: 'type',
            id: `type-${bluePrint.id}`,
          }}
          data-test="select-type"
        >
          {types.CARD_TYPES.filter((TYPE) => TYPE !== 'EMPTY').map((TYPE) => (
            <MenuItem key={TYPE} value={TYPE} data-test="select-type-menu-item">
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
            id: `operation-${bluePrint.id}`,
          }}
          data-test="select-operation"
        >
          {types.SUPPLY_OPERATIONS.filter(
            (OPERATION) => OPERATION !== 'NoOp'
          ).map((OPERATION) => (
            <MenuItem
              key={OPERATION}
              value={OPERATION}
              data-test="select-operation-menu-item"
            >
              {OPERATION}
            </MenuItem>
          ))}
        </SelectField>
      </SelectFieldsWrapper>
      {renderInputFieldsByOperation(bluePrint, dispatch)}
    </BluePrintWrapper>
  )
}

export default React.memo(BluePrint)
