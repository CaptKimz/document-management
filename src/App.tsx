import React, { useState, lazy, Suspense } from 'react';

import {
  UploadOutlined, UserOutlined, VideoCameraOutlined, MenuFoldOutlined,
  MenuUnfoldOutlined, CheckOutlined, CloseOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, Switch, theme} from 'antd';
import './App.css'
const { Header, Content, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const Home = lazy(() => import('./pages/HomePage'));
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout style={{ height: '100vh' }}>
            <Sider
              collapsed={collapsed}
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                setHideButton(!broken)
              }}
              onCollapse={() => {
                setCollapsed((data) => !data)
              }}
            >
              <div className="demo-logo-vertical" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
              <Header style={{ padding: 0,  display: "flex", alignItems: "center" }} >

                {hideButton ? <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                /> : []}
                <Switch
                onChange={(data)=>{
                  console.log(data);
                  setThemeMode("light")                 
                }}
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
              </Header>
              <Content style={{ margin: '24px 16px 0' }}>
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Suspense>
    </BrowserRouter>

  );
};

export default App;