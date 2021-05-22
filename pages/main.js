import React from 'react';
import { Layout } from 'antd';
import Top from '../src/component/top';
import Section from '../src/component/login/section';

const { Header, Footer, Sider, Content } = Layout;
function layout(props) {
    return (
    <Layout>
      <Header className="header-wrap">
          <Top/>
      </Header>
      <Layout>
        <Content>
            <Section/>
        </Content>
      </Layout>
      <Footer 
        style={
          {
            marginTop: '10px',
          }
        }>Footer</Footer>
    </Layout>
    );
}
export default layout;