import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayLayout } from '@/store/slices/layoutSlice';

const Footer: React.FC = () => {
  const { footer } = useSelector(selectDisplayLayout);

  if (!footer) {
    return null;
  }
  return (
    <div id="footer">
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
