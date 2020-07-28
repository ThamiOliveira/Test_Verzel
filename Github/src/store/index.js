import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
}

const INITIAL_STATE = {
  emailUser: ''
}

function tarefas(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SUCESS_LOGIN':
      return { ...state, emailUser:  action.email }
    default:
      return state;
  }
}

const persistedReducer = persistReducer(persistConfig, tarefas)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor };