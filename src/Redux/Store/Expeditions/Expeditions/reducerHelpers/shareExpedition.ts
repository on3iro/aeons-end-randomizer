import { loop, Cmd } from 'redux-loop'

import * as sideEffects from '../sideEffects'
import { State } from '../types'
import { actions } from '../actions'

export const shareExpedition = (
  state: State,
  action: ReturnType<typeof actions.shareExpedition>
) => {
  const { expedition } = action.payload

  return loop(
    state,
    Cmd.run(sideEffects.shareExpedition, {
      args: [expedition],
      successActionCreator: actions.shareExpeditionSuccess,
      failActionCreator: actions.shareExpeditionFailure,
    })
  )
}

// NoOp - we still want it inside our dev tool logs, though
export const shareExpeditionSuccess = (
  state: State,
  _: ReturnType<typeof actions.shareExpeditionSuccess>
) => {
  return state
}

// NoOp - we still want it inside our dev tool logs, though
export const shareExpeditionFailure = (
  state: State,
  _: ReturnType<typeof actions.shareExpeditionFailure>
) => {
  return state
}
