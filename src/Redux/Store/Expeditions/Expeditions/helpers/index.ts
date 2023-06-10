export * from './convertExpeditionToConfig'
export * from './convertExpeditionFromConfig'

export const calcBattleScore = (tries: number) => {
  switch (tries) {
    case 1: {
      return 6
    }

    case 2: {
      return 4
    }

    case 3: {
      return 2
    }

    default: {
      return 0
    }
  }
}
