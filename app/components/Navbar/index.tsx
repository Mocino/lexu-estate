import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-clear-day flex items-center justify-center">
              <span className="material-icons text-mosque text-lg">apartment</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">LuxeEstate</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-primary font-medium text-sm border-b-2 border-primary px-1 py-1" href="#">Buy</a>
            <a className="text-white/70 hover:text-white font-medium text-sm hover:border-b-2 hover:border-white/20 px-1 py-1 transition-all" href="#">Rent</a>
            <a className="text-white/70 hover:text-white font-medium text-sm hover:border-b-2 hover:border-white/20 px-1 py-1 transition-all" href="#">Sell</a>
            <a className="text-white/70 hover:text-white font-medium text-sm hover:border-b-2 hover:border-white/20 px-1 py-1 transition-all" href="#">Saved Homes</a>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-white/80 hover:text-primary transition-colors">
              <span className="material-icons">search</span>
            </button>
            <button className="text-white/80 hover:text-primary transition-colors relative">
              <span className="material-icons">notifications_none</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-nordic-dark"></span>
            </button>
            <button className="flex items-center gap-2 pl-2 border-l border-white/20 ml-2">
              <div className="w-9 h-9 rounded-full bg-clear-day overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all">
                <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAWhQZ663Bd08kmzjbOPmUk4UIxYooNONShMEFXLR-DtmVi6Oz-TiaY77SPwFk7g0OobkeZEOMvt6v29mSOD0Xm2g95WbBG3ZjWXmiABOUwGU0LOySRfVDo-JTXQ0-gtwjWxbmue0qDm91m-zEOEZwAW6iRFB1qC1bAU-wkjxm67Sbztq8w7srHkFT9bVEC86qG-FzhOBTomhAurNRmx9l8Yfqabk328NfdKuVLckgCdaPsNFE3yN65MeoRi05GA_gXIMwG4YDIeA"/>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden border-t border-white/10 bg-nordic-dark h-0 overflow-hidden transition-all duration-300">
        <div className="px-4 py-2 space-y-1">
          <a className="block px-3 py-2 rounded-md text-base font-medium text-primary bg-primary/10" href="#">Buy</a>
          <a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5" href="#">Rent</a>
          <a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5" href="#">Sell</a>
          <a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5" href="#">Saved Homes</a>
        </div>
      </div>
    </nav>
  );
}
