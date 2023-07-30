import React from 'react';

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

const Footer: React.FC = () => {
  return (
    <footer className="flex h-24 w-full flex-col items-center justify-center border-t">
      <Copyright />
    </footer>
  );
};

export default Footer;
