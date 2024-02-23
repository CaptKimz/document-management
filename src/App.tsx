import React, { useState, lazy, Suspense } from 'react';

import {
  UploadOutlined, UserOutlined, VideoCameraOutlined, MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Card, Switch } from 'antd';
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
import useTheme from './hooks/useTheme.tsx';

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const { setThemeConfig } = useTheme();
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout style={{ height: '100vh' }}>
          <Header style={{ padding: 0, display: "flex", alignItems: "center" }} >
            <div>
              {<Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />}
            </div>
            <div style={{
              width: "100%",
              display: "flex", alignItems: "center", justifyContent: "flex-end"
            }}>
              <Switch onChange={() => setThemeConfig((prev) => ({ ...prev, theme: prev.theme === "light" ? "dark" : "light" }))} />
            </div>
          </Header>
          <Layout>
            <Sider
              collapsed={collapsed}
              trigger={null}
              // trigger={<Button
              //   type="text"
              //   icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              //   onClick={() => setCollapsed(!collapsed)}
              //   style={{
              //     fontSize: '16px',
              //     width: 60,
              //     height: 60,
              //     minWidth:60
              //   }}
              // />}
              breakpoint="lg"
              collapsedWidth="0"
              // onBreakpoint={(broken) => {
              //   setHideButton(!broken)
              // }}
              onCollapse={() => {
                setCollapsed((data) => !data)
              }}
            >
              <Menu mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Content style={{ margin: '10px 10px 0' }}>
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
    </BrowserRouter>
  );
};

export default App;