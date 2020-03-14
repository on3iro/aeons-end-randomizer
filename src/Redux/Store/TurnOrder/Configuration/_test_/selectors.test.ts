import { selectors } from 'Redux/Store/TurnOrder/Configuration/selectors'
import { initialState } from 'Redux/Store/'

describe('Turn Order | Configuration | selectors', () => {
  it('should get the correct mode with getMode()', () => {
    const mode = selectors.getMode(initialState)

    expect(mode).toMatchSnapshot()
  })

  it('should get the correct player count with getSelectedPlayerCount()', () => {
    const selectedPlayerCount = selectors.getSelectedPlayerCount(initialState)

    expect(selectedPlayerCount).toMatchSnapshot()
  })

  it('should get the correct setup with getSelectedSetup()', () => {
    const setup = selectors.getSelectedSetup(initialState)

    expect(setup).toMatchSnapshot()
  })

  it('should get the current configuration with getConfiguration()', () => {
    const config = selectors.getConfiguration(initialState)

    expect(config).toMatchSnapshot()
  })

  it('should get the available turnorder cards with getAvailableCards()', () => {
    const cards = selectors.getAvailableCards(initialState)

    expect(cards).toMatchSnapshot()
  })
})
