import axios from 'axios';
import { all, call, delay, put, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import {
    GET_REQ,
    getListSuccessAction,
    getListFailAction,
    GET_ITEM_REQUEST,
    getItemSuccessAction,
    getItemFAILAction} from './actions/list';

function fetchAPI(id){
    if(id){
        return axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
    }
    else {
        return axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
    }
}

function* loadList(){
    try{
        const result = yield call(fetchAPI);
        yield put(getListSuccessAction(result.data))
    }
    catch(e) {
        console.error(e);
        yield put(getListFailAction(e));
    }
}

function* loadItem(action){
    try{
        const result = yield call(fetchAPI, action.id);
        yield put(getItemSuccessAction(result.data))
    }
    catch(e) {
        console.error(e);
        yield put(getItemFAILAction(e));
    }
}

export default function* listSaga(){
    //takeLatest: 한 번에 많은 reqest가 들어오면 마지막 요청일 때만 loadlist 함수 실행
    console.log('ok')
    yield takeEvery(GET_REQ, loadList);
    yield takeEvery(GET_ITEM_REQUEST, loadItem);
}