import { all, call } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import list from './list';
import listSaga from '../saga';

const rootReducer = combineReducers({
    list,
});

export function* rootSaga(){
    yield all([
        //all안에 모든 saga들을 call(동기적)으로 실행
        listSaga(),
    ])
}

export default rootReducer;