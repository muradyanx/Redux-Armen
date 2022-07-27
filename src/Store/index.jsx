import { combineReducers, createStore } from 'redux';
import changeReducer from './changeReducer';
let reducers = combineReducers({
    changeReducer
})
let store = createStore(reducers)
export default store