import { LOAD_ORDER_STATUSES } from "../actions/order_statuses";


const initialState = {
    order_statusesArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ORDER_STATUSES:
            return {
                ...state,
                order_statusesArray: action.payload,
            };
        default:
            return state;
    }
};
