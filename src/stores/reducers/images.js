import { LOAD_IMAGES } from "../actions/images";


const initialState = {
    imagesArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_IMAGES:
            return {
                ...state,
                imagesArray: action.payload,
            };
        default:
            return state;
    }
};
