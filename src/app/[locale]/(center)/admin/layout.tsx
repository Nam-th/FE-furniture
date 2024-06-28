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
          <div className='py-3'></div>
          <Content style={{ margin: '0 16px' }}>
            
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
