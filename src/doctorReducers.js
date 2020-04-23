import { combineReducers } from 'redux';
import {
    ADDLISTIDSR,
    FETCHDETAIL
} from './doctorAction';

// const doctor = {
//     listIDs: [],
//     detailIDs: [],
//     data: {}
// };

const listIDs = (state = [], action) => {
    switch (action.type) {
    case ADDLISTIDSR:
        console.log(ADDLISTIDSR, 'in listIDs reducer');
        return [...state, action.id];
    default:
        return state;
    }
};

const detailIDs = (state = [], action) => {
    switch (action.type) {
    case FETCHDETAIL:
        console.log(FETCHDETAIL, 'in detailIDs reducer');
        return [...state, action.data.id];
    case ADDLISTIDSR:
        console.log(ADDLISTIDSR, 'in detailIDs reducer');
        return [...state, action.id];
    default:
        return state;
    }
};

const data = (state = {}, action) => {
    switch (action.type) {
    case FETCHDETAIL:
        console.log(FETCHDETAIL, 'in data reducer');
        return {
            ...state,
            [action.data.id]: action.data
        };
    case ADDLISTIDSR:
        console.log(ADDLISTIDSR, 'in data reducer');
        return {
            ...state,
            [action.id]: {
                id: action.id,
                age: Math.ceil(Math.random() * 100),
                name: String.fromCharCode(Math.round(Math.random() * 128))
            }
        };
    default:
        return state;
    }
};

const doctorReducers = combineReducers({
    listIDs, detailIDs, data
});

export default doctorReducers;
