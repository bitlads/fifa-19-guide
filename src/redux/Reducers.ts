import { combineReducers } from 'redux';
import { SET_CONSOLE } from "./Actions"
import { CONSOLE_XBOX } from '../Const'

let dataState = { console: CONSOLE_XBOX };

const dataReducer = (state = dataState, action: any) => {
    switch (action.type) {
        case SET_CONSOLE:
            state = Object.assign({}, state, { console: action.console });
            return state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;