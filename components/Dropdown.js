"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handlelogout = ()=>{

    localStorage.setItem("isLoggedIn", "false")
   
    router.push("/");
  
    
  }

  return (
    <div className="relative inline-block text-left md:hidden">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#362048] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
        





<svg className="w-6 h-6  text-gray-800 dark:text-black  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6H6m12 4H6m12 4H6m12 4H6"/>
</svg>









          <svg
            className={`-mr-1 size-5 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#3d2650]  shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="/"
              className="block px-4 py-2 text-sm text-white font-bold"
              role="menuitem"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-sm text-white font-bold"
              role="menuitem"
              onClick={closeMenu}
            >
             about
            </a>
            <a
              href="/contactus"
              className="block px-4 py-2 text-sm text-white font-bold"
              role="menuitem"
              onClick={closeMenu}
            >
              contact us
            </a>

            <a
              href="/login"
              className="block px-4 py-2 text-sm text-white font-bold"
              role="menuitem"
              onClick={closeMenu}
            >
             login
            </a>


            <a
              href="/signup"
              className="block px-4 py-2 text-sm text-white font-bold"
              role="menuitem"
              onClick={closeMenu}
            >
              signup
            </a>

            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-white font-bold"
                role="menuitem"
                onClick={()=>{handlelogout() ,closeMenu()}}
                
              >
                logout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default dropdown;
