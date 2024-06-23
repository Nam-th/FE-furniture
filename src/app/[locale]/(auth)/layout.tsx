import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Footer, Header, Newsletter } from '@/components';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata: Metadata = {
  title: 'Exclusive',
  description: 'A e-commerce website',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntdRegistry>
      <div className="main-content-wrapper d-flex clearfix font-helveticaMedium">
        <Header />
        {children}
      </div>
      <Newsletter />
      <Footer />
    </AntdRegistry>
  );
}
