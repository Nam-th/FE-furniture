import { Footer } from 'antd/es/layout/layout';
import React from 'react';

export default function FooterAdmin() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      CozySpace Design ©{new Date().getFullYear()}
    </Footer>
  );
}
