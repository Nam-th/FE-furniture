'use client';
import React, { useState } from 'react';

import { Breadcrumb, Layout, theme } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import MenuAdmin from './menuAdmin';
import FooterAdmin from './footerAdmin';
import HeaderAdmin from './headerAdmin';

const { Content, Sider } = Layout;

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntdRegistry>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <MenuAdmin />
        </Sider>
        <Layout>
          <HeaderAdmin />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
          <FooterAdmin />
        </Layout>
      </Layout>
    </AntdRegistry>
  );
};

export default App;
