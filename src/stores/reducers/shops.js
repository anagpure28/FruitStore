import { LOAD_SHOPS } from "../actions/shops";


const initialState = {
    shopsArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SHOPS:
            return {
                ...state,
                shopsArray: action.payload,
            };
        default:
            return state;
    }
};
