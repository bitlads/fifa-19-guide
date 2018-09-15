import { combineReducers } from 'redux';

import { GET_LOCALE } from "./Actions"

let dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action: any) => {
    switch (action.type) {
        case GET_LOCALE:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;