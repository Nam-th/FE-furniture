
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import '@/styles/globals.css';
import '../../styles/core-style.css';
import '../../styles/style.css';
import { Toaster } from "@/components/ui/toaster"

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
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
