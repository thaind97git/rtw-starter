import React from 'react';
import { useSelector } from 'react-redux';
import { ILayout, selectDisplayLayout } from '@/store/slices/layoutSlice';

const Header: React.FC = () => {
  const layout: ILayout = useSelector(selectDisplayLayout);

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
