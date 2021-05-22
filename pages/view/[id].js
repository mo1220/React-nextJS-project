import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../../src/component/itemList/item';
import { useDispatch, useSelector } from 'react-redux';
import {
    itemRequestAction, 
    listRequestAction} from '../../redux/actions/list';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();

    const {payload, loading} = useSelector(state => state.list);

    const getData = () => {
       dispatch(itemRequestAction(id));
    }

    useEffect(()=> {
        if(id && id>0){
            getData();
        }
    }, [id]);

    return (
        <div>
            {
                loading 
                ? <Item item={payload}/> 
                : (
                    <div className="loading-page">
                        <h1>Loading...</h1>
                    </div>
                ) 
            }
        </div>
    );
}

export default Post