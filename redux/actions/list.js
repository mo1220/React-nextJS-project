export const GET_REQ = 'GET_REQ';
export const GET_LIST_SUCCESS = 'GET_LIST';
export const GET_LIST_FAIL = 'GET_LIST_SUCCESS';
export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAIL = 'GET_ITEM_FAIL'


export const listRequestAction = () => {
    return({
        type: GET_REQ,
})}
export const getListSuccessAction = (payload) => {
    return ({
    type: GET_LIST_SUCCESS,
    payload
})};

export const getListFailAction = (error) => ({
    type: GET_LIST_FAIL,
    error
})

export const itemRequestAction = (id) => {
    return {
        type: GET_ITEM_REQUEST,
        id
    }
}

export const getItemSuccessAction = (payload) => {
    return {
        type: GET_ITEM_SUCCESS,
        payload
    }
}
export const getItemFAILAction = (payload) => {
    return {
        type: GET_ITEM_FAIL,
        payload
    }
}
