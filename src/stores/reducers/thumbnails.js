import { LOAD_THUMBNAILS } from "../actions/thumbnails";


const initialState = {
    thumbnailsArray: [], // we will save token here.
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_THUMBNAILS:
            return {
                ...state,
                thumbnailsArray: action.payload,
            };
        default:
            return state;
    }
};
