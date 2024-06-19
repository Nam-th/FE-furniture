import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Footer, Header } from '@/components';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '../../styles/core-style.css';
import '../../styles/style.css';
import Newsletter from '@/components/Newsletter/Newsletter';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exclusive',
  description: 'A e-commerce website',
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <head></head>

      <body className={inter.className} suppressHydrationWarning={true}>
        <AntdRegistry>
          <div className="main-content-wrapper d-flex clearfix font-helveticaMedium">
            <Header />
            {children}
          </div>
          <Newsletter />
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
