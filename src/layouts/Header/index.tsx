// import { getIsAuthenticated } from '@/store/selectors/auth';
import { getDisplayLayout } from '@/store/selectors/layout';
import { ILayout } from '@/store/types/layout';
import React from 'react';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const layout: ILayout = useSelector(getDisplayLayout);
  // const isAuthenticated = useSelector(getIsAuthenticated);
  // if (!isAuthenticated || !header) {
  //   return null;
  // }

  if (!layout.header) {
    return null;
  }
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            Logo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
