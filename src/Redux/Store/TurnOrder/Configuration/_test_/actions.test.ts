import configureStore from 'redux-mock-store'

import config from 'config'

import { actions } from 'Redux/Store/TurnOrder/Configuration/actions'

const mockStore = configureStore()
const store = mockStore()

describe('Turn Order | Configuration | actions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  it('should dispatch noop action', () => {
    store.dispatch(actions.noOp())
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch setMode action with payload', () => {
    store.dispatch(actions.setMode('Default'))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch selectPlayerCount action with payload', () => {
    store.dispatch(actions.selectPlayerCount('twoPlayers'))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch selectSetup action with payload', () => {
    store.dispatch(actions.selectSetup('default'))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch fetchFromDB action', () => {
    store.dispatch(actions.fetchFromDB())
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch fetchFromDBSuccessful action', () => {
    store.dispatch(
      actions.fetchFromDBSuccessful({
        Mode: 'Default',
        SelectedPlayerCount: config.TURNORDERSETUPS['onePlayer'],
        SelectedSetup:
          config.TURNORDERSETUPS['onePlayer'].variations['default'],
      })
    )
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch fetchFromDBFailed action', () => {
    store.dispatch(actions.fetchFromDBFailed())
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch setToDB action', () => {
    store.dispatch(actions.setToDB())
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch setToDBSuccessful action', () => {
    store.dispatch(actions.setToDBSuccessful())
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch setToDBFailed action', () => {
    store.dispatch(actions.setToDBFailed())
    expect(store.getActions()).toMatchSnapshot()
  })
})
