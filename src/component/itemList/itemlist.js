import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import Link from 'next/link';
import {viewItem} from '../../../pages/view/[id]';

function itemlist({list}) {
    return (
        <Row gutter={[24, 32]}>
            {
                list && list.map(item => (
                    <Col
                        className="list-item"
                        span={6}
                        key={item.id}>
                            <Link href={`/view/${item.id}`}>
                                <a>
                                <img
                                    alt={item.name} 
                                    src={item.image_link}/>
                                <p className="list-item__name">{item.name}</p>
                                <strong>{item.price}</strong>
                                </a>
                            </Link>
                    </Col>
                ))
            }
        </Row>
    );
}

export default itemlist;