import { createStore, combineReducers } from 'redux';
import { likesReducer } from './reducers/likesReducer';

const rootReducer = combineReducers({
    likes: likesReducer
});

const store = createStore(rootReducer);

export default store;
