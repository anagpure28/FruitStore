import { LOAD_USER_STATUSES } from "../actions/user_statuses";


const initialState = {
    user_statusesArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_STATUSES:
            return {
                ...state,
                user_statusesArray: action.payload,
            };
        default:
            return state;
    }
};
