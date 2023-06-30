import { LOAD_SHOP_STATUSES } from "../actions/shop_statuses";


const initialState = {
    shop_statusesArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SHOP_STATUSES:
            return {
                ...state,
                shop_statusesArray: action.payload,
            };
        default:
            return state;
    }
};
