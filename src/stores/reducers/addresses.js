import { LOAD_ADDRESSES } from "../actions/addresses";


const initialState = {
    addressesArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ADDRESSES:
            return {
                ...state,
                addressesArray: action.payload,
            };
        default:
            return state;
    }
};
