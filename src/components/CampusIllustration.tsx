import React from 'react';

const CampusIllustration: React.FC = () => {
  return (
    <div className="campus-illustration w-full h-32 md:h-48 relative">
      <svg
        className="w-full"
        viewBox="0 0 1200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Building (Clock Tower) */}
        <path d="M200 50 L200 180 L350 180 L350 50 Z" fill="#b4c6fc" opacity="0.6" />
        <path d="M250 30 L250 50 L300 50 L300 30 Z" fill="#b4c6fc" opacity="0.6" />
        <path d="M260 10 L260 30 L290 30 L290 10 Z" fill="#b4c6fc" opacity="0.6" />
        <circle cx="275" cy="20" r="5" fill="#5850ec" />
        
        {/* Windows for left building */}
        <rect x="220" y="70" width="15" height="20" fill="#f0f5ff" />
        <rect x="250" y="70" width="15" height="20" fill="#f0f5ff" />
        <rect x="280" y="70" width="15" height="20" fill="#f0f5ff" />
        <rect x="310" y="70" width="15" height="20" fill="#f0f5ff" />
        
        <rect x="220" y="110" width="15" height="20" fill="#f0f5ff" />
        <rect x="250" y="110" width="15" height="20" fill="#f0f5ff" />
        <rect x="280" y="110" width="15" height="20" fill="#f0f5ff" />
        <rect x="310" y="110" width="15" height="20" fill="#f0f5ff" />
        
        <rect x="220" y="150" width="15" height="20" fill="#f0f5ff" />
        <rect x="250" y="150" width="15" height="20" fill="#f0f5ff" />
        <rect x="280" y="150" width="15" height="20" fill="#f0f5ff" />
        <rect x="310" y="150" width="15" height="20" fill="#f0f5ff" />
        
        {/* Center Building */}
        <path d="M500 70 L500 180 L700 180 L700 70 Z" fill="#b4c6fc" opacity="0.6" />
        <path d="M550 50 L550 70 L650 70 L650 50 Z" fill="#b4c6fc" opacity="0.6" />
        <path d="M580 30 L580 50 L620 50 L620 30 Z" fill="#b4c6fc" opacity="0.6" />
        <circle cx="600" cy="40" r="5" fill="#5850ec" />
        
        {/* Windows for center building */}
        <rect x="520" y="90" width="15" height="20" fill="#f0f5ff" />
        <rect x="550" y="90" width="15" height="20" fill="#f0f5ff" />
        <rect x="580" y="90" width="15" height="20" fill="#f0f5ff" />
        <rect x="610" y="90" width="15" height="20" fill="#f0f5ff" />
        <rect x="640" y="90" width="15" height="20" fill="#f0f5ff" />
        <rect x="670" y="90" width="15" height="20" fill="#f0f5ff" />
        
        <rect x="520" y="130" width="15" height="20" fill="#f0f5ff" />
        <rect x="550" y="130" width="15" height="20" fill="#f0f5ff" />
        <rect x="580" y="130" width="15" height="20" fill="#f0f5ff" />
        <rect x="610" y="130" width="15" height="20" fill="#f0f5ff" />
        <rect x="640" y="130" width="15" height="20" fill="#f0f5ff" />
        <rect x="670" y="130" width="15" height="20" fill="#f0f5ff" />
        
        {/* Right Building (Capitol/Admin) */}
        <path d="M850 80 L850 180 L1050 180 L1050 80 Z" fill="#b4c6fc" opacity="0.6" />
        <path d="M870 60 L870 80 L1030 80 L1030 60 Z" fill="#b4c6fc" opacity="0.6" />
        <path d="M900 40 L900 60 L1000 60 L1000 40 Z" fill="#b4c6fc" opacity="0.6" />
        <path d="M930 20 L930 40 L970 40 L970 20 Z" fill="#b4c6fc" opacity="0.6" />
        <circle cx="950" cy="10" r="5" fill="#5850ec" />
        
        {/* Windows for right building */}
        <rect x="870" y="100" width="15" height="20" fill="#f0f5ff" />
        <rect x="900" y="100" width="15" height="20" fill="#f0f5ff" />
        <rect x="930" y="100" width="15" height="20" fill="#f0f5ff" />
        <rect x="960" y="100" width="15" height="20" fill="#f0f5ff" />
        <rect x="990" y="100" width="15" height="20" fill="#f0f5ff" />
        <rect x="1020" y="100" width="15" height="20" fill="#f0f5ff" />
        
        <rect x="870" y="140" width="15" height="20" fill="#f0f5ff" />
        <rect x="900" y="140" width="15" height="20" fill="#f0f5ff" />
        <rect x="930" y="140" width="15" height="20" fill="#f0f5ff" />
        <rect x="960" y="140" width="15" height="20" fill="#f0f5ff" />
        <rect x="990" y="140" width="15" height="20" fill="#f0f5ff" />
        <rect x="1020" y="140" width="15" height="20" fill="#f0f5ff" />
        
        {/* Connection lines */}
        <line x1="350" y1="100" x2="500" y2="100" stroke="#f0f5ff" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="700" y1="100" x2="850" y2="100" stroke="#f0f5ff" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Connection nodes */}
        <circle cx="350" cy="100" r="4" fill="#5850ec" />
        <circle cx="500" cy="100" r="4" fill="#5850ec" />
        <circle cx="700" cy="100" r="4" fill="#5850ec" />
        <circle cx="850" cy="100" r="4" fill="#5850ec" />
        
        {/* Additional network nodes */}
        <circle cx="400" cy="60" r="4" fill="#5850ec" />
        <circle cx="450" cy="140" r="4" fill="#5850ec" />
        <circle cx="750" cy="60" r="4" fill="#5850ec" />
        <circle cx="800" cy="140" r="4" fill="#5850ec" />
        
        {/* Additional connection lines */}
        <line x1="350" y1="100" x2="400" y2="60" stroke="#f0f5ff" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="400" y1="60" x2="500" y2="100" stroke="#f0f5ff" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="350" y1="100" x2="450" y2="140" stroke="#f0f5ff" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="450" y1="140" x2="500" y2="100" stroke="#f0f5ff" strokeWidth="2" strokeDasharray="5,5" />
        
        <line x1="700" y1="100" x2="750" y2="60" stroke="#f0f5ff" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="750" y1="60" x2="850" y2="100" stroke="#f0f5ff" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="700" y1="100" x2="800" y2="140" stroke="#f0f5ff" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="800" y1="140" x2="850" y2="100" stroke="#f0f5ff" strokeWidth="2" strokeDasharray="5,5" />
      </svg>
    </div>
  );
};

export default CampusIllustration;