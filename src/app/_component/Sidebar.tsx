"use client";
import React from 'react';
import { FaHome, FaUserAlt, FaCog } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar Toggle Button (visible only on mobile) */}
      <div className="p-4 lg:hidden z-20">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 hover:text-gray-600 transition-colors duration-300 focus:outline-none"
        >
          {isOpen ? <AiOutlineClose size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Sidebar (visible on desktop) */}
      <div
        className={`hidden lg:flex lg:w-64 lg:bg-gradient-to-b lg:from-gray-800 lg:to-gray-700 lg:p-6 lg:h-full lg:fixed lg:top-0 lg:left-0 lg:shadow-lg lg:transition-transform lg:duration-300 lg:ease-in-out lg:z-10`}
      >
        <nav>
          <ul className="space-y-6">
            <li>
              <a
                href="/"
                className="flex items-center text-white text-lg hover:text-yellow-300 transition-colors duration-300"
              >
                <FaHome className="mr-4" />
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center text-white text-lg hover:text-yellow-300 transition-colors duration-300"
              >
                <FaUserAlt className="mr-4" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/setting"
                className="flex items-center text-white text-lg hover:text-yellow-300 transition-colors duration-300"
              >
                <FaCog className="mr-4" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Drawer (visible only on mobile) */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-gray-800 to-gray-700 p-6 w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-20`}
      >
        <h2 className="text-white text-2xl font-semibold mb-8">My Sidebar</h2>
        <nav>
          <ul className="space-y-6">
            <li>
              <a
                href="/"
                className="flex items-center text-white text-lg hover:text-yellow-300 transition-colors duration-300"
              >
                <FaHome className="mr-4" />
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center text-white text-lg hover:text-yellow-300 transition-colors duration-300"
              >
                <FaUserAlt className="mr-4" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/setting"
                className="flex items-center text-white text-lg hover:text-yellow-300 transition-colors duration-300"
              >
                <FaCog className="mr-4" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay (visible only when drawer is open on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
