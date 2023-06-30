import { LOAD_PRODUCT_TYPES } from "../actions/product_types";


const initialState = {
    product_typesArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT_TYPES:
            return {
                ...state,
                product_typesArray: action.payload,
            };
        default:
            return state;
    }
};
