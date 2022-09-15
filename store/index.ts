import Vuex from 'vuex';
import users from './users';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      users: users,
    }
  });
};

export default createStore
