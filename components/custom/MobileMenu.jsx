'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMenu}>
          <div 
            className="absolute top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-xl border-l border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h3>
                <button
                  onClick={toggleMenu}
                  className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="space-y-4">
                <a
                  href="#features"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                  onClick={toggleMenu}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                  onClick={toggleMenu}
                >
                  Pricing
                </a>
                <button className="w-full text-left px-4 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200">
                  Sign In
                </button>
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}