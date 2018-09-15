import { combineReducers } from 'redux';

import { GET_LOCALE } from "./Actions"

let dataState = { locale: 'es', loading: true };

const dataReducer = (state = dataState, action: any) => {
    switch (action.type) {
        case GET_LOCALE:
            state = Object.assign({}, state, { locale: action.locale, loading: false });
            return state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;