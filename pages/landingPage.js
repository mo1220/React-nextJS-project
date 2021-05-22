import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRequestAction } from '../redux/actions/list';
import Itemlist from '../src/component/itemList/itemlist';

function landingPage(props) {
    const {payload, loading, error} = useSelector(state => state.list);
    const dispatch = useDispatch();
   
    useEffect(()=> {
        if(!payload) return; 
        dispatch(listRequestAction());

    }, [])

    if(error) return(
        <div className="loading-page">에러 발생!</div>
    );
    
   return (
        <div className="list-wrap">
            <h1 className="list-wrap-title">
                베스트 상품
            </h1>
            {
                payload.length > 1 &&
                loading 
                ?
                 <Itemlist list={payload}/>
                : (
                    <div className="loading-page">
                        <h1>Loading...</h1>
                    </div>
                )
            }
        </div>
    );
}

export default landingPage;