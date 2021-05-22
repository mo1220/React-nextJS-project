import React, { useEffect } from 'react';
import { Button } from 'antd';

function Item({item}) {
    const {image_link, name, price, description} = item;
    return (
        <div className="item-detail-wrap">
            <div
                style={{ 
                    width: '400px', 
                    margin: '0 auto', 
                    padding: '20px',
                     }}>
                <img alt={name} src={image_link}/>
            </div>
            <div style={{
                margin: '20px'
            }}>
                <strong>{name}</strong><br/>
                <strong>${price}</strong>
            </div>
            <Button type="primary" style={{margin: '10px'}}>구매하기</Button>
            <div style={{margin: '10px'}}>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Item;

