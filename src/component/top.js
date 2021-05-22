import React from 'react';
import {Menu} from 'antd';
import 'antd/dist/antd.css';
import { Header } from 'antd/lib/layout/layout';

function top(props) {
    return (
        <Header className="header-wrap">
            <div className="header-wrap__logo-wrap">
                <a className="logo" href='/landingPage'>Logo</a>
            </div>
            <Menu 
                theme="dark" 
                mode="horizontal"
                defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
    );
}

export default top;