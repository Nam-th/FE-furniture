import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { Avatar } from 'antd';

export default function HeaderAdmin() {
  const username: string = 'Hoàng Nam';
  return (
    <Header className="bg-white">
      <div className="pb-2 text-end">
        <span className="font-bold pr-2">{username}</span>
        <Avatar
          className="ml-3 font-bold"
          style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
        >
          {username.charAt(0)}
        </Avatar>
      </div>
    </Header>
  );
}
