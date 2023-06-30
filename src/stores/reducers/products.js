import { LOAD_PRODUCTS } from "../actions/products";


const initialState = {
    productsArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                productsArray: action.payload,
            };
        default:
            return state;
    }
};
