import { defineModule } from 'direct-vuex'
import { moduleActionContext, moduleGetterContext } from '/Store/index'
import { RootMutationTypes, RootActionTypes, state } from './rootTypes'
import type { rootState, Getters } from './rootTypes'
import ApiService from '/Services/api'
import FullPage from '/Utils/fullpage'

const rootStore = defineModule({
  namespaced: true,
  state: (): rootState => state,
  getters: {},
  mutations: {},
  actions: {},
})

export default rootStore
const userGetterContext = (args: [any, any, any, any]) =>
  moduleGetterContext(args, rootStore)
const userActionContext = (context: any) =>
  moduleActionContext(context, rootStore)
