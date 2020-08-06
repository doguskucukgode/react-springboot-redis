import 'react';
import { combineReducers, createStore, Store } from "redux";
import { getUsers } from '../components/api/UserApi';
import AppState from '../components/model/AppState';
import User from '../components/model/User';
import { userReducer } from './reducers/UserReducer';


const rootReducer = combineReducers<AppState>({
    users: userReducer
});


const userInitialValue = (async () => {
    return await getUsers().catch(e => {console.error(e); return null}) as User[];
  })()

export default function configureStore(): Store<AppState> {
    const store = createStore(rootReducer, undefined);
    return store;
}
