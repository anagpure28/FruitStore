import { LOAD_TYPES } from "../actions/types";


const initialState = {
    typesArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TYPES:
            return {
                ...state,
                typesArray: action.payload,
            };
        default:
            return state;
    }
};
