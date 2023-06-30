import { LOAD_ORDERS } from "../actions/orders";


const initialState = {
    ordersArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ORDERS:
            return {
                ...state,
                ordersArray: action.payload,
            };
        default:
            return state;
    }
};
