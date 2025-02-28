import React from 'react';
import connectlogo from '../assets/icons/connectlogo.svg';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center text-xl font-bold">
      <span><img src={connectlogo} alt="Connect" /></span>
    </a>
  );
};

export default Logo;
