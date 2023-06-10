import { newStateWithDBWrite } from '../helpers'

export const resetGame = () => {
  return newStateWithDBWrite({
    started: false,
    deck: [],
    discard: [],
    round: 1,
  })
}
