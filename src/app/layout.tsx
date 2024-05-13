import { Sofia_Sans } from 'next/font/google';
import StoreProvider from './StoreProvider';

const sofia = Sofia_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={sofia.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
