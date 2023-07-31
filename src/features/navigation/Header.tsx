/**
 * Header component that displays the Translation Animation and the Navigation component.
 */
import React from 'react';
import TranslationAnimation from '../../common/generic/TranslationAnimation';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <div>
      <TranslationAnimation content="free shipping over 50€ /" />
      <Navigation />
    </div>
  );
};

export default Header;
