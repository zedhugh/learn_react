import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import sagaCreater from 'redux-saga';
import doctor from './doctorReducers';
import { INC } from './redux_action';
import mySaga from './saga';

const ADD = "ADD+";

// store = {
//     counter: 0
// };
export const add = (num) => ({
    type: ADD,
    num
});

const counter = (state = 0, action) => {
    if (action.type === ADD) {
        return state + action.num;
    }
    if (action.type === INC) {
        return state + 1;
    }
    return state;
}

const rootReducer = combineReducers({
    counter, doctor
});

export const asyncEvent = (num) => (dispatch, getState) => {
    console.log(getState(), Date.now());
    for (let i = 1; i <= num; i++) {
        setTimeout(() => {
            dispatch(add(1));
        }, i * 1000);
    }
};

const saga = sagaCreater();

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, saga)
);

saga.run(mySaga);

// store.dispatch(add(10));
// store.dispatch(asyncEvent(5));
