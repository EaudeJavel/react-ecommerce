import React from 'react';

/**
 * Renders the copyright information for the footer.
 * @param props - Additional props to be spread to the p element.
 */
const Copyright = (props: any) => {
  return (
    <p className="text-right" {...props}>
      {'Copyright © '}
      <a color="inherit" href="#">
        Ecommerce template
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
};

/**
 * Renders the footer component.
 */
const Footer: React.FC = () => {
  return (
    <footer className="flex h-24 w-full flex-col items-center justify-center border-t">
      <Copyright />
    </footer>
  );
};

export default Footer;
