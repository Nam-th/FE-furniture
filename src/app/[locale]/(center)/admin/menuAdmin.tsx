import React from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { Menu } from 'antd';

import type { MenuProps } from 'antd';
import Image from 'next/image';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  const item: MenuItem = {
    key,
    icon,
    children,
    label,
  };
  return item;
}

const items: MenuItem[] = [
  getItem(<Link href="/vi">Home</Link>, '1', <DesktopOutlined />),

  getItem(
    <Link href="/vi/admin/manageProduct">Product</Link>,
    '2',
    <PieChartOutlined />,
  ),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

export default function MenuAdmin() {
  return (
    <>
      <Link href={'/'}>
        <Image
          src="/images/core-img/logo2.png"
          className="my-4 scale-[0.85]"
          alt="logo"
          width={100}
          height={60}
          layout="responsive"
        />
      </Link>

      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </>
  );
}
