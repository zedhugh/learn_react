import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const ADD = "ADD+";

// store = {
//     counter: 0
// };
const add = (num) => ({
    type: ADD,
    num
});

const counter = (state = 0, action) => {
    if (action.type === ADD) {
        return state + action.num;
    }
    return state;
}

const rootReducer = combineReducers({
    counter
});

const asyncEvent = (num) => (dispatch, getState) => {
    console.log(getState(), Date.now());
    for (let i = 1; i < num; i++) {
        setTimeout(() => {
            dispatch(add(1));
            console.log(getState(), Date.now());
        }, i * 1000);
    }
};

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

store.dispatch(add(10));
store.dispatch(asyncEvent(5));
