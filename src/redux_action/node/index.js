const { createStore, combineReducers, applyMiddleware } = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const {
    createAction, handleAction,
    createActions
} = require('redux-actions');
const INC = "INCREATE";
const DEC = "DECREATE";

const inc = createAction(INC);
const dec = createAction(DEC);

console.log(inc());
console.log(dec());

const a = createAction("a", (s) => ({s}), (s) => [s]);
console.log(a("c"));

const reducer = handleAction(
    a,
    (state, action) => ({
        counter: state.counter + action.payload.s
    }),
    { counter: 0 }
);

const map = createActions({
    "HELL": (msg) => ({ msg }),
    "BYE": (name) => ({ name })
});

console.log(map);

const store = createStore(
    combineReducers({
        reducer
    }),
    applyMiddleware(thunkMiddleware)
);

store.subscribe(() => console.log(store.getState()));
let sum = 0;
for (let i = 0; i < 9; i++) {
    store.dispatch(a(i));
    sum += i;
}
console.log(sum);
