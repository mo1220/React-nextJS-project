import {
    GET_LIST_FAIL,
    GET_LIST_SUCCESS,
    GET_REQ,
    GET_ITEM_REQUEST,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAIL
} from '../actions/list';

export const initialState = {
    loading: false,
    error: '',
    payload: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQ:
            return {
                ...state,
                loading: false,
            }
        case GET_LIST_SUCCESS:
            return {
                ...state,
                loading: true,
                payload: action.payload
            }
        case GET_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        case GET_ITEM_REQUEST:
            return {
                ...state,
                loading: false,
            }
        case GET_ITEM_SUCCESS:
            return {
                ...state,
                loading: true,
                payload: action.payload
            }
        case GET_ITEM_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
};

export default reducer;