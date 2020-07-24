import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'antd/dist/antd.css';
import { basicTableColumns, basicTableMockData } from './table/BasicTable'
import { tableWithSpannedRowColumns, tableWithSpannedRowMockData } from './table/TableWithSpannedRow'
import { Table, Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <React.StrictMode>
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>  
          <Table columns={basicTableColumns} dataSource={basicTableMockData} pagination={{ defaultPageSize: 2, showSizeChanger: true, pageSizeOptions: ['2', '5', '3']}} />
          <Table columns={tableWithSpannedRowColumns} dataSource={tableWithSpannedRowMockData} /> 
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Footer Test</Footer>
    </Layout>
  </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
