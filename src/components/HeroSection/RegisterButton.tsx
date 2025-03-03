import React from 'react';

const RegisterButton: React.FC = () => {
  return (
    <a 
      href="/register" 
      className="inline-flex justify-center items-center border-2 border-[#FAD8EA] bg-transparent text-[#FAD8EA] hover:bg-white hover:bg-opacity-10 transition-colors w-full sm:w-[397px] h-[72px] rounded-[21px]"
    >
      <span className="font-[Poppins] text-[28px] font-medium">Register Your College</span>
    </a>
  );
};

export default RegisterButton;