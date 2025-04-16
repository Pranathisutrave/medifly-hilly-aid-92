
import React from "react";

const MedflyLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Left: Hanuman with Sanjeevani */}
      <div className="relative w-14 h-14 mr-2">
        <div className="absolute inset-0 bg-medfly-blue/10 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <path d="M20 5C12.268 5 6 11.268 6 19C6 26.732 12.268 33 20 33C27.732 33 34 26.732 34 19C34 11.268 27.732 5 20 5Z" fill="#FFC107" fillOpacity="0.2" />
            <path d="M18 10C18 10 15 12 15 15C15 18 17 21 17 23C17 25 15 28 15 28" stroke="#FF7043" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 10C22 10 24 13 23 16C22 19 20 20 20 22C20 24 22 26 22 26" stroke="#FF7043" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18 15C18 15 19 14 20 14C21 14 22 15 22 15" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="20" cy="12" r="2" fill="#4CAF50" />
          </svg>
        </div>
      </div>

      {/* Middle: MEDIFLY title */}
      <div className="text-2xl font-bold text-gray-800">
        <span className="text-medfly-blue">MEDI</span>
        <span className="text-medfly-green">FLY</span>
      </div>

      {/* Right: Drone with medical kit */}
      <div className="relative w-14 h-14 ml-2">
        <div className="absolute inset-0 bg-medfly-green/10 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <path d="M20 16L16 20L20 24L24 20L20 16Z" fill="#1E88E5" />
            <path d="M12 16L16 20M24 20L28 16M12 24L16 20M24 20L28 24" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="18" y="24" width="4" height="6" rx="1" fill="#EF5350" />
            <path d="M17 30H23" stroke="#EF5350" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M19 24V18" stroke="#64B5F6" strokeWidth="1" />
            <path d="M21 24V18" stroke="#64B5F6" strokeWidth="1" />
            <circle cx="20" cy="20" r="2" fill="#64B5F6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MedflyLogo;
