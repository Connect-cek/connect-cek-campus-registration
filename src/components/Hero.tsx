// components/Hero.tsx
import React from 'react';
import RegisterButton from './RegisterButton';
import campus from '../assets/images/institueimg.svg';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-custom text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h1 
          className="text-[100px] md:text-[200px] font-bold mb-6"
          style={{ 
            color: '#FFE2F1',
            fontFamily: '"Bai Jamjuree", sans-serif',
            fontWeight: 700,
            lineHeight: 'normal'
          }}
        >
          CONNECT
        </h1>
        
        <p 
          className="mx-auto mb-8"
          style={{ 
            width: '541px',
            maxWidth: '100%',
            color: 'rgba(250, 216, 234, 0.61)',
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 'normal'
          }}
        >
          A professional networking platform for students, faculty, and alumni
          to connect, collaborate, and grow
        </p>
        
        <RegisterButton />
        
        <div className="mt-12">
          <img src={campus} alt="Campus" className="w-full max-w-4xl mx-auto" />
        </div>      
      </div>
    </div>
  );
};

export default Hero;
