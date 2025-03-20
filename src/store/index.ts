import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { createDirectStore, GettersImpl } from 'direct-vuex'
import UserStore from './modules/root/root'
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

type RootGetters = typeof UserStore.getters
type RootState = {
  root: typeof UserStore.state
}
// plugins.push(createPersistedState({ storage: window.localStorage }))

const getters = {} as RootGetters & GettersImpl<RootState, RootGetters>

const {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext,
} = createDirectStore({
  plugins,
  modules: {
    root: UserStore,
  },
  getters,
})

// Export the direct-store instead of the classic Vuex store.
export default store

// The following exports will be used to enable types in the
// implementation of actions and getters.
export {
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext,
}

// The following lines enable types in the injected store '$store'.
export type AppStore = typeof store

declare module 'vuex' {
  interface Store<S> {
    // @ts-ignore
    direct: AppStore
  }
}
