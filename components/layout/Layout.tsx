import MainNavigation from './MainNavigation';
import { FC, ReactNode } from 'react';

type LayoutProps = {
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
