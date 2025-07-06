import React from "react";

const SimpleNavbar = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black py-12">
      {/* 上方文字 */}
      <div className="flex flex-col items-center space-y-2 mb-12">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <div className="w-8 h-px bg-gray-400" />
          <span className="italic">ciao</span>
          <div className="w-8 h-px bg-gray-400" />
        </div>
      </div>

      {/* 中間的導航列 */}
      <div className="w-full">
        <div className="border-t border-b border-gray-500 py-4 flex justify-center space-x-12">
          <a href="#" className="px-4 py-2 bg-gray-100">
            HOME
          </a>
          <a href="#" className="px-4 py-2 hover:bg-gray-100 transition">
            ABOUT
          </a>
          <a href="#" className="px-4 py-2 hover:bg-gray-100 transition">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleNavbar;
