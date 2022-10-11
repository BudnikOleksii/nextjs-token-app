import { MainHeader } from './MainHeader';
import { FC, ReactNode } from 'react';

interface Props  {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};
