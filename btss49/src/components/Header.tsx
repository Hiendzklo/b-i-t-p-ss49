// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-white font-bold" : "text-white"}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/product" 
            className={({ isActive }) => isActive ? "text-white font-bold" : "text-white"}
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/detail" 
            className={({ isActive }) => isActive ? "text-white font-bold" : "text-white"}
          >
            Detail
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
