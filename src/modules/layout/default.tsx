import { ReactNode } from 'react';

import { Header } from '@/common/components/Header';

import '../../common/style/global.css';

interface Props {
  children: ReactNode;
  showBackButton: boolean;
}

export const Layout: React.FC<Props> = ({ children, showBackButton }) => {
  return (
    <>
      <Header showBackButton={showBackButton} />
      <main className="flex-grow-1 min-h-vh-80 text-default flex h-full flex-col overflow-scroll pt-[100px]">
        {children}
      </main>
    </>
  );
};
