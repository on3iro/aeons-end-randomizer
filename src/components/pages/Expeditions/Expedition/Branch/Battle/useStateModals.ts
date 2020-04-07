import { useModal } from 'hooks/useModal'

export const useStateModals = () => {
  const beforeBattle = useModal()
  const battleStarted = useModal()
  const battleLost = useModal()
  const battleWon = useModal()
  const expeditionComplete = useModal()

  return {
    beforeBattle,
    battleStarted,
    battleLost,
    battleWon,
    expeditionComplete,
  }
}
