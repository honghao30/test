import FullPage from '/Utils/fullpage'
import {
  moduleActionContext,
  rootActionContext,
  moduleGetterContext,
  rootGetterContext,
} from '/Store/index'

/*------------ STATE -------------*/

export type rootState = {
  FullPage: FullPage
}

export const state: rootState = {
  FullPage: new FullPage(),
}

/*------------ GETTERS -------------*/

export type Getters = {}

/*------------ MUTATIONS -------------*/

export enum RootMutationTypes {}

/* ----------- ACTIONS ---------------*/

export enum RootActionTypes {}
