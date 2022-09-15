import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const defaultState = {
  hello: 'salut I am module api'
}

const inBrowser = typeof window !== 'undefined';
// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && (window as any).__INITIAL_STATE__) ? (window as any).__INITIAL_STATE__.page as any : defaultState;

export default {
  state,
  actions,
  mutations,
  getters
}
