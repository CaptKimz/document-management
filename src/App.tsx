import React, { useState, lazy, Suspense} from 'react';

import {
  UploadOutlined, UserOutlined, VideoCameraOutlined, MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Card, Layout, Menu } from 'antd';
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
import { ThemeProvider } from './utils/context/ThemeProvider.tsx'
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider >
        
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
                <Menu mode="inline" defaultSelectedKeys={['4']} items={items} />
              </Sider>
              <Layout>
                <Header style={{ padding: 0, display: "flex", alignItems: "center" }} >
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
                </Header>
                <Content style={{ margin: '16px 16px 0' }}>
                  <Card
                    style={{
                      padding: 24,
                      minHeight: 360,
                    }}
                  >
                    <Routes>
                      <Route path="/" element={<Home />} />
                    </Routes>
                  </Card>
                </Content>
              </Layout>
            </Layout>
          </Suspense>
      </ThemeProvider>
    </BrowserRouter>

  );
};

export default App;