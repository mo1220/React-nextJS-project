import { Footer } from 'antd/lib/layout/layout';
import React from 'react';

function footer(props) {
    return (
        <Footer style={{
            // position: 'absolute',
            // bottom: '0',
            // width: '100%',
            textAlign: 'center'
        }}>
            Copyright &copy; all rights reserved
        </Footer>
    );
}

export default footer;