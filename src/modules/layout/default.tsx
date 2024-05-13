import { ReactNode } from 'react';

import { Header } from '@/common/components/Header';
import { Footer } from '@/common/components/Footer';
import { CursorFollower } from '@/common/components/CursorFollower';

import '../../common/style/global.css';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="flex-grow-1 min-h-vh-80 text-default flex h-full flex-col">{children}</main>
      <Footer />
      <CursorFollower />
    </>
  );
};
